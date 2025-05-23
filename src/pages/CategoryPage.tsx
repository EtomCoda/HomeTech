import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, SlidersHorizontal } from 'lucide-react';
import ProductCard from '../components/common/ProductCard';
import { products } from '../data/products';
import { categories } from '../data/categories';
import { Product } from '../types';
import { formatCurrency } from '../utils/formatters';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [availability, setAvailability] = useState<boolean | null>(null);
  const [sortOption, setSortOption] = useState<string>('featured');

  const category = categories.find(c => c.id === categoryId);
  const categoryProducts = products.filter(p => p.category === categoryId);

  // Get min and max prices for the category
  const prices = categoryProducts.map(p => p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  useEffect(() => {
    if (category) {
      document.title = `${category.name} - HomeTech`;
    }
    
    // Initialize price range to the min/max values of the category
    setPriceRange([minPrice, maxPrice]);
  }, [category, categoryId, minPrice, maxPrice]);

  useEffect(() => {
    let filtered = [...categoryProducts];
    
    // Apply price range filter
    filtered = filtered.filter(p => {
      const effectivePrice = p.isOnSale 
        ? p.price * (1 - p.discountPercentage / 100)
        : p.price;
      return effectivePrice >= priceRange[0] && effectivePrice <= priceRange[1];
    });
    
    // Apply rating filter
    if (selectedRating !== null) {
      filtered = filtered.filter(p => Math.floor(p.rating) >= selectedRating);
    }
    
    // Apply availability filter
    if (availability !== null) {
      filtered = filtered.filter(p => p.inStock === availability);
    }
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = a.isOnSale ? a.price * (1 - a.discountPercentage / 100) : a.price;
          const priceB = b.isOnSale ? b.price * (1 - b.discountPercentage / 100) : b.price;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = a.isOnSale ? a.price * (1 - a.discountPercentage / 100) : a.price;
          const priceB = b.isOnSale ? b.price * (1 - b.discountPercentage / 100) : b.price;
          return priceB - priceA;
        });
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // For demo, we'll just randomize
        filtered.sort(() => Math.random() - 0.5);
        break;
      default: // 'featured'
        filtered = filtered.sort((a, b) => (b.isOnSale ? 1 : 0) - (a.isOnSale ? 1 : 0));
        break;
    }
    
    setFilteredProducts(filtered);
  }, [categoryProducts, priceRange, selectedRating, availability, sortOption]);

  if (!category) {
    return <div className="py-20 text-center">Category not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar - Desktop */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <Filter className="h-5 w-5 mr-2" /> Filters
            </h2>
            
            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{formatCurrency(priceRange[0])}</span>
                  <span>{formatCurrency(priceRange[1])}</span>
                </div>
                <input 
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input 
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Rating Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Rating</h3>
              <div className="space-y-2">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input 
                      type="radio"
                      name="rating"
                      checked={selectedRating === rating}
                      onChange={() => setSelectedRating(rating)}
                      className="mr-2"
                    />
                    {rating}+ Stars
                  </label>
                ))}
                <label className="flex items-center">
                  <input 
                    type="radio"
                    name="rating"
                    checked={selectedRating === null}
                    onChange={() => setSelectedRating(null)}
                    className="mr-2"
                  />
                  Any Rating
                </label>
              </div>
            </div>
            
            {/* Availability Filter */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Availability</h3>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input 
                    type="radio"
                    name="availability"
                    checked={availability === true}
                    onChange={() => setAvailability(true)}
                    className="mr-2"
                  />
                  In Stock
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio"
                    name="availability"
                    checked={availability === false}
                    onChange={() => setAvailability(false)}
                    className="mr-2"
                  />
                  Out of Stock
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio"
                    name="availability"
                    checked={availability === null}
                    onChange={() => setAvailability(null)}
                    className="mr-2"
                  />
                  All Items
                </label>
              </div>
            </div>
            
            {/* Reset Filters */}
            <button 
              onClick={() => {
                setPriceRange([minPrice, maxPrice]);
                setSelectedRating(null);
                setAvailability(null);
              }}
              className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
        
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full py-2 px-4 bg-gray-100 text-gray-800 rounded-md flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Mobile Filters */}
        {isFilterOpen && (
          <div className="lg:hidden mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatCurrency(priceRange[0])}</span>
                    <span>{formatCurrency(priceRange[1])}</span>
                  </div>
                  <input 
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input 
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
              
              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input 
                        type="radio"
                        name="rating-mobile"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                        className="mr-2"
                      />
                      {rating}+ Stars
                    </label>
                  ))}
                  <label className="flex items-center">
                    <input 
                      type="radio"
                      name="rating-mobile"
                      checked={selectedRating === null}
                      onChange={() => setSelectedRating(null)}
                      className="mr-2"
                    />
                    Any Rating
                  </label>
                </div>
              </div>
              
              {/* Availability Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input 
                      type="radio"
                      name="availability-mobile"
                      checked={availability === true}
                      onChange={() => setAvailability(true)}
                      className="mr-2"
                    />
                    In Stock
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio"
                      name="availability-mobile"
                      checked={availability === false}
                      onChange={() => setAvailability(false)}
                      className="mr-2"
                    />
                    Out of Stock
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio"
                      name="availability-mobile"
                      checked={availability === null}
                      onChange={() => setAvailability(null)}
                      className="mr-2"
                    />
                    All Items
                  </label>
                </div>
              </div>
              
              {/* Reset Filters */}
              <button 
                onClick={() => {
                  setPriceRange([minPrice, maxPrice]);
                  setSelectedRating(null);
                  setAvailability(null);
                }}
                className="w-full py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
        
        {/* Products Grid */}
        <div className="flex-grow">
          {/* Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-gray-600">
              <span className="font-medium">{filteredProducts.length}</span> products found
            </div>
            <div className="flex items-center">
              <span className="text-gray-600 mr-2">Sort by:</span>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-900"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
          
          {/* Products */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your filters to find products.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;