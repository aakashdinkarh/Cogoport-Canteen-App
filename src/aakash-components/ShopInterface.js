import { useState, useEffect } from "react";

//components
import MealTime from "./MealTime/MealTime";
import OrderItem from "./OrderItem/OrderItem";
import ShopNavBar from "./ShopNavBar/ShopNavBar";
import MealNavBar from "./MealNavBar/MealNavBar";

//data
import myData from "./row_data.json";

//styles
import { MenuContainer, OrderContainer, Wrapper } from "./ShopInterface.styles";
// import AddNewMealItem from "./AddNewItem/AddNewItem";
import axios from "axios";

const ShopInterface = () => {
  const [allItems, setAllItems] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const [navBarContent, setNavBarContent] = useState("menu");
  const [mealTime, setMealTime] = useState("Breakfast");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3001/foods/${mealTime}`)
      .then((resp) => setAllItems(resp.data));
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
            <MealTime
              mealTime={mealTime}
              allItems={allItems}
              setAllItems={setAllItems}
            />
          </div>
        </MenuContainer>
      ) : (
        <OrderContainer>
          {allOrders.map((elem, ind) => (
            <OrderItem
              allOrders={allOrders}
              setAllOrders={setAllOrders}
              item={elem}
              key={ind}
            />
          ))}
        </OrderContainer>
      )}
    </Wrapper>
  );
};

export default ShopInterface;
