import React, { useState } from 'react';
import { Key } from 'lucide-react';
import { useStore } from '../store/useStore';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const ApiKeyForm: React.FC = () => {
  const { apiKey, setApiKey } = useStore();
  const [inputKey, setInputKey] = useState(apiKey);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApiKey(inputKey);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          type="password"
          value={inputKey}
          onChange={(e) => setInputKey(e.target.value)}
          placeholder="Enter your Etsy API key"
          icon={<Key className="w-5 h-5" />}
          className="flex-1"
        />
        <Button type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};