import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { X, Star } from 'lucide-react';
import { products } from '../data/products';
import { Product } from '../types';
import { formatCurrency } from '../utils/formatters';

const ComparisonPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);

  useEffect(() => {
    document.title = 'Compare Products - HomeTech';
    
    const productIds = searchParams.get('products')?.split(',') || [];
    const foundProducts = products.filter(p => productIds.includes(p.id));
    setComparedProducts(foundProducts);
  }, [searchParams]);

  const removeProduct = (productId: string) => {
    const newProducts = comparedProducts.filter(p => p.id !== productId);
    const newParams = new URLSearchParams(searchParams);
    
    if (newProducts.length > 0) {
      newParams.set('products', newProducts.map(p => p.id).join(','));
    } else {
      newParams.delete('products');
    }
    
    setSearchParams(newParams);
  };

  if (comparedProducts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Compare Products</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 mb-4">No products selected for comparison</p>
          <Link
            to="/"
            className="inline-block bg-blue-900 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-800 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Compare Products</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-4 text-left bg-gray-50 font-medium text-gray-600">Features</th>
              {comparedProducts.map((product) => (
                <th key={product.id} className="p-4 text-center min-w-[300px]">
                  <div className="relative">
                    <button
                      onClick={() => removeProduct(product.id)}
                      className="absolute -top-2 -right-2 p-1 bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      <X className="h-4 w-4 text-gray-600" />
                    </button>
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <div className="flex justify-center items-center my-2">
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
                    <div className="text-xl font-bold text-blue-900">
                      {product.isOnSale ? (
                        <>
                          <span className="text-gray-500 line-through text-sm mr-2">
                            {formatCurrency(product.price)}
                          </span>
                          {formatCurrency(product.price * (1 - product.discountPercentage / 100))}
                        </>
                      ) : (
                        formatCurrency(product.price)
                      )}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-4 font-medium text-gray-600 bg-gray-50">Category</td>
              {comparedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-600 bg-gray-50">Description</td>
              {comparedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.description}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-600 bg-gray-50">Dimensions</td>
              {comparedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.specifications.dimensions}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-600 bg-gray-50">Energy Rating</td>
              {comparedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.specifications.energyRating}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-600 bg-gray-50">Color</td>
              {comparedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.specifications.color}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-600 bg-gray-50">Weight</td>
              {comparedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  {product.specifications.weight}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-600 bg-gray-50">Features</td>
              {comparedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  <ul className="list-disc list-inside text-left">
                    {product.features.map((feature, index) => (
                      <li key={index} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 font-medium text-gray-600 bg-gray-50">Availability</td>
              {comparedProducts.map((product) => (
                <td key={product.id} className="p-4 text-center">
                  <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonPage;