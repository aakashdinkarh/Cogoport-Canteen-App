import { ItemContainer } from "./MenuItem.styles";
import axios from "axios";

const MenuItem = ({ allItems, setAllItems, item }) => {
  console.log(item);

  const handleChange = () => {
    const newAvailable = !item.available;
    const newAllItems = allItems.map((elem) => {
      if (elem.id !== item.id) return elem;
      else
        return {
          id: item.id,
          name: item.name,
          cost: item.cost,
          available: newAvailable,
          food_type: item.food_type,
          food_img: item.food_img,
        };
    });
    setAllItems(newAllItems);
    axios
      .put("http://127.0.0.1:3001/food", {
        id: item.id,
        newAvailable: newAvailable,
      })
      .then((data) => console.log(data));
  };

  const deleteFood = () => {
    axios.delete(`http://127.0.0.1:3001/food/${item.id}`).then((id) => id);
  };

  return (
    <ItemContainer>
      <div className="item-image-container">
        <img className="itemImage" src={item.food_img} alt="itemImage" />
      </div>
      <div>
        <div className="item-details">
          <span
            onChange={(e) => console.log(e.target.value)}
            className="item-name"
          >
            {item.name}
          </span>
          <span className="item-cost">{item.cost}</span>
          <input
            className="availableCheck"
            type="checkbox"
            checked={item.available}
            onChange={handleChange}
          />
        </div>
      </div>
      <span onClick={deleteFood} className="closeBtn">
        &times;
      </span>
    </ItemContainer>
  );
};

export default MenuItem;
