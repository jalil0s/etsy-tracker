export const API_CONFIG = {
  BASE_URL: 'https://openapi.etsy.com/v3/application',
  REFETCH_INTERVAL: 300000, // 5 minutes
  DEFAULT_LIMIT: 20,
} as const;

export const STORAGE_KEYS = {
  ETSY_TRACKER: 'etsy-tracker-storage',
} as const;