import React, { useState } from 'react';
import { Search, Plus, X } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const KeywordTracker: React.FC = () => {
  const { keywords, addKeyword, removeKeyword } = useStore();
  const [newKeyword, setNewKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newKeyword.trim()) {
      addKeyword(newKeyword.trim());
      setNewKeyword('');
    }
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <Input
          type="text"
          value={newKeyword}
          onChange={(e) => setNewKeyword(e.target.value)}
          placeholder="Add keyword to track"
          icon={<Search className="w-5 h-5" />}
          className="flex-1"
        />
        <Button type="submit">
          <Plus className="w-5 h-5" />
        </Button>
      </form>

      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <div
            key={keyword}
            className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full"
          >
            <span className="text-sm font-medium">{keyword}</span>
            <button
              onClick={() => removeKeyword(keyword)}
              className="text-gray-500 hover:text-red-500 focus:outline-none"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};