import React, { useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import CategoryGrid from '../components/home/CategoryGrid';
import ProductCarousel from '../components/home/ProductCarousel';
import FeaturesBanner from '../components/home/FeaturesBanner';
import TestimonialSection from '../components/home/TestimonialSection';
import BlogPreview from '../components/home/BlogPreview';
import { featuredProducts } from '../data/products';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'HomeTech - Quality Home Appliances';
  }, []);

  return (
    <div>
      <HeroBanner />
      <CategoryGrid />
      <ProductCarousel title="Featured Products" products={featuredProducts} />
      <FeaturesBanner />
      <TestimonialSection />
      <BlogPreview />
    </div>
  );
};

export default HomePage;