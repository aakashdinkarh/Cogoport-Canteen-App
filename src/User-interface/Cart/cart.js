import "./cart.css";


export const Cart = ({list, menuList, setCartItem}) => {

  const changeNum = (id, n) => {
    let newList = list.map((elem) => {
      if(elem.id === id){
        const newNum = elem.num+n < 1 ? 1 : elem.num+n;
        return {cost: elem.cost,
          id: elem.id,
          name: elem.name,
          num: newNum}
      } else {
        return elem
      }
    })
    setCartItem(newList);
  }

  const filterItem =(id)=>{
    const newList = list.filter(e=>{
      return e.id !== id;
    })
    setCartItem(newList);
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {list.map((e) => {
        return (
          <div className="cart-tile">
            <div className="horizontal-flex">
                <img className="food-image" src="https://giardino.axiomthemes.com/wp-content/uploads/2017/12/bg-11-copyright-1520x834.jpg" alt="#"/>
                <div>
                    <h1 className="margin-text">{e.name}</h1>
                    <h3 className="margin-text">{e.cost}</h3>
                </div>
              </div>
              <div className="horizontal-flex">
                  <div className="cart-btn">
                  <h2 onClick={() => changeNum(e.id, 1)} className="plus-minus-button">+</h2>
                  <h2 id={e.id} className="meale-n">{e.num}</h2>
                  <h2 onClick={() => changeNum(e.id ,-1)}  className="plus-minus-button">-</h2>
                </div>
                <h2 className="cross-btn" onClick={() => filterItem(e.id)}>x</h2>
              </div>
          </div>
        );
      })}
      <div style={{textAlign: 'right'}}>place your order</div>
    </div>
  );
};
