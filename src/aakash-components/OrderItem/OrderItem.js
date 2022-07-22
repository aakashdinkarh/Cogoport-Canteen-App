import { ReadyBtn, Wrapper, IconImg } from "./OrderItem.styles";

import call from "./phone-solid.svg";

const OrderItem = ({ allOrders, setAllOrders, item }) => {
  const orderComplete = () => {
    alert(`order complete for ${item.user_name}`);
  };

  const removeOrder = () => {
    console.log("remove");
  };

  return (
    <Wrapper>
      <div className="user-details">
        <span>{item.user_name}</span>
        <span>
          <IconImg className="" src={call} alt="call icon" />
          {item.user_ph}
        </span>
      </div>

      <div className="order-items">
        {item.items.map((elem, ind) => (
          <div className="order-item-details" key={ind}>
            <div>{elem.item_name}</div>
            <div>
              <span>Q: {elem.quantity}</span> |
              <span>Cost: {elem.item_cost}</span>
            </div>
          </div>
        ))}
        <div>Total: {item.totol_cost}</div>
        <div className="order-buttons">
          <ReadyBtn onClick={orderComplete}>Ready!</ReadyBtn>
          <ReadyBtn onClick={removeOrder}>REMOVE</ReadyBtn>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderItem;
