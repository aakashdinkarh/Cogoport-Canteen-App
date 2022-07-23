import "./menuitem.css";
export const Menu = ({list, cartItem ,setCartItem }) => {
  const addItemToCart= (id)=>{
    list.forEach((element) => {
      if(element.id === id){
        setCartItem([...cartItem ,element])
      }
    });
  }
  return (
    <>
      <div>
        {list.map((e) => {
          return (
            <div className="menu-tile">
              <div className="horizontal-flex">
                <img className="food-image" src="https://giardino.axiomthemes.com/wp-content/uploads/2017/12/bg-11-copyright-1520x834.jpg" alt="#"/>
                <div>
                    <h1 className="margin-text">{e.name}</h1>
                    <h3 className="margin-text">{e.cost}</h3>
                </div>
              </div>
              <h2 className="add-btn" onClick={()=>addItemToCart(e.id)}>Add Item</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
