import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const PaymentCompletePage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
      <CheckCircle className="h-20 w-20 text-green-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
        Payment Successful!
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Thank you for your purchase. Your payment has been processed and your order is now complete.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-900 text-white rounded-full font-semibold shadow hover:bg-blue-800 transition"
      >
        Back to Home
      </Link>
      <Link
        to="/account"
        className="inline-block px-6 py-3 mt-3 bg-gray-200 text-blue-900 rounded-full font-semibold shadow hover:bg-gray-300 transition"
      >
        View My Account
      </Link>
    </div>
  </div>
);

export default PaymentCompletePage;