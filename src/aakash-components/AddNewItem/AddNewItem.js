import { useState } from "react";
import axios from "axios";
//styles
import { ReadyBtn } from "../OrderItem/OrderItem.styles";
import { NewItemWrapper } from "./AddNewItem.styles";

const AddNewMealItem = () => {
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState(0);
  const [itemType, setItemType] = useState("Breakfast");
  const [itemAvailable, setItemAvailable] = useState(true);
  const itemImg =
    "https://giardino.axiomthemes.com/wp-content/uploads/2017/12/bg-11-copyright-1520x834.jpg";

  const addNewItem = () => {
    axios.post(`http://127.0.0.1:3001/food`, {
      item_name: itemName,
      item_cost: itemCost,
      item_type: itemType,
      item_available: itemAvailable,
      food_img: itemImg,
    });
  };

  return (
    <>
      <NewItemWrapper>
        <input
          value={itemName}
          placeholder="Item Name"
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          value={itemCost}
          placeholder="Item Cost"
          onChange={(e) => setItemCost(e.target.value)}
        />
        <select value={itemType} onChange={(e) => setItemType(e.target.value)}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <select
          value={itemAvailable}
          onChange={(e) => setItemAvailable(e.target.value)}
        >
          <option value={true}>Available</option>
          <option value={false}>Unavailable</option>
        </select>
        <label>
          Image of item
          <input type="file" />
        </label>
      </NewItemWrapper>
      <br />
      <ReadyBtn onClick={addNewItem}>Add Item to Meal</ReadyBtn>
    </>
  );
};

export default AddNewMealItem;
