import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'Блог - СИЗмаркет';
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2">Блог</h1>
        <p className="text-gray-600 mb-8">
          Полезные материалы о средствах защиты, нормативах и безопасности
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/blog/${post.id}`} className="block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-56 object-cover"
                />
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <User size={16} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Tag size={16} className="mr-1" />
                    <span>{post.category}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-3">
                  <Link to={`/blog/${post.id}`} className="text-gray-900 hover:text-red-600 transition-colors">
                    {post.title}
                  </Link>
                </h2>
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
      </div>
    </Layout>
  );
};

export default BlogPage;