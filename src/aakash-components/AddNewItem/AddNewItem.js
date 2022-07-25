import { useState } from "react";
import axios from "axios";
//styles
import { ReadyBtn } from "../OrderItem/OrderItem.styles";
import { AddBtnContainer, NewItemWrapper } from "./AddNewItem.styles";
import swal from "sweetalert";

const AddNewMealItem = ({ mealTime, allItems, setAllItems }) => {
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState(0);
  const [itemType, setItemType] = useState("Breakfast");
  const [itemAvailable, setItemAvailable] = useState(true);
  const itemImg =
    "https://giardino.axiomthemes.com/wp-content/uploads/2017/12/bg-11-copyright-1520x834.jpg";

  async function addNewItem() {
    if (itemName === "") {
      swal({ title: "Item name cannot be empty", icon: "warning" });
    } else if (itemCost === "") {
      swal({ title: "Item cost cannot be null", icon: "warning" });
    } else if (itemCost === "0") {
      swal({ title: "Item cost not be 0", icon: "warning" });
    } else if (parseInt(itemCost) < 0) {
      swal({ title: "Item cost not be negative", icon: "warning" });
    } else {
      if (mealTime === itemType) {
        setAllItems([
          ...allItems,
          {
            name: itemName,
            cost: itemCost,
            food_type: itemType,
            available: itemAvailable,
            food_img: itemImg,
          },
        ]);
        const id = await axios.post(`http://127.0.0.1:3001/food`, {
          name: itemName,
          cost: itemCost,
          food_type: itemType,
          available: itemAvailable,
          food_img: itemImg,
        });
        setAllItems([
          ...allItems,
          {
            id: id.data,
            name: itemName,
            cost: itemCost,
            food_type: itemType,
            available: itemAvailable,
            food_img: itemImg,
          },
        ]);
      }
    }
  }

  return (
    <NewItemWrapper>
      <div className="inputContainer">
        <input
          value={itemName}
          placeholder="Item Name"
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          value={itemCost}
          placeholder="Item Cost"
          type="number"
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
        <AddBtnContainer>
          <ReadyBtn orderInProcess={true} onClick={addNewItem}>
            Add Item to Meal
          </ReadyBtn>
        </AddBtnContainer>
      </div>
    </NewItemWrapper>
  );
};

export default AddNewMealItem;
