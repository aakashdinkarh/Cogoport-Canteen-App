import "./menuitem.css";
export const Yourorder = (list) => {
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
              <h2 className="add-btn">Status</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};
