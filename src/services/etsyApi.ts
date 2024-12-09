import axios from 'axios';
import { EtsyListing, SearchParams } from '../types/etsy';

const BASE_URL = 'https://openapi.etsy.com/v3/application';

export const etsyApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Accept': 'application/json',
  }
});

export const searchEtsyListings = async (
  apiKey: string,
  params: SearchParams
): Promise<EtsyListing[]> => {
  try {
    const response = await etsyApi.get('/listings/active', {
      headers: {
        'x-api-key': apiKey,
      },
      params,
    });

    return response.data.results.map((listing: any) => ({
      listing_id: listing.listing_id,
      title: listing.title,
      description: listing.description,
      price: {
        amount: listing.price.amount,
        currency: listing.price.currency_code,
      },
      url: `https://www.etsy.com/listing/${listing.listing_id}`,
      views: listing.views,
      num_favorers: listing.num_favorers,
      creation_date: listing.creation_timestamp,
      last_modified: listing.last_modified_timestamp,
      tags: listing.tags,
      shop: {
        shop_id: listing.shop_id,
        shop_name: listing.shop_name,
      },
      images: listing.images.map((img: any) => img.url_fullxfull),
    }));
  } catch (error) {
    console.error('Error fetching Etsy listings:', error);
    throw error;
  }
};