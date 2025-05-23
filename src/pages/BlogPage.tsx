import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Get all tags
  const allTags = blogPosts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(allTags));

  useEffect(() => {
    document.title = 'Maintenance Tips Blog - HomeTech';
  }, []);

  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    // Sort by date (newest first)
    filtered = filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    setFilteredPosts(filtered);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is handled in the useEffect
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Maintenance Tips & Guides</h1>
      <p className="text-gray-600 mb-8">Expert advice to keep your appliances running at their best</p>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Search (Mobile) */}
          <div className="mb-6 lg:hidden">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>
          
          {/* Category Filter (Mobile) */}
          <div className="mb-6 lg:hidden">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategory === null 
                    ? 'bg-blue-900 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    selectedCategory === category 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 md:w-48 h-48">
                      <Link to={`/blog/${post.id}`}>
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span className="mx-2">•</span>
                        <span>{post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
                      </div>
                      
                      <Link to={`/blog/${post.id}`} className="block">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 hover:text-blue-900 transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">By {post.author}</div>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="text-orange-500 font-medium hover:text-orange-600 inline-flex items-center"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/3">
          {/* Search */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 hidden lg:block">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Search</h2>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <button 
                type="submit"
                className="absolute right-3 top-2 bg-blue-900 text-white px-2 py-1 rounded text-sm"
              >
                Search
              </button>
            </form>
          </div>
          
          {/* Categories */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 hidden lg:block">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`text-left w-full ${
                    selectedCategory === null 
                      ? 'text-blue-900 font-medium' 
                      : 'text-gray-700 hover:text-blue-900'
                  }`}
                >
                  All Categories
                </button>
              </li>
              {categories.map(category => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`text-left w-full ${
                      selectedCategory === category 
                        ? 'text-blue-900 font-medium' 
                        : 'text-gray-700 hover:text-blue-900'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Popular Tags */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Tags</h2>
            <div className="flex flex-wrap gap-2">
              {uniqueTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
          
          {/* Recent Posts */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts</h2>
            <ul className="space-y-4">
              {blogPosts
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 3)
                .map(post => (
                  <li key={post.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <Link 
                      to={`/blog/${post.id}`}
                      className="hover:text-blue-900 transition-colors"
                    >
                      <h3 className="font-medium">{post.title}</h3>
                    </Link>
                    <div className="text-sm text-gray-500 mt-1">
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;