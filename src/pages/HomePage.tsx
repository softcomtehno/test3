import React from 'react';
import Layout from '../components/layout/Layout';
import HeroBanner from '../components/home/HeroBanner';
import CategorySection from '../components/home/CategorySection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CertificatesSection from '../components/home/CertificatesSection';
import WholesaleSection from '../components/home/WholesaleSection';
import BlogSection from '../components/home/BlogSection';

const HomePage: React.FC = () => {
  // Update document title
  React.useEffect(() => {
    document.title = 'СИЗмаркет - Средства индивидуальной защиты';
  }, []);

  return (
    <Layout>
      <HeroBanner />
      <CategorySection />
      <FeaturedProducts />
      <CertificatesSection />

      <BlogSection />
    </Layout>
  );
};

export default HomePage;