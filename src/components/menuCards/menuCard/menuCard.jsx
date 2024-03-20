import FoodImage from "../../../images/menu/veggie_&_plant_based_burgers-thumb.png";
import "./menuCard.scss";

const MenuCard = ({ data, selectedCard, setSelectedCard }) => {
  const handleOnSelect = (name) => {
    setSelectedCard(name);
  };
  return (
    <div
      className={`menu-card ${selectedCard === data.name ? "active" : ""}`}
      onClick={() => handleOnSelect(data.name)}
    >
      <img src={FoodImage} alt="Food" />
      <h3>{data.name}</h3>
    </div>
  );
};

export default MenuCard;
