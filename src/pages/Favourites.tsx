import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Favourites: React.FC = () => (
  <div className="max-w-2xl mx-auto px-4 sm:px-6 py-24 flex flex-col items-center justify-center">
    <Heart className="h-16 w-16 text-pink-400 mb-6 animate-bounce" />
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
      No Favourites Yet
    </h1>
    <p className="text-lg text-gray-600 mb-8 text-center">
      You haven't added any products to your favourites.<br />
      Start exploring and add your favourite items for quick access!
    </p>
    <Link
      to="/"
      className="inline-block px-6 py-3 bg-blue-900 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition"
    >
      Browse Products
    </Link>
  </div>
);

export default Favourites;