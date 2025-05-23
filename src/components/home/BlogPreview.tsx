import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';

const BlogPreview: React.FC = () => {
  // Get the latest 3 blog posts
  const latestPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Maintenance Tips & Guides</h2>
            <p className="text-gray-600 mt-2">Expert advice to keep your appliances running at their best</p>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 mt-4 md:mt-0"
          >
            View All Articles <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <Link to={`/blog/${post.id}`} className="block">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <Link to={`/blog/${post.id}`} className="block">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-900 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;