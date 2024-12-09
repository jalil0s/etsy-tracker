import { useQuery } from 'react-query';
import { searchEtsyListings } from '../services/etsyApi';
import { useStore } from '../store/useStore';
import { API_CONFIG } from '../config/constants';

export function useEtsyListings() {
  const { apiKey, keywords } = useStore();

  return useQuery(
    ['listings', keywords],
    async () => {
      if (!apiKey || keywords.length === 0) return [];
      
      const allListings = await Promise.all(
        keywords.map(keyword =>
          searchEtsyListings(apiKey, {
            keywords: keyword,
            limit: API_CONFIG.DEFAULT_LIMIT,
            sort_on: 'created',
            sort_order: 'desc'
          })
        )
      );
      
      return allListings.flat();
    },
    {
      enabled: !!apiKey && keywords.length > 0,
      refetchInterval: API_CONFIG.REFETCH_INTERVAL,
    }
  )
}