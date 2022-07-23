// import { Parent, LoginHeading, Horizontalline, Input } from "./user.styles";
import "./userlogin.css";
import axios from "axios";
import logo from "./loginimg.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import UserInterface from "../../User-interface/UserService";
// import ShopInterface from "../../aakash-components/ShopInterface";

export default function UserLogin() {
  const [userType, setUserType] = useState("user");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsSHown] = useState(false);

  const navigate = useNavigate();
  const verifyfields = () => {
    console.log(userType);
    if (userType === "") {
      alert("Select User Type");
    } else if (userName === "") {
      alert("Enter User Name");
    } else if (password === "") {
      alert("Enter Password");
    } else {
      const data = { username: userName, password: password };
      axios
        .get(
          `http://localhost:3000/authenticate?username=${userName}&password=${password}`,
          data
        )
        .then(function (res) {
          console.log(res.data);
          if (res.data.err === "UserName didn't exist") {
            console.log("User name error");
          } else if (res.data.err === "Password Error") {
            console.log("Errrooor in Password");
          } else {
            navigate(`/${userType}?${userName}`);
          }
        });
      console.log(data);
    }
  };

  // useEffect(() => {
  //   setUserName(JSON.parse(localStorage.getItem("cogocache")).username);
  // }, []);

  return (
    <>
      <div className="mparent">
        <div className="mLogin">
          <div className="mheading">
            <div className="mtitle">
              {JSON.parse(localStorage.getItem("cogocache"))?.firstname},Welcome
              Back
            </div>
            <div className="mdescription">
              Welcome Back,Please Enter your credentials
            </div>
            {/* <GoogleLogin></GoogleLogin> */}
            {/* <h3 className='mhorizontal'>or</h3> */}
          </div>
          <div className="minputs">
            <select
              name="typeofuser"
              className="muserName"
              autoFocus
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            >
              <option value="user">User</option>
              <option value="shopkeeper">Shopkeeper</option>
            </select>
            <input
              type="text"
              name="username"
              value={userName}
              className="muserName"
              placeholder="Enter UserName"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
            <input
              type={isShown ? "text" : "password"}
              name="password"
              className="mpassword"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            {/* <input type="submit" className="mlogin" value="Log In"/> */}
            <button className="mlogin" onClick={verifyfields}>
              Log in
            </button>
            <div>
              Didn't have an account.
              {/* Add Link to Register page */}
              <Link to={"userRegister/"}>Sign Up</Link> for Free
            </div>
          </div>
        </div>
        <div className="mposter">
          <img src={logo}></img>
        </div>
      </div>
    </>
  );
}
