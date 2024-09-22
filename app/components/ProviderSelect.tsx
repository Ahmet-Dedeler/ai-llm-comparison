// components/ProviderSelect.tsx
import React, { useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from 'lucide-react';
import { famousProviders, mapProvider, isOtherProvider, getDisplayName } from '../utils/providerMapping';

interface ProviderSelectProps {
  models: any[] | undefined;
  selectedProviders: string[];
  setSelectedProviders: (providers: string[]) => void;
}

const ProviderSelect: React.FC<ProviderSelectProps> = ({ models, selectedProviders, setSelectedProviders }) => {
    const providers = useMemo(() => {
      if (!models || models.length === 0) {
        return [...famousProviders, 'Other'];
      }
  
      const providerSet = new Set(models.map(model => 
        famousProviders.includes(mapProvider(model.provider)) ? mapProvider(model.provider) : 'Other'
      ));
      return Array.from(providerSet).sort((a, b) => {
        if (a === 'Other') return 1;
        if (b === 'Other') return -1;
        return a.localeCompare(b);
      });
    }, [models]);
  
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" className="p-0 font-bold text-left hover:bg-transparent">
            Provider <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              {providers.map((provider) => (
                <div key={provider} className="flex items-center space-x-2">
                  <Checkbox
                    id={provider}
                    checked={selectedProviders.includes(provider)}
                    onCheckedChange={(checked) => {
                      setSelectedProviders(
                        checked
                          ? [...selectedProviders, provider]
                          : selectedProviders.filter((p) => p !== provider)
                      );
                    }}
                  />
                  <label
                    htmlFor={provider}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {provider === 'Other' ? 'Other' : getDisplayName(provider)}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  };
  
  export default ProviderSelect;