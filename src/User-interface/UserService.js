import { Cart } from "./Cart/cart";
import {Menu}   from "./MenuItem/menuItem"
import { useState} from 'react';
import "./UserInterface.css"

export function UserService(){
    const [cartItem, setCartItem] = useState([]);
    //var list = [{name:'chicken Handi' , cost:234},{name:"chicken Kolapuri" , cost:"534 Rs"},{name:"Buttor Chicken" , cost:"434 Rs"}]
    var list = [{id: 1,name:"medu vada", cost:32, num:1},{id: 2,name:"chicken lolipop", cost:322, num:1},{id: 3, name:"chola bhatoora", cost:322, num:1}]
    return (<div className="background-image">
            <div>                                       
                <Cart list={cartItem} menuList={list} setCartItem={setCartItem}/>
            </div>
            <div>
                <div className="menu-container-nav">
                    <h1 className="meale-type">BreakFast</h1>
                    <h1 className="meale-type">Lunch</h1>
                    <h1 className="meale-type">Dinner</h1>
                </div>
                <Menu list={list} cartItem={cartItem} setCartItem={setCartItem}/>
            </div>
            </div>)
}