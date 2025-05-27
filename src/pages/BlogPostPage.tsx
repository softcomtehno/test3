import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState(blogPosts.find(p => p.id === postId));
  
  // Update document title
  useEffect(() => {
    if (post) {
      document.title = `${post.title} - СИЗмаркет`;
    } else {
      document.title = 'Статья не найдена - СИЗмаркет';
    }
  }, [post]);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Статья не найдена</h1>
          <p className="text-gray-600 mb-8">
            Запрашиваемая статья не существует или была удалена.
          </p>
          <Button variant="primary">
            <Link to="/blog">Вернуться в блог</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/blog" className="inline-flex items-center text-red-600 hover:text-red-700">
            <ArrowLeft size={18} className="mr-1" />
            Назад к блогу
          </Link>
        </div>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap text-sm text-gray-500 mb-4">
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
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {post.title}
            </h1>
            
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {paragraph.substring(2)}
                    </h1>
                  );
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">
                      {paragraph.substring(3)}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-5 mb-3">
                      {paragraph.substring(4)}
                    </h3>
                  );
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4">
                      <li>{paragraph.substring(2)}</li>
                    </ul>
                  );
                } else if (paragraph.trim() === '') {
                  return <br key={index} />;
                } else {
                  return (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Похожие статьи</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <article key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Link to={`/blog/${relatedPost.id}`} className="block">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title} 
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">
                      <Link to={`/blog/${relatedPost.id}`} className="text-gray-900 hover:text-red-600">
                        {relatedPost.title}
                      </Link>
                    </h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{relatedPost.date}</span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPostPage;