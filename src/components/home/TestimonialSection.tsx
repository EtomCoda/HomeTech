import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Adebayo Johnson',
    role: 'Homeowner',
    content: 'The refrigerator I purchased has transformed my kitchen. Excellent quality and the delivery was faster than expected. The installation team was professional and helpful.',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Chiamaka Okafor',
    role: 'Property Manager',
    content: 'We\'ve furnished multiple apartments with appliances from HomeTech. Their reliability and after-sales service have made them our go-to supplier for all our properties.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Mohammed Ibrahim',
    role: 'Restaurant Owner',
    content: 'The commercial appliances I purchased for my restaurant have been running flawlessly for over a year now. The energy efficiency has noticeably reduced our electricity bills.',
    rating: 4,
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What Our Customers Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We pride ourselves on providing exceptional products and service. Here's what some of our satisfied customers have to say.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex text-orange-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4" 
                    fill={i < testimonial.rating ? "currentColor" : "none"} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700 italic flex-grow">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;