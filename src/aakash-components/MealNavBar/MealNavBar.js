import { SwitchTab, Wrapper } from "../ShopNavBar/ShopNavBar.styles";

const MealNavBar = ({ mealTime, setMealTime }) => {
  return (
    <Wrapper>
      <SwitchTab
        tabValue={mealTime === "Breakfast"}
        onClick={() => setMealTime("Breakfast")}
      >
        Breakfast
      </SwitchTab>
      <SwitchTab
        tabValue={mealTime === "Lunch"}
        onClick={() => setMealTime("Lunch")}
      >
        Lunch
      </SwitchTab>
      <SwitchTab
        tabValue={mealTime === "Dinner"}
        onClick={() => setMealTime("Dinner")}
      >
        Dinner
      </SwitchTab>
    </Wrapper>
  );
};

export default MealNavBar;
