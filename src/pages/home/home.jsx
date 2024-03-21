import { useState } from "react";
import Menus from "../../components/menus/menus";
import { Container } from "@mui/material";
import Items from "../../components/items/items";
import OfferBanner from "../../components/offerBanner/offerBanner";
import OfferImage from "../../images/offers/uplifting_anytime-cover.png";
import HeroImage from "../../images/home/slider_three-cover.png";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./home.scss";

const Home = () => {
  const demoMenuCard = [
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Appetizers",
    },

    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Flame Grill Burgers",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Veggie & Plant",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Sandwich from the Grill",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Hot Chicken Entrees",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Beef Entrees",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Seafood Entrees",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "House Special Salads",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Zoop Soups",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Slide Orders",
    },
    {
      Image: "../../../images/menu/veggie_&_plant_based_burgers-thumb.png",
      name: "Beverages",
    },
  ];

  const [selectedCard, setSelectedCard] = useState("Appetizers");
  const [isGridView, setIsGridView] = useState(true);

  const demoItemCard = [1, 2, 3, 4, 5, 6];
  return (
    <div className="gap-from-navbar">
      <Container>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          direction="horizontal"
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-4 hero-swiper"
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="flex-center-center hero-swiper-slide">
            <img src={HeroImage} alt="Hero" />
          </SwiperSlide>
          <SwiperSlide className="flex-center-center hero-swiper-slide">
            <img src={HeroImage} alt="Hero" />
          </SwiperSlide>
          <SwiperSlide className="flex-center-center hero-swiper-slide">
            <img src={HeroImage} alt="Hero" />
          </SwiperSlide>
        </Swiper>
        <Menus
          demoMenuCard={demoMenuCard}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          isHeaderVisible={true}
        />

        <Items
          isGridView={isGridView}
          setIsGridView={setIsGridView}
          demoItemCard={demoItemCard}
          heading="Featured Items"
        />

        <OfferBanner OfferImage={OfferImage} />

        <Items
          isGridView={!isGridView}
          setIsGridView={setIsGridView}
          demoItemCard={demoItemCard}
          heading="Most Popular Items"
        />
      </Container>
    </div>
  );
};

export default Home;
