import React from 'react';
import { Search } from 'lucide-react';
import { ApiKeyForm } from './components/ApiKeyForm';
import { KeywordTracker } from './components/KeywordTracker';
import { ListingCard } from './components/ListingCard';
import { useEtsyListings } from './hooks/useEtsyListings';

function App() {
  const { data: listings, isLoading, error } = useEtsyListings();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center space-x-2 mb-8">
          <Search className="w-8 h-8 text-blue-500" />
          <h1 className="text-3xl font-bold font-display">Etsy Listing Tracker</h1>
        </div>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">API Configuration</h2>
            <ApiKeyForm />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Keywords</h2>
            <KeywordTracker />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Latest Listings</h2>
            {isLoading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              </div>
            )}
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Error loading listings. Please check your API key and try again.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings?.map((listing) => (
                <ListingCard key={listing.listing_id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;