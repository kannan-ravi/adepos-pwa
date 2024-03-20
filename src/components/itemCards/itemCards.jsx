import { Error, ShoppingBag, ViewStream, Window } from "@mui/icons-material";

import "./itemCards.scss";
import ItemCard from "./itemCard/itemCard";
import { useState } from "react";

const ItemCards = () => {
  const [isGridView, setIsGridView] = useState(true);
  const demoItemCardsData = [1, 2, 3, 4, 5, 6];
  return (
    <div className="item-card-main">
      <div className="item-card-header">
        <h2>Appetizers</h2>
        <div className="view-icon">
          <ViewStream onClick={() => setIsGridView(false)} />
          <Window onClick={() => setIsGridView(true)} />
        </div>
      </div>

      <div className={`item-card-container ${isGridView && "grid"}`}>
        {demoItemCardsData.map((item, index) => {
          return <ItemCard key={index} isGridView={isGridView} />;
        })}
      </div>
    </div>
  );
};

export default ItemCards;
