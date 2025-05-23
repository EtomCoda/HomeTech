import { Product } from '../types';

export const products: Product[] = [
  // Kitchen Appliances
  {
    id: 'k1',
    name: 'Premium Double Door Refrigerator',
    category: 'kitchen',
    price: 450000,
    rating: 4.8,
    reviews: 124,
    images: [
      'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5825368/pexels-photo-5825368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    description: 'Energy-efficient double door refrigerator with advanced cooling technology and spacious storage.',
    features: [
      'Frost-free technology',
      'Digital temperature control',
      'LED interior lighting',
      'Multiple cooling zones',
      'Energy-saving mode'
    ],
    specifications: {
      dimensions: '70 x 83 x 178 cm',
      capacity: '500 liters',
      energyRating: 'A++',
      color: 'Stainless Steel',
      weight: '85 kg'
    },
    inStock: true,
    isOnSale: true,
    discountPercentage: 10
  },
  {
    id: 'k2',
    name: 'Smart Electric Cooker',
    category: 'kitchen',
    price: 285000,
    rating: 4.6,
    reviews: 89,
    images: [
      'https://images.pexels.com/photos/4993035/pexels-photo-4993035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4992820/pexels-photo-4992820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ],
    description: 'Modern electric cooker with smart features and multiple cooking zones for the entire family.',
    features: [
      'Digital touch controls',
      'Multiple cooking zones',
      'Timer function',
      'Child safety lock',
      'Easy-clean ceramic surface'
    ],
    specifications: {
      dimensions: '60 x 60 x 85 cm',
      capacity: '65 liters (oven)',
      energyRating: 'A',
      color: 'Black',
      weight: '48 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 0
  },
  {
    id: 'k3',
    name: 'Multifunctional Food Processor',
    category: 'kitchen',
    price: 75000,
    rating: 4.5,
    reviews: 205,
    images: [
      'https://images.pexels.com/photos/8105061/pexels-photo-8105061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Versatile food processor with multiple attachments for all your food preparation needs.',
    features: [
      '1000W powerful motor',
      '10 speed settings + pulse',
      'Multiple slicing/grating discs',
      'Dough hook and beater',
      'Blender attachment'
    ],
    specifications: {
      dimensions: '28 x 25 x 42 cm',
      capacity: '3.5 liters',
      energyRating: 'A',
      color: 'Silver/Black',
      weight: '5.2 kg'
    },
    inStock: true,
    isOnSale: true,
    discountPercentage: 15
  },
  // Laundry Appliances
  {
    id: 'l1',
    name: 'Front Load Washing Machine',
    category: 'laundry',
    price: 320000,
    rating: 4.7,
    reviews: 178,
    images: [
      'https://images.pexels.com/photos/5502235/pexels-photo-5502235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5502211/pexels-photo-5502211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'High-efficiency front load washing machine with multiple wash programs and smart features.',
    features: [
      'Inverter motor technology',
      '15 wash programs',
      'Steam cleaning function',
      'Quick wash option',
      'Smart diagnosis'
    ],
    specifications: {
      dimensions: '60 x 65 x 85 cm',
      capacity: '10 kg',
      energyRating: 'A+++',
      color: 'White',
      weight: '75 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 0
  },
  {
    id: 'l2',
    name: 'Heat Pump Dryer',
    category: 'laundry',
    price: 380000,
    rating: 4.6,
    reviews: 92,
    images: [
      'https://images.pexels.com/photos/5502566/pexels-photo-5502566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Energy-efficient heat pump dryer with sensor technology for gentle and thorough drying.',
    features: [
      'Heat pump technology',
      'Moisture sensors',
      'Anti-crease function',
      'Delay start option',
      'Reversible door'
    ],
    specifications: {
      dimensions: '60 x 65 x 85 cm',
      capacity: '8 kg',
      energyRating: 'A++',
      color: 'White',
      weight: '60 kg'
    },
    inStock: true,
    isOnSale: true,
    discountPercentage: 8
  },
  // HVAC Appliances
  {
    id: 'h1',
    name: 'Split Air Conditioner',
    category: 'hvac',
    price: 250000,
    rating: 4.8,
    reviews: 156,
    images: [
      'https://www.pexels.com/photo/house-interior-photo-1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Efficient split air conditioner with inverter technology for optimal cooling and energy savings.',
    features: [
      'Inverter compressor',
      'Sleep mode function',
      'Self-cleaning feature',
      'Air purification filter',
      'WiFi connectivity'
    ],
    specifications: {
      dimensions: '105 x 33 x 25 cm (indoor unit)',
      capacity: '12000 BTU',
      energyRating: 'A++',
      color: 'White',
      weight: '35 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 0
  },
  {
    id: 'h2',
    name: 'Portable Air Cooler',
    category: 'hvac',
    price: 65000,
    rating: 4.3,
    reviews: 210,
    images: [
      'https://images.pexels.com/photos/5824549/pexels-photo-5824549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Compact portable air cooler for smaller spaces with multiple fan speeds and cooling options.',
    features: [
      '3 fan speeds',
      'Oscillation function',
      'Remote control operation',
      'Water/ice compartment',
      'Low energy consumption'
    ],
    specifications: {
      dimensions: '35 x 30 x 75 cm',
      capacity: 'Cools up to 20m²',
      energyRating: 'A',
      color: 'White/Blue',
      weight: '8 kg'
    },
    inStock: true,
    isOnSale: true,
    discountPercentage: 20
  },
  // Small Appliances
  {
    id: 's1',
    name: 'Premium Coffee Maker',
    category: 'small',
    price: 85000,
    rating: 4.9,
    reviews: 245,
    images: [
      'https://images.pexels.com/photos/6206426/pexels-photo-6206426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Professional-grade coffee maker with built-in grinder and multiple brewing options.',
    features: [
      'Built-in conical burr grinder',
      'Adjustable grind size',
      'Programmable timer',
      'Steam wand for milk frothing',
      'Hot water dispenser'
    ],
    specifications: {
      dimensions: '35 x 40 x 45 cm',
      capacity: '1.8 liters',
      energyRating: 'A',
      color: 'Stainless Steel',
      weight: '10 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 0
  },
  {
    id: 's2',
    name: 'Stand Mixer',
    category: 'small',
    price: 120000,
    rating: 4.7,
    reviews: 178,
    images: [
      'https://images.pexels.com/photos/9986228/pexels-photo-9986228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Powerful stand mixer with multiple attachments for all your baking and cooking needs.',
    features: [
      '800W motor',
      '10 speed settings',
      '5 liter stainless steel bowl',
      'Planetary mixing action',
      'Multiple attachments included'
    ],
    specifications: {
      dimensions: '40 x 24 x 35 cm',
      capacity: '5 liters',
      energyRating: 'A',
      color: 'Red',
      weight: '9 kg'
    },
    inStock: true,
    isOnSale: true,
    discountPercentage: 10
  }
];

export const featuredProducts = products.filter(p => p.isOnSale);