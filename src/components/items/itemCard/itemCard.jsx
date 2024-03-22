import "./itemCard.scss";
import FoodImage from "../../../images/menu/chicken_dumplings-thumb.png";
import { Error, ShoppingBag } from "@mui/icons-material";

import ItemsCardModel from "../../itemsCardModel/itemsCardModel";
import { useState } from "react";
import AddToCartPopup from "../../addToCartPopup/addToCartPopup";

const ItemCard = ({ isGridView }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const [cartOpen, setCartOpen] = useState(false);
  const handleCartClose = () => setCartOpen(false);
  const handleCartOpen = () => setCartOpen(true);

  return (
    <div className={`item-card ${isGridView && "grid"}`}>
      <img src={FoodImage} alt="Food" />
      <div className="item-card-details">
        <div className="flex-start-center header">
          <h3>Chicken Dumplings</h3>
          <Error onClick={handleOpen} />
          <ItemsCardModel handleClose={handleClose} open={open} />
        </div>
        <p>
          With a side of fried rice or supreme say noodles, and steamed chi..
        </p>
        <div className="item-card-price">
          <p>$2.50</p>
          <button type="button" onClick={handleCartOpen}>
            <ShoppingBag />
            <span>Add</span>
          </button>
        </div>
      </div>
      <AddToCartPopup handleCartClose={handleCartClose} open={cartOpen} />
    </div>
  );
};

export default ItemCard;
