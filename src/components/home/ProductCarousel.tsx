import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Heart } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Product } from '../../types';

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { addToCart } = useCart();
  const { isAuthenticated, addToFavorites, removeFromFavorites, isProductFavorite } = useAuth();
  
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleToggleFavorite = (e: React.MouseEvent, productId: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      // Redirect to login or show login modal
      return;
    }
    
    if (isProductFavorite(productId)) {
      removeFromFavorites(productId);
    } else {
      addToFavorites(productId);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <div className="flex space-x-2">
            <button 
              onClick={scrollLeft}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </button>
            <button 
              onClick={scrollRight}
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto pb-4 hide-scrollbar snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="flex-shrink-0 w-full max-w-xs snap-start"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative">
                  <Link to={`/product/${product.id}`}>
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  {product.isOnSale && (
                    <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discountPercentage}% OFF
                    </div>
                  )}
                  <button
                    onClick={(e) => handleToggleFavorite(e, product.id)}
                    className={`absolute top-2 right-2 p-2 rounded-full ${
                      isProductFavorite(product.id) 
                        ? 'bg-red-50 text-red-500' 
                        : 'bg-white text-gray-400 hover:text-red-500'
                    }`}
                    aria-label={isProductFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart className="h-5 w-5" fill={isProductFavorite(product.id) ? "currentColor" : "none"} />
                  </button>
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-900 transition-colors mb-1">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-2">
                      <div className="flex text-orange-500">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="h-4 w-4" 
                            fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex justify-between items-end mb-4">
                      <div>
                        {product.isOnSale ? (
                          <div>
                            <span className="text-gray-500 line-through text-sm">
                              {formatCurrency(product.price)}
                            </span>
                            <span className="text-xl font-bold text-blue-900 ml-2">
                              {formatCurrency(product.price * (1 - product.discountPercentage / 100))}
                            </span>
                          </div>
                        ) : (
                          <span className="text-xl font-bold text-blue-900">
                            {formatCurrency(product.price)}
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-green-600 font-medium">
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </div>
                    </div>
                    
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full py-2 px-4 rounded-md font-medium transition-colors ${
                        product.inStock
                          ? 'bg-blue-900 text-white hover:bg-blue-800'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;