import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { Refrigerator, WashingMachine, Thermometer, Coffee } from 'lucide-react';

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'refrigerator':
      return <Refrigerator className="h-8 w-8 text-blue-900" />;
    case 'washing-machine':
      return <WashingMachine className="h-8 w-8 text-blue-900" />;
    case 'thermometer':
      return <Thermometer className="h-8 w-8 text-blue-900" />;
    case 'coffee':
      return <Coffee className="h-8 w-8 text-blue-900" />;
    default:
      return <Refrigerator className="h-8 w-8 text-blue-900" />;
  }
};

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:bg-gray-100 text-center h-full flex flex-col justify-between">
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-4 bg-blue-100 rounded-full">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-900 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                </div>
                <div className="text-orange-500 font-medium group-hover:text-orange-600 transition-colors">
                  Browse Products
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;