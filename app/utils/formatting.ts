/**
 * Formats a number with commas as thousands separators
 * @param num - The number to format
 * @returns Formatted string with commas
 */
export function formatNumberWithCommas(num: number | string | null | undefined): string {
  if (num === null || num === undefined || num === 'N/A') {
    return 'N/A';
  }
  
  const numValue = typeof num === 'string' ? parseFloat(num) : num;
  
  if (isNaN(numValue)) {
    return 'N/A';
  }
  
  return numValue.toLocaleString();
}

/**
 * Formats a price/cost with dollar sign and appropriate decimal places
 * @param price - The price to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted price string with dollar sign
 */
export function formatPrice(price: number | string | null | undefined, decimals: number = 2): string {
  if (price === null || price === undefined || price === 'N/A') {
    return 'N/A';
  }
  
  const priceValue = typeof price === 'string' ? parseFloat(price) : price;
  
  if (isNaN(priceValue)) {
    return 'N/A';
  }
  
  return `$${priceValue.toFixed(decimals)}`;
}

/**
 * Formats a price per million tokens with dollar sign
 * @param price - The price per token to format (will be multiplied by 1M)
 * @returns Formatted price string with dollar sign
 */
export function formatPricePerMillionTokens(price: number | string | null | undefined): string {
  if (price === null || price === undefined || price === 'N/A') {
    return 'N/A';
  }
  
  const priceValue = typeof price === 'string' ? parseFloat(price) : price;
  
  if (isNaN(priceValue)) {
    return 'N/A';
  }
  
  return `$${(priceValue * 1e6).toFixed(2)}`;
} 