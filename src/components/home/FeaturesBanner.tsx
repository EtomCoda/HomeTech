import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Phone } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-orange-500" />,
    title: 'Extended Warranty',
    description: 'All products come with a minimum 1-year warranty for your peace of mind.'
  },
  {
    icon: <Truck className="h-8 w-8 text-orange-500" />,
    title: 'Fast Nationwide Delivery',
    description: 'We deliver across the country with expedited shipping options available.'
  },
  {
    icon: <RotateCcw className="h-8 w-8 text-orange-500" />,
    title: '30-Day Return Policy',
    description: 'Not satisfied? Return your unused product within 30 days for a full refund.'
  },
  {
    icon: <Phone className="h-8 w-8 text-orange-500" />,
    title: '24/7 Customer Support',
    description: 'Our support team is always available to help with any questions or issues.'
  }
];

const FeaturesBanner: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Choose HomeTech</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg transition-all duration-300 hover:shadow-md"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;