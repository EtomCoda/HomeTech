import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, CreditCard, Truck, Phone, Mail, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Trust badges section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-blue-800">
          <div className="flex flex-col items-center text-center">
            <CreditCard className="h-8 w-8 mb-3" />
            <h4 className="font-semibold text-lg">Secure Payment</h4>
            <p className="text-blue-200 text-sm">Multiple payment options</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Truck className="h-8 w-8 mb-3" />
            <h4 className="font-semibold text-lg">Fast Delivery</h4>
            <p className="text-blue-200 text-sm">Nationwide shipping</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Shield className="h-8 w-8 mb-3" />
            <h4 className="font-semibold text-lg">Warranty Included</h4>
            <p className="text-blue-200 text-sm">On all products</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Phone className="h-8 w-8 mb-3" />
            <h4 className="font-semibold text-lg">24/7 Support</h4>
            <p className="text-blue-200 text-sm">Always here to help</p>
          </div>
        </div>

        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/kitchen" className="text-blue-200 hover:text-white transition">
                  Kitchen Appliances
                </Link>
              </li>
              <li>
                <Link to="/category/laundry" className="text-blue-200 hover:text-white transition">
                  Laundry Appliances
                </Link>
              </li>
              <li>
                <Link to="/category/hvac" className="text-blue-200 hover:text-white transition">
                  HVAC Systems
                </Link>
              </li>
              <li>
                <Link to="/category/small" className="text-blue-200 hover:text-white transition">
                  Small Appliances
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-blue-200 hover:text-white transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-blue-200 hover:text-white transition">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-blue-200 hover:text-white transition">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/account/orders" className="text-blue-200 hover:text-white transition">
                  Order History
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-blue-200 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-200 hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-blue-200 hover:text-white transition">
                  Warranty Information
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-blue-200 hover:text-white transition">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-orange-500" />
                <span className="text-blue-200">+234 800 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-orange-500" />
                <span className="text-blue-200">info@hometech.ng</span>
              </li>
            </ul>
            <h4 className="text-lg font-bold mt-6 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-blue-800">
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-bold mb-4 text-center">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow rounded-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-blue-800 text-center text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} HomeTech. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;