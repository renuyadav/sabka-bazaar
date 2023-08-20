import React from "react";
// Import Swiper React components

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.scss";

const slides = [
  { id: 1, image: "/assets/images/offer1.jpg", title: "offer 1" },
  { id: 2, image: "/assets/images/offer1.jpg", title: "offer 2" },
  { id: 3, image: "/assets/images/offer1.jpg", title: "offer 3" },
  { id: 4, image: "/assets/images/offer1.jpg", title: "offer 4" },
  { id: 5, image: "/assets/images/offer1.jpg", title: "offer 5" },
];
const Carousel: React.FC = () => {
  return (
    <section className="container carousel-wrapper pt-4 pb-4">
      <Swiper
        navigation={true}
        keyboard={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Keyboard, Pagination]}
        slidesPerView={1}
        className="carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="carousel__slide">
            <img src={slide.image} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
