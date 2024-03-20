import "./itemCard.scss";
import FoodImage from "../../../images/menu/chicken_dumplings-thumb.png";
import { Error, ShoppingBag } from "@mui/icons-material";
const ItemCard = ({ isGridView }) => {
  return (
    <div className={`item-card ${isGridView && "grid"}`}>
      <img src={FoodImage} alt="Food" />
      <div className="item-card-details">
        <div className="flex-start-center heading">
          <h3>Chicken Dumplings</h3>
          <Error />
        </div>
        <p>
          With a side of fried rice or supreme say noodles, and steamed chi..
        </p>
        <div className="item-card-price">
          <p>$2.50</p>
          <button type="button">
            <ShoppingBag />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
