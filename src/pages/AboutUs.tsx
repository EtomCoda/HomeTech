import React from "react";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
    <nav className="mb-8">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link to="/" className="hover:text-blue-900">
            Home
          </Link>
        </li>
        <li>
          <span className="mx-2">/</span>
        </li>
        <li className="font-medium text-gray-900">About Us</li>
      </ol>
    </nav>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      About HomeTech
    </h1>
    <p className="mb-4 text-lg text-gray-700">
      HomeTech is your trusted source for the latest in home appliances, smart
      technology, and expert advice. Our mission is to help you make informed
      decisions for a smarter, more comfortable home.
    </p>
    <p className="mb-4 text-gray-700">
      We provide detailed product reviews, buying guides, and tips to simplify
      your home technology journey. Whether you’re upgrading your kitchen,
      laundry, or living space, our team is here to guide you every step of the
      way.
    </p>
    <p className="mb-4 text-gray-700">
      <strong>Why choose HomeTech?</strong>
      <ul className="list-disc ml-6 mt-2">
        <li>Expert, unbiased reviews and recommendations</li>
        <li>Comprehensive guides for all major home appliances</li>
        <li>Latest trends and innovations in smart home technology</li>
        <li>Friendly support and a passion for helping our readers</li>
      </ul>
    </p>
    <p className="text-gray-700">
      Thank you for visiting HomeTech. We’re excited to be part of your home
      improvement journey!
    </p>
  </div>
);

export default AboutUs;
