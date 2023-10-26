import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="bg-gray-900 text-white p-2 md:p-8 my-12">
      <h4 className="text-3xl font-semibold ml-2 mb-2 md:ml-0">News</h4>

      <div className="p-2">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            620: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            840: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {blogs.map((n) => (
            <SwiperSlide key={n.id}>
              <div className="md:w-[340px] bg-gray-950 text-white shadow-xl shadow-black rounded-se-[30px] rounded-bl-[30px] p-4">
                <img src={n.image} alt="" className="" />
                <div className="my-2">
                  <h2 className="text-xl font-semibold mb-2">{n.title}</h2>
                  <p>{n.desc}</p>
                </div>
                <div className="flex justify-end">
                  <button className="hover:border-b-2 duration-500 font-semibold text-[#9875ff] border-[#9875ff]">
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
