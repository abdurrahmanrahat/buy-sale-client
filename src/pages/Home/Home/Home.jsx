import BannerSection from "../BannerSection/BannerSection";
import GallerySection from "../GallerySection/GallerySection";
import IntroSection from "../IntroSection/IntroSection";
import TopProducts from "../TopProducts/TopProducts";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>

      <IntroSection></IntroSection>

      <TopProducts></TopProducts>

      <GallerySection></GallerySection>
    </div>
  );
};

export default Home;
