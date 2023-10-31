import BannerSection from "../BannerSection/BannerSection";
import Blogs from "../Blogs/Blogs";
import GallerySection from "../GallerySection/GallerySection";
import GetStarted from "../GetStarted/GetStarted";
import IntroSection from "../IntroSection/IntroSection";
import TopProducts from "../TopProducts/TopProducts";
import TopSellers from "../TopSellers/TopSellers";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>

      <IntroSection></IntroSection>

      <TopProducts></TopProducts>

      <GallerySection></GallerySection>

      <TopSellers></TopSellers>

      <Blogs></Blogs>

      <GetStarted></GetStarted>
    </div>
  );
};

export default Home;
