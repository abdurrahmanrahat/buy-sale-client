import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import SingleSlide from "./SingleSlide";

const BannerSection = () => {
  const sliderContent = [
    {
      id: 1,
      bg: "https://i.ibb.co/mFy4kGW/banner4.png",
      title: "Welcome to \n Buy and Sale Community On!",
    },
    {
      id: 2,
      bg: "https://i.ibb.co/1d1swsS/banner1.png",
      title: "Discover Great \n Buy and Sale for Premium Devices",
    },
    {
      id: 3,
      bg: "https://i.ibb.co/RYzHyCp/banner3.png",
      title: "Welcome to \n Buy and Sale Community On!",
    },
    {
      id: 4,
      bg: "https://i.ibb.co/ZS2R01X/banner2.png",
      title: "Discover Great \n Buy and Sale for Premium Devices",
    },
  ];
  return (
    <div className="main-slider">
      <Swiper
        slidesPerView={1}
        loop
        navigation
        effect="fade"
        autoplay
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {sliderContent.map((slider) => (
          <SwiperSlide key={slider.id}>
            <SingleSlide slider={slider}></SingleSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSection;
