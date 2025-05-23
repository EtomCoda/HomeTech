import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../utils/formatters';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  useEffect(() => {
    document.title = 'Your Cart - HomeTech';
  }, []);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link
            to="/"
            className="inline-block bg-blue-900 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-800 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Items ({totalItems})</h2>
            </div>
            
            <ul className="divide-y divide-gray-200">
              {items.map((item) => {
                const price = item.product.isOnSale 
                  ? item.product.price * (1 - item.product.discountPercentage / 100) 
                  : item.product.price;
                
                return (
                  <li key={item.product.id} className="px-6 py-4">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0 flex-shrink-0">
                        <Link to={`/product/${item.product.id}`}>
                          <img 
                            src={item.product.images[0]} 
                            alt={item.product.name}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </Link>
                      </div>
                      
                      <div className="flex-grow sm:ml-6">
                        <div className="flex flex-col sm:flex-row sm:justify-between">
                          <div>
                            <Link 
                              to={`/product/${item.product.id}`}
                              className="text-lg font-medium text-gray-900 hover:text-blue-900 transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            
                            <div className="mt-1 text-sm text-gray-500">
                              {item.product.specifications.color}
                            </div>
                            
                            <div className="mt-1 text-sm text-green-600 font-medium">
                              In Stock
                            </div>
                          </div>
                          
                          <div className="mt-4 sm:mt-0">
                            <div className="text-lg font-bold text-blue-900">
                              {formatCurrency(price)}
                            </div>
                            
                            {item.product.isOnSale && (
                              <div className="text-sm text-gray-500 line-through">
                                {formatCurrency(item.product.price)}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center border rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-4 py-1 border-l border-r">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                              aria-label="Increase quantity"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            
            <div className="px-6 py-4 border-t border-gray-200">
              <Link 
                to="/"
                className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatCurrency(totalPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">{formatCurrency(totalPrice * 0.05)}</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="font-semibold">Total</span>
                <span className="font-bold text-blue-900 text-xl">{formatCurrency(totalPrice * 1.05)}</span>
              </div>
            </div>
            
            <Link
              to="/checkout"
              className="block w-full text-center bg-orange-500 text-white font-medium py-3 px-6 rounded-md hover:bg-orange-600 transition-colors"
            >
              Proceed to Checkout
            </Link>
            
            <div className="mt-6">
              <h3 className="font-medium text-gray-900 mb-2">We Accept</h3>
              <div className="flex space-x-2">
                <div className="bg-gray-100 p-2 rounded">Visa</div>
                <div className="bg-gray-100 p-2 rounded">Mastercard</div>
                <div className="bg-gray-100 p-2 rounded">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;