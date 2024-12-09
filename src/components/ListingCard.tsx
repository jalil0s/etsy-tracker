import React from 'react';
import { ExternalLink, Heart, Eye } from 'lucide-react';
import { EtsyListing } from '../types/etsy';
import { Card } from './ui/Card';

interface ListingCardProps {
  listing: EtsyListing;
}

export const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <Card>
      {listing.images[0] && (
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      )}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {listing.title}
        </h3>
        <p className="text-sm text-neutral-600">
          {listing.shop.shop_name}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-primary-600">
            {listing.price.amount} {listing.price.currency}
          </span>
          <div className="flex items-center space-x-4 text-neutral-500">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span className="text-sm">{listing.views}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="w-4 h-4" />
              <span className="text-sm">{listing.num_favorers}</span>
            </div>
          </div>
        </div>
        <a
          href={listing.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-1 text-primary-500 hover:text-primary-600"
        >
          <span>View on Etsy</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </Card>
  );
};