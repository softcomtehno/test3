import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import Button from '../ui/Button';
import { blogPosts } from '../../data/blogPosts';

const BlogSection: React.FC = () => {
  // Get latest 3 blog posts
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Полезные материалы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Новости, советы экспертов и информация о требованиях к средствам защиты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/blog/${post.id}`}>
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar size={16} className="mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link to={`/blog/${post.id}`} className="text-gray-900 hover:text-red-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  Читать далее
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline">
            <Link to="/blog">Все статьи</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;