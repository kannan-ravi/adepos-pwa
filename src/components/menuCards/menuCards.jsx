import React from "react";
import "./menuCards.scss";
import MenuCard from "./menuCard/menuCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

const MenuCards = ({ demoMenuCard, selectedCard, setSelectedCard }) => {
  return (
    <div className="menu-card-container">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        freeMode={true}
        direction="horizontal"
        modules={[FreeMode]}
        className="mySwiper"
      >
        {demoMenuCard.map((data, index) => {
          return (
            <SwiperSlide key={index} className="custom-swiper-slide">
              <MenuCard
                data={data}
                selectedCard={selectedCard}
                setSelectedCard={setSelectedCard}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MenuCards;
