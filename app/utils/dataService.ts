import { AIModels, AIModelMode } from '../types';

// Cache for storing loaded data
const dataCache = new Map<string, any>();
const CACHE_EXPIRY = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
  data: any;
  timestamp: number;
}

// Lazy loading function for model data
export const loadModelData = async (mode: AIModelMode): Promise<any[]> => {
  const cacheKey = `models_${mode}`;
  const cached = dataCache.get(cacheKey) as CacheEntry;
  
  // Check if we have valid cached data
  if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
    return cached.data;
  }
  
  try {
    // Dynamic import based on mode to reduce initial bundle size
    const { aiModels } = await import('./aiModels');
    const modeData = aiModels[mode] || [];
    
    // Cache the data
    dataCache.set(cacheKey, {
      data: modeData,
      timestamp: Date.now()
    });
    
    return modeData;
  } catch (error) {
    console.error(`Failed to load data for mode ${mode}:`, error);
    return [];
  }
};

// Optimized filtering with memoization
const filterCache = new Map<string, any[]>();

export const getFilteredModels = async (
  mode: AIModelMode,
  searchTerm: string,
  selectedProviders: string[] = []
): Promise<any[]> => {
  const cacheKey = `filtered_${mode}_${searchTerm}_${selectedProviders.join(',')}`;
  
  // Check cache first
  if (filterCache.has(cacheKey)) {
    return filterCache.get(cacheKey)!;
  }
  
  const models = await loadModelData(mode);
  
  const filtered = models.filter((model) => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvider = selectedProviders.length === 0 || 
      selectedProviders.includes(model.provider) ||
      (selectedProviders.includes('Other') && !['openai', 'anthropic', 'google', 'mistral'].includes(model.provider));
    
    return matchesSearch && matchesProvider;
  });
  
  // Cache filtered results (limit cache size)
  if (filterCache.size > 100) {
    const firstKey = filterCache.keys().next().value;
    filterCache.delete(firstKey);
  }
  
  filterCache.set(cacheKey, filtered);
  return filtered;
};

// Optimized sorting
export const getSortedModels = (
  models: any[],
  sortConfig: { key: string | null; direction: 'ascending' | 'descending' }
): any[] => {
  if (!sortConfig.key) return models;
  
  return [...models].sort((a, b) => {
    let aVal, bVal;
    
    if (sortConfig.key === 'supports_vision') {
      aVal = a.sample_spec.supports_vision ? 1 : 0;
      bVal = b.sample_spec.supports_vision ? 1 : 0;
    } else {
      aVal = a.sample_spec[sortConfig.key!];
      bVal = b.sample_spec[sortConfig.key!];
    }
    
    if (aVal < bVal) return sortConfig.direction === 'ascending' ? -1 : 1;
    if (aVal > bVal) return sortConfig.direction === 'ascending' ? 1 : -1;
    return 0;
  });
};

// Preload data for better UX
export const preloadModeData = (mode: AIModelMode) => {
  // Preload in the background without blocking
  setTimeout(() => {
    loadModelData(mode).catch(() => {
      // Silently fail for preloading
    });
  }, 100);
};

// Clear cache when needed
export const clearCache = () => {
  dataCache.clear();
  filterCache.clear();
}; 