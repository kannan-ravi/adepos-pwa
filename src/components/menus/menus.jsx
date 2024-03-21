import React from "react";
import "./menus.scss";
import MenuCard from "./menuCard/menuCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";

const Menus = ({
  demoMenuCard,
  selectedCard,
  setSelectedCard,
  isHeaderVisible,
}) => {
  return (
    <div className="menu-card-container">
      {isHeaderVisible && (
        <div className="flex-between-center menu-card-header">
          <h1>Our Menu</h1>
          <Link to="/menu">View All</Link>
        </div>
      )}
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

export default Menus;
