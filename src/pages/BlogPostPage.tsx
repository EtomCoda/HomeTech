import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, MessageSquare, Tag, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogPost } from '../types';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      setPost(foundPost);
      document.title = `${foundPost.title} - HomeTech Blog`;
      
      // Find related posts (same category or shared tags)
      const related = blogPosts.filter(p => 
        p.id !== postId && (
          p.category === foundPost.category || 
          p.tags.some(tag => foundPost.tags.includes(tag))
        )
      );
      setRelatedPosts(related.slice(0, 3));
    }
  }, [postId]);

  if (!post) {
    return <div className="py-20 text-center">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumbs */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li>
            <Link to="/" className="hover:text-blue-900">Home</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="/blog" className="hover:text-blue-900">Blog</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li className="font-medium text-gray-900 truncate max-w-xs">{post.title}</li>
        </ol>
      </nav>
      
      {/* Post Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center text-gray-600 text-sm gap-y-2">
          <div className="flex items-center mr-6">
            <User className="h-4 w-4 mr-2" />
            {post.author}
          </div>
          <div className="flex items-center mr-6">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            0 Comments
          </div>
        </div>
      </div>
      
      {/* Featured Image */}
      <div className="mb-8">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-auto rounded-lg"
        />
      </div>
      
      {/* Post Content */}
      <div className="prose max-w-none mb-8">
        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
      </div>
      
      {/* Tags and Share */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-t border-b border-gray-200 mb-8">
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
          {post.tags.map(tag => (
            <Link
              key={tag}
              to={`/blog?tag=${tag}`}
              className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm hover:bg-gray-200"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Link>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700" aria-label="Share on Facebook">
            <Facebook className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-blue-400 text-white hover:bg-blue-500" aria-label="Share on Twitter">
            <Twitter className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-full bg-blue-700 text-white hover:bg-blue-800" aria-label="Share on LinkedIn">
            <Linkedin className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map(related => (
              <Link key={related.id} to={`/blog/${related.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <img 
                    src={related.image} 
                    alt={related.title}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  
                  <div className="p-4 flex-grow">
                    <div className="text-sm text-gray-500 mb-2">
                      {new Date(related.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-900 transition-colors">
                      {related.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Back to blog */}
      <div className="text-center">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700"
        >
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to All Articles
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;