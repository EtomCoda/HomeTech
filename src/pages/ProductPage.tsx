import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Heart, ArrowRight, ArrowLeft, Truck, ShieldCheck, RotateCcw, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { formatCurrency } from '../utils/formatters';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import ProductCarousel from '../components/home/ProductCarousel';

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const { addToCart } = useCart();
  const { isAuthenticated, addToFavorites, removeFromFavorites, isProductFavorite } = useAuth();
  const navigate = useNavigate();

  const product = products.find(p => p.id === productId);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  useEffect(() => {
    if (product) {
      document.title = `${product.name} - HomeTech`;
      setSelectedImage(0); // Reset selected image when product changes
    }
  }, [product]);

  if (!product) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  const actualPrice = product.isOnSale 
    ? product.price * (1 - product.discountPercentage / 100) 
    : product.price;

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleToggleFavorite = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    if (isProductFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="hover:text-blue-900">Home</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to={`/category/${product.category}`} className="hover:text-blue-900">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Appliances
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="font-medium text-gray-900 truncate max-w-xs">{product.name}</li>
        </ol>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="mb-4 bg-white rounded-lg overflow-hidden">
            <img 
              src={product.images[selectedImage]} 
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                  selectedImage === index ? 'border-blue-900' : 'border-transparent'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-orange-500">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="h-5 w-5" 
                  fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                />
              ))}
            </div>
            <span className="text-gray-600 ml-2">{product.rating} ({product.reviews} reviews)</span>
          </div>
          
          <div className="mb-6">
            {product.isOnSale ? (
              <div className="flex items-center">
                <span className="text-3xl font-bold text-blue-900 mr-3">
                  {formatCurrency(actualPrice)}
                </span>
                <span className="text-gray-500 line-through text-lg">
                  {formatCurrency(product.price)}
                </span>
                <span className="ml-3 px-2 py-1 bg-orange-100 text-orange-700 text-sm font-semibold rounded">
                  {product.discountPercentage}% OFF
                </span>
              </div>
            ) : (
              <span className="text-3xl font-bold text-blue-900">
                {formatCurrency(product.price)}
              </span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Key Features:</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-center text-gray-700 mb-2">
              <ShieldCheck className="h-5 w-5 text-green-600 mr-2" />
              2-Year Warranty Included
            </div>
            <div className="flex items-center text-gray-700 mb-2">
              <Truck className="h-5 w-5 text-blue-600 mr-2" />
              Free Delivery
            </div>
            <div className="flex items-center text-gray-700">
              <RotateCcw className="h-5 w-5 text-orange-600 mr-2" />
              30-Day Return Policy
            </div>
          </div>
          
          <div className="flex items-center mb-6">
            <span className="mr-4 text-gray-700">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button 
                onClick={decrementQuantity} 
                disabled={quantity <= 1}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 border-l border-r">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="ml-4 text-sm text-gray-600">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </div>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-grow py-3 px-6 rounded-md font-medium transition-colors ${
                product.inStock
                  ? 'bg-blue-900 text-white hover:bg-blue-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Add to Cart
            </button>
            
            <button
              onClick={handleToggleFavorite}
              className={`p-3 rounded-md transition-colors ${
                isProductFavorite(product.id)
                  ? 'bg-red-50 text-red-500 border border-red-300'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-300'
              }`}
              aria-label={isProductFavorite(product.id) ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart className="h-6 w-6" fill={isProductFavorite(product.id) ? "currentColor" : "none"} />
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mb-12">
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-blue-900 text-blue-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>

        <div>
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p className="text-gray-700">{product.description}</p>
              <h3 className="text-xl font-semibold mt-4 mb-2">Features in Detail</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4 mb-2">Product Benefits</h3>
              <p className="text-gray-700">
                This {product.name.toLowerCase()} is designed to make your life easier and more efficient. With its 
                cutting-edge technology and thoughtful design, it provides exceptional performance while saving 
                energy and time.
              </p>
              <p className="text-gray-700 mt-2">
                The product comes with a comprehensive 2-year warranty and our promise of excellent after-sales 
                service. Installation services are available upon request.
              </p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Specifications</h3>
              <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50 w-1/3">Dimensions</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.specifications.dimensions}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">Capacity</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.specifications.capacity}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">Energy Rating</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.specifications.energyRating}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">Color</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.specifications.color}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">Weight</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.specifications.weight}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">Warranty</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">2 Years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">What's in the Box</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>1 x {product.name}</li>
                <li>1 x User Manual</li>
                <li>1 x Warranty Card</li>
                <li>Installation kit (where applicable)</li>
              </ul>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <div className="flex items-center mb-6">
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-5 w-5" 
                          fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">{product.rating} out of 5</span>
                  </div>
                  <span className="text-sm text-gray-500">Based on {product.reviews} reviews</span>
                </div>
                <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                  Write a Review
                </button>
              </div>
              
              {/* Mock Reviews */}
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="mr-3 bg-blue-900 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">
                        OA
                      </div>
                      <div>
                        <h4 className="font-medium">Oluwaseun Adeniyi</h4>
                        <span className="text-sm text-gray-500">Verified Purchase</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">2 months ago</div>
                  </div>
                  <div className="flex text-orange-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4" 
                        fill={i < 5 ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                  <h5 className="font-medium mb-2">Excellent quality and performance</h5>
                  <p className="text-gray-700">
                    This product exceeded my expectations. It's very energy efficient and looks great in my home.
                    The delivery was quick and the installation team was professional.
                  </p>
                </div>
                
                <div className="border-b pb-6">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="mr-3 bg-blue-900 text-white h-10 w-10 rounded-full flex items-center justify-center font-semibold">
                        FO
                      </div>
                      <div>
                        <h4 className="font-medium">Funmilayo Okonkwo</h4>
                        <span className="text-sm text-gray-500">Verified Purchase</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">1 month ago</div>
                  </div>
                  <div className="flex text-orange-500 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4" 
                        fill={i < 4 ? "currentColor" : "none"} 
                      />
                    ))}
                  </div>
                  <h5 className="font-medium mb-2">Great product, minor issues</h5>
                  <p className="text-gray-700">
                    Overall I'm very happy with this purchase. The product works well and looks sleek.
                    The only reason I'm not giving 5 stars is because the initial setup took longer than expected.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <button className="flex items-center text-blue-900 font-medium hover:text-blue-700">
                  See All Reviews <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((related) => (
            <Link key={related.id} to={`/product/${related.id}`} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="relative">
                  <img 
                    src={related.images[0]} 
                    alt={related.name}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {related.isOnSale && (
                    <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {related.discountPercentage}% OFF
                    </div>
                  )}
                </div>
                
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-900 transition-colors mb-1">
                    {related.name}
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4" 
                          fill={i < Math.floor(related.rating) ? "currentColor" : "none"} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-1">({related.reviews})</span>
                  </div>
                  
                  <div className="mt-auto">
                    {related.isOnSale ? (
                      <div>
                        <span className="text-gray-500 line-through text-sm">
                          {formatCurrency(related.price)}
                        </span>
                        <span className="text-xl font-bold text-blue-900 ml-2">
                          {formatCurrency(related.price * (1 - related.discountPercentage / 100))}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xl font-bold text-blue-900">
                        {formatCurrency(related.price)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Back to category */}
      <div className="border-t pt-6">
        <Link 
          to={`/category/${product.category}`} 
          className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Appliances
        </Link>
      </div>
    </div>
  );
};

export default ProductPage;