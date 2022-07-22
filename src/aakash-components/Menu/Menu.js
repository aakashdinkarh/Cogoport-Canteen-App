import { useState, useEffect } from "react";

//components
import MenuItem from "../Menu-item/MenuItem";
import OrderItem from "../OrderItem/OrderItem";
import ShopNavBar from "../ShopNavBar/ShopNavBar";
import MealNavBar from "../MealNavBar/MealNavBar";

//data
import myData from "../row_data.json";

//styles
import { MenuContainer, OrderContainer, Wrapper } from "./Menu.styles";
import AddNewMealItem from "../AddNewItem/AddNewItem";
import axios from "axios";

const Menu = () => {
  const [allItems, setAllItems] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [navBarContent, setNavBarContent] = useState("menu");
  const [mealTime, setMealTime] = useState("Breakfast");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/foods/${mealTime}`)
      .get("http://127.0.0.1:3001/foods/Breakfast")
      .then((resp) => resp.data)
      .then((data) => setAllItems(data));
    console.log("axios get req");
  }, [mealTime]);

  useEffect(() => {
    setAllOrders(myData.orders);
  }, []);

  return (
    <Wrapper>
      <ShopNavBar
        navBarContent={navBarContent}
        setNavBarContent={setNavBarContent}
      />
      {navBarContent === "menu" ? (
        <MenuContainer>
          <MealNavBar mealTime={mealTime} setMealTime={setMealTime} />
          <div className="mealItems">
            {allItems.map((item, ind) => (
              <MenuItem
                setAllItems={setAllItems}
                allItems={allItems}
                item={item}
                key={ind}
              />
            ))}
          </div>
          <AddNewMealItem />
        </MenuContainer>
      ) : (
        <OrderContainer>
          {allOrders.map((elem, ind) => (
            <OrderItem item={elem} key={ind} />
          ))}
        </OrderContainer>
      )}
    </Wrapper>
  );
};

export default Menu;
