
import Banner from '../../components/Banner';
import HeroSection from '../../components/HeroSection';
import Products from '../../components/Products/Products';
import Categories from '../../components/Categories/Categories';
import Reviews from '../../components/Reviews/Reviews';

const HomePage = () => {
  return (
    <div>
      <Banner />
      <HeroSection />
      <Products />
      <Categories />
      <Reviews />
    </div>
  );
};

export default HomePage;
