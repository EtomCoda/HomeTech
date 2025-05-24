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
      'https://images.unsplash.com/photo-1722859178634-ccc8ea5680d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1536353284924-9220c464e262?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
    discountPercentage: 30
  },
  {  
    id: 'k2',
    name: 'Smart Electric Cooker',
    category: 'kitchen',
    price: 285000,
    rating: 4.6,
    reviews: 89,
    images: [
      "https://i1.wp.com/www.tadiarlli.com/wp-content/uploads/2019/04/cook.jpg?fit=1200%2C1200&ssl=1",
      "https://th.bing.com/th/id/R.16610d4ad4b498026f28ea99a07867bd?rik=MZzvvAlKZmVi0Q&pid=ImgRaw&r=0"
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
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/1196283/1.jpg?8369'
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

    {
    id: 'k4',
    name: 'Built-in Dishwasher',
    category: 'kitchen',
    price: 210000,
    rating: 4.4,
    reviews: 77,
    images: [
      'https://th.bing.com/th/id/OIP.k889yumIpLSVxIIeGV6S2gHaIP?cb=iwp2&rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.ie9jjUCWcbAzz4euYPAaxQHaHa?cb=iwp2&w=646&h=646&rs=1&pid=ImgDetMain'
    ],
    description: 'Efficient built-in dishwasher with multiple wash programs and quiet operation.',
    features: [
      '12 place settings',
      'Eco wash mode',
      'Delay start',
      'Child lock',
      'Stainless steel tub'
    ],
    specifications: {
      dimensions: '60 x 60 x 85 cm',
      capacity: '12 sets',
      energyRating: 'A++',
      color: 'Silver',
      weight: '38 kg'
    },
    inStock: true,
    isOnSale: true,
    discountPercentage: 9
  },
  {
    id: 'k5',
    name: 'Microwave Oven',
    category: 'kitchen',
    price: 65000,
    rating: 4.3,
    reviews: 134,
    images: [
      'https://res.cloudinary.com/sharp-consumer-eu/image/fetch/w_3000,f_auto/https://s3-eu-west-1.amazonaws.com/accounts-media/SHRP/DAM/origin/8b6b9f7e-3a15-11eb-b75a-0e659a6d8321.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/81A53oOS-gL._SL1500_.jpg'
    ],
    description: 'Versatile microwave oven with grill function and digital controls.',
    features: [
      'Grill and microwave combo',
      'Digital timer',
      'Auto-cook menus',
      'Defrost function',
      'Child safety lock'
    ],
    specifications: {
      dimensions: '48 x 38 x 28 cm',
      capacity: '25 liters',
      energyRating: 'A',
      color: 'Black/Silver',
      weight: '14 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 0
  },
  {
    id: 'k6',
    name: 'Juicer Blender Combo',
    category: 'kitchen',
    price: 42000,
    rating: 4.2,
    reviews: 98,
    images: [
      'https://th.bing.com/th/id/OIP.0xZxpQSX3LpS5IfjB614ogHaHa?cb=iwp2&rs=1&pid=ImgDetMain'
    ],
    description: '2-in-1 juicer and blender for fresh juices and smoothies at home.',
    features: [
      'Powerful 700W motor',
      '2 speed settings',
      'Large pulp container',
      'Easy to clean',
      'Safety lock system'
    ],
    specifications: {
      dimensions: '22 x 18 x 40 cm',
      capacity: '1.5 liters',
      energyRating: 'A',
      color: 'Gray',
      weight: '3.5 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 0
  },
  {
    id: 'k7',
    name: 'Air Fryer',
    category: 'kitchen',
    price: 58000,
    rating: 4.6,
    reviews: 160,
    images: [
      'https://th.bing.com/th/id/R.f7c0bac70ed7d2c049e1e1e77f54d8b6?rik=Lnsn4Kashe5bHA&pid=ImgRaw&r=0'
    ],
    description: 'Healthy air fryer for oil-free frying, roasting, and baking.',
    features: [
      'Rapid air technology',
      'Adjustable temperature',
      'Timer function',
      'Non-stick basket',
      'Dishwasher safe parts'
    ],
    specifications: {
      dimensions: '30 x 30 x 35 cm',
      capacity: '4 liters',
      energyRating: 'A+',
      color: 'Black',
      weight: '5 kg'
    },
    inStock: true,
    isOnSale: true,
    discountPercentage: 12
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
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/6786602/1.jpg?5547'
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
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/3033204/1.jpg?6502'
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

    {
    id: 'l3',
    name: 'Compact Clothes Steamer',
    category: 'laundry',
    price: 35000,
    rating: 4.2,
    reviews: 58,
    images: [
      'https://th.bing.com/th/id/OIP.tyCGHMZfTD71LFocLM-NJwHaHa?cb=iwp2&rs=1&pid=ImgDetMain'
    ],
    description: 'Portable clothes steamer for quick and easy wrinkle removal at home or on the go.',
    features: [
      'Fast heat-up',
      'Continuous steam',
      'Detachable water tank',
      'Lightweight design',
      'Safe for all fabrics'
    ],
    specifications: {
      dimensions: '15 x 12 x 28 cm',
      capacity: '250 ml',
      energyRating: 'A',
      color: 'White/Blue',
      weight: '1 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 10
  },

  // HVAC Appliances
  // ...existing code...
  {
    id: 'h1',
    name: 'Split Air Conditioner',
    category: 'hvac',
    price: 250000,
    rating: 4.8,
    reviews: 156,
    images: [
      'https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
    name: 'Portable Air Purifier',
    category: 'hvac',
    price: 65000,
    rating: 4.4,
    reviews: 88,
    images: [
      'https://th.bing.com/th/id/R.be735ff87efa50d9884838de7633c535?rik=ZdTj9oU7xxMbRg&pid=ImgRaw&r=0'
    ],
    description: 'Compact air purifier with HEPA filter for clean and fresh indoor air.',
    features: [
      'HEPA filtration',
      '3 fan speeds',
      'Quiet operation',
      'Filter replacement indicator',
      'Night mode'
    ],
    specifications: {
      dimensions: '22 x 22 x 35 cm',
      capacity: '30 m² coverage',
      energyRating: 'A',
      color: 'White',
      weight: '2.5 kg'
    },
    inStock: true,
    isOnSale: true,
    discountPercentage: 12
  },
  {
    id: 'h3',
    name: 'Smart Tower Fan',
    category: 'hvac',
    price: 48000,
    rating: 4.3,
    reviews: 67,
    images: [
      'https://th.bing.com/th/id/OIP.HY-KiEl3ol5-jiEGoJQhBwHaHa?cb=iwp2&w=480&h=480&rs=1&pid=ImgDetMain'
    ],
    description: 'Oscillating tower fan with smart controls and remote for efficient cooling.',
    features: [
      'Oscillation function',
      'Remote control',
      '3 speed settings',
      'Timer function',
      'Smartphone app connectivity'
    ],
    specifications: {
      dimensions: '25 x 25 x 110 cm',
      capacity: 'Room cooling',
      energyRating: 'A+',
      color: 'Black',
      weight: '4 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 0
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
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/35/6316223/1.jpg?6136'
      
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
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/5204352/1.jpg?5690',
      'https://ng.jumia.is/unsafe/fit-in/150x150/filters:fill(white)/product/91/4676304/2.jpg?0644'
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
  },

  {
    id: 's3',
    name: 'Electric Kettle',
    category: 'small',
    price: 25000,
    rating: 4.5,
    reviews: 300,
    images: [
      'https://images.unsplash.com/photo-1571552879083-e93b6ea70d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBrZXR0bGV8ZW58MHx8MHx8fDA%3D',
      "https://images.unsplash.com/photo-1579752898926-3bcbc125ae2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZWxlY3RyaWMlMjBrZXR0bGV8ZW58MHx8MHx8fDA%3D"
    ],
    description: 'Fast boiling electric kettle with temperature control and stainless steel design.',
    features: [
      '1.7 liters capacity',
      'Temperature control settings',
      'Automatic shut-off',
      '360-degree swivel base',
      'Cordless operation'
    ],
    specifications: {
      dimensions: '22 x 15 x 25 cm',
      capacity: '1.7 liters',
      energyRating: 'A',
      color: 'Stainless Steel',
      weight: '1.2 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 0
  },

  {
    id: 's4',
    name: 'Toaster',
    category: 'small',
    price: 15000,
    rating: 4.4,
    reviews: 150,
    images: [
      'https://plus.unsplash.com/premium_photo-1667238579781-cb4bd6126ffd?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    description: 'Compact toaster with multiple browning settings and extra-wide slots for thick bread.',
    features: [ 
      '2-slice capacity',
      'Adjustable browning control',
      'Extra-wide slots',
      'Removable crumb tray',
      'Cord storage'
    ],
    specifications: {
      dimensions: '30 x 18 x 20 cm',
      capacity: '2 slices',
      energyRating: 'A',
      color: 'Black',
      weight: '1.5 kg'
    },
    inStock: true,
    isOnSale: false,
    discountPercentage: 5
  }

];

export const featuredProducts = products.filter(p => p.isOnSale);