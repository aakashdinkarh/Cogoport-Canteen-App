import { ReadyBtn, RemoveBtn, Wrapper, IconImg } from "./OrderItem.styles";

import call from "./phone-solid.svg";

const OrderItem = ({ allOrders, setAllOrders, item }) => {
  const orderComplete = () => {
    const newOrderItem = {
      id: item.id,
      items: [...item.items],
      orderDelivered: item.orderDelivered,
      orderInProcess: !item.orderInProcess,
      totol_cost: item.totol_cost,
      user_name: item.user_name,
      user_ph: item.user_ph,
    };
    const newAllOrders = allOrders.map((elem) => {
      if (elem.id !== item.id) return elem;
      else return newOrderItem;
    });
    setAllOrders(newAllOrders);
  };

  const removeOrder = () => {
    const newAllOrders = allOrders.filter((elem) => elem.id !== item.id);
    setAllOrders(newAllOrders);
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
          <ReadyBtn
            orderInProcess={item.orderInProcess}
            onClick={orderComplete}
          >
            Ready!
          </ReadyBtn>
          <RemoveBtn orderDelivered={item.orderDelivered} onClick={removeOrder}>
            REMOVE
          </RemoveBtn>
        </div>
      </div>
    </Wrapper>
  );
};

export default OrderItem;
