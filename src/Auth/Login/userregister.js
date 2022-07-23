// import { Parent, LoginHeading, Horizontalline, Input } from "./user.styles";
import "./userregister.css";
import axios from "axios";
import logo from "./loginimg.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { validEmail, validPassword } from "../Validation/validation";
import { useNavigate } from "react-router-dom";

export default function UserRegister() {
  const [userType, setUserType] = useState("user");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [photourl, setPhotourl] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [isShown, setIsSHown] = useState(false);
  const navigate = useNavigate();
  let photoJSX = "";
  if (photourl != "") {
    photoJSX = <img src={photourl} className="profilephoto" />;
  }

  const verifyfields = () => {
    if (firstName === "") {
      alert("Add first Name");
    } else if (lastName === "") {
      alert("Add Last Name");
    } else if (mobileno === "") {
      alert("Add MobileNo");
    } else if (email === "") {
      alert("Add Email");
    } else if (userName === "") {
      alert("Add UserName");
    } else if (password === "") {
      alert("Add Password");
      // if(!validPassword.test(password))
      // {
      //   passErr=true;
      // }
    } else {
      let data = {
        role: userType,
        firstname: firstName,
        lastname: lastName,
        phone_no: mobileno,
        email: email,
        img_url: photourl,
        username: userName,
        password: password,
        auth_token: Math.random(Math.floor(Math.random() * 1000000000)),
      };
      console.log(data);
      // This is for cache
      localStorage.setItem(
        "cogocache",
        JSON.stringify({ firstname: data.firstname, username: data.username })
      );
      // localStorage.setItem("cogocanteenuser",JSON.stringify(data))
      axios
        .post("http://localhost:3000/createuserprofile", data)
        .then((res) => {
          console.log(res.data);
          navigate(`/userProfile/${userName}`);
        });
    }
  };

  return (
    <>
      <div className="mparent">
        <div className="mLogin">
          <div className="mheading">
            <div className="mtitle">CogoCanteen Welcomes You</div>
            <div className="mdescription">
              Welcome Back,Please Enter your details
            </div>
          </div>
          <div className="minputs">
            {photoJSX}
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
              name="firstname"
              className="muserName"
              placeholder="Enter First Name"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required={true}
            />
            <input
              type="text"
              name="lastname"
              className="mpassword"
              placeholder="Enter Last Name"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
            <input
              type="text"
              name="mobileno"
              className="mpassword"
              placeholder="Enter Mobile No"
              onChange={(e) => {
                setMobileno(e.target.value);
              }}
              required
            />
            <input
              type="email"
              name="email"
              className="mpassword"
              placeholder="Enter Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="text"
              name="photourl"
              className="mpassword"
              placeholder="Enter Photo Url"
              onChange={(e) => {
                setPhotourl(e.target.value);
              }}
              required
            />
            <input
              type="text"
              name="username"
              className="mpassword"
              placeholder="Enter UserName"
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
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
            {/* <button type="submit" className="mlogin" value="Register" onClick={verifyfields}/> */}
            <button className="mlogin" onClick={verifyfields}>
              Register
            </button>
            <div>
              Already have a account.
              <Link to={"userRegister/login"}>Sign In</Link>
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
