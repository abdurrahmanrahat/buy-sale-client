import BannerSection from "../BannerSection/BannerSection";
import Blogs from "../Blogs/Blogs";
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

      {/* Top seller section */}

      <Blogs></Blogs>
    </div>
  );
};

export default Home;
