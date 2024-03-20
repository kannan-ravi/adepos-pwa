import { Container } from "@mui/material";

import NonVeg from "../../images/menu/non-veg.png";
import Veg from "../../images/menu/veg.png";

import "swiper/css";
import "swiper/css/free-mode";
import "./menu.scss";

import { useState } from "react";
import MenuCards from "../../components/menuCards/menuCards";
import ItemCards from "../../components/itemCards/itemCards";

const Menu = () => {
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

  return (
    <div className="gap-from-navbar">
      <Container>
        <MenuCards
          demoMenuCard={demoMenuCard}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />

        <div className="filter-button-container flex-start-center">
          <button type="button">
            <img src={Veg} alt="Non Veg" />
            Non-Veg
          </button>
          <button type="button">
            <img src={NonVeg} alt="Veg" />
            Veg
          </button>
        </div>

        <ItemCards />
      </Container>
    </div>
  );
};

export default Menu;
