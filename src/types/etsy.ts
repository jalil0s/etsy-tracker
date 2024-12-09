export interface EtsyListing {
  listing_id: number;
  title: string;
  description: string;
  price: {
    amount: number;
    currency: string;
  };
  url: string;
  views: number;
  num_favorers: number;
  creation_date: string;
  last_modified: string;
  tags: string[];
  shop: {
    shop_id: number;
    shop_name: string;
  };
  images: string[];
}

export interface SearchParams {
  keywords: string;
  limit: number;
  sort_on: string;
  sort_order: string;
}