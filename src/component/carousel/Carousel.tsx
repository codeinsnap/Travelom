import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CustomCard from "../../component/card/CustomCard";
import "./carousel.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const handleSpaceBetween = (val: any) => {
  if (window.screen.width <= 600) {
    return 10;
  } else {
    return val ?? 25;
  }
};

const handleslidesPerView = (val: any) => {
  if (window.screen.width <= 600) {
    return 1;
  } else if (window.screen.width > 600 && window.screen.width < 1300) {
    return 1;
  } else {
    return val ?? 5;
  }
};

const Carousel = (props: any) => {
  const {
    spaceBetween,
    slidesPerView,
    onSlideChange,
    list,
    cardTextContent
  } = props;
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        spaceBetween={handleSpaceBetween(spaceBetween)}
        slidesPerView={handleslidesPerView(slidesPerView)}
        onSlideChange={onSlideChange}
        navigation
        className="swiper-main"
      >
        {list?.map((data: any, index: any) => (
          <SwiperSlide key={index}>
            <CustomCard 
              cardData={data} 
              cardImage={data.image}
              cardTextContent={cardTextContent}
              />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
