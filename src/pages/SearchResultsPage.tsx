import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/common/ProductCard';
import { Product } from '../types';

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    document.title = `Search Results for "${query}" - HomeTech`;
    
    // Simple search implementation
    const searchResults = products.filter(product => {
      const searchString = `${product.name} ${product.description} ${product.category}`.toLowerCase();
      const searchTerms = query.toLowerCase().split(' ');
      return searchTerms.every(term => searchString.includes(term));
    });
    
    setResults(searchResults);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center mb-8">
        <Search className="h-8 w-8 text-gray-400 mr-3" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Search Results</h1>
          <p className="text-gray-600 mt-1">
            {results.length} {results.length === 1 ? 'result' : 'results'} for "{query}"
          </p>
        </div>
      </div>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No products found</h2>
          <p className="text-gray-600 mb-4">
            We couldn't find any products matching your search. Try using different keywords or browse our categories.
          </p>
          <div className="text-sm text-gray-600">
            <p className="font-medium mb-2">Suggestions:</p>
            <ul className="list-disc list-inside">
              <li>Check your spelling</li>
              <li>Use more general terms</li>
              <li>Try searching by category</li>
              <li>Reduce the number of search terms</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;