import { Container } from "@mui/material";

import NonVeg from "../../images/menu/non-veg.png";
import Veg from "../../images/menu/veg.png";

import "swiper/css";
import "swiper/css/free-mode";
import "./menu.scss";

import { useState } from "react";
import Menus from "../../components/menus/menus";
import Items from "../../components/items/items";

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

  const [isGridView, setIsGridView] = useState(false);
  const demoItemCard = [1, 2, 3, 4, 5, 6];
  return (
    <div className="gap-from-navbar">
      <Container>
        <Menus
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

        <Items
          isGridView={isGridView}
          setIsGridView={setIsGridView}
          demoItemCard={demoItemCard}
          gridListOption={true}
        />
      </Container>
    </div>
  );
};

export default Menu;
