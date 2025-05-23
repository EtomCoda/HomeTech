import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { formatCurrency } from '../utils/formatters';

const AccountPage: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'My Account - HomeTech';
    
    if (!isAuthenticated) {
      navigate('/login?redirect=account');
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <div className="bg-blue-900 text-white h-12 w-12 rounded-full flex items-center justify-center font-semibold text-xl">
                {user.name.charAt(0)}
              </div>
              <div className="ml-3">
                <h2 className="font-semibold text-gray-900">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              <button className="w-full flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md">
                <User className="h-5 w-5 mr-3" />
                Profile
              </button>
              <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Package className="h-5 w-5 mr-3" />
                Orders
              </button>
              <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Heart className="h-5 w-5 mr-3" />
                Favorites
              </button>
              <button className="w-full flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </button>
              <button 
                onClick={handleLogout}
                className="w-full flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-md"
              >
                <LogOut className="h-5 w-5 mr-3" />
                Logout
              </button>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Profile Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={user.name}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                  disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={user.email}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50"
                  disabled
                />
              </div>
            </div>
          </div>
          
          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            {user.orders.length > 0 ? (
              <div className="space-y-4">
                {user.orders.map((order) => (
                  <div key={order.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-sm text-gray-600">Order ID: {order.id}</span>
                        <p className="font-medium">{formatCurrency(order.total)}</p>
                      </div>
                      <span className={`px-2 py-1 text-sm rounded-full ${
                        order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No orders yet</p>
            )}
          </div>
          
          {/* Favorite Products */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Favorite Products</h2>
            {user.favorites.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Favorite products would be rendered here */}
                <p className="text-gray-600">Favorite products list</p>
              </div>
            ) : (
              <p className="text-gray-600">No favorite products yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;