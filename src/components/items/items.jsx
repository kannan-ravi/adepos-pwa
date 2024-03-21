import { ViewStream, Window } from "@mui/icons-material";

import "./items.scss";
import ItemCard from "./itemCard/itemCard";

const Items = ({
  isGridView,
  setIsGridView,
  demoItemCard,
  gridListOption,
  heading,
}) => {
  return (
    <div className="item-card-main">
      <div className="item-card-header">
        <h2>{heading || "Appetizers"}</h2>
        {gridListOption && (
          <div className="view-icon">
            <ViewStream onClick={() => setIsGridView(false)} />
            <Window onClick={() => setIsGridView(true)} />
          </div>
        )}
      </div>

      <div className={`item-card-container ${isGridView && "grid"}`}>
        {demoItemCard.map((item, index) => {
          return <ItemCard key={index} isGridView={isGridView} />;
        })}
      </div>
    </div>
  );
};

export default Items;
