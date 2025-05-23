import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { isAuthenticated, addToFavorites, removeFromFavorites, isProductFavorite } = useAuth();
  
  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isAuthenticated) {
      // Redirect to login or show login modal
      return;
    }
    
    if (isProductFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  return (
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
          onClick={handleToggleFavorite}
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
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
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
  );
};

export default ProductCard;