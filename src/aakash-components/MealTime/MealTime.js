import AddNewMealItem from "../AddNewItem/AddNewItem";
import MenuItem from "../Menu-item/MenuItem";

const MealTime = ({ mealTime, allItems, setAllItems }) => {
  return (
    <>
      {allItems.map((item, ind) => (
        <MenuItem
          setAllItems={setAllItems}
          allItems={allItems}
          item={item}
          key={ind}
        />
      ))}
      <AddNewMealItem
        mealTime={mealTime}
        allItems={allItems}
        setAllItems={setAllItems}
      />
    </>
  );
};
export default MealTime;
