import "./profile.css";
import axios from "axios";
import logo from "./loginimg.jpg";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function Profile() {
  const [userType, setUserType] = useState("user");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [email, setEmail] = useState("");
  const [photourl, setPhotourl] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [editText, setEditText] = useState("Dont");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { UserName } = useParams();
  // usernametest = props.userName
  let photoJSX = "";
  //   console.log("called")
  let user = JSON.parse(localStorage.getItem("cogocache")).firstname;
  if (photourl !== "") {
    photoJSX = (
      <img
        src={photourl}
        className="profilephoto mprofilephoto"
        alt="Link Didin't Worked"
      />
    );
  }

  useEffect(() => {
    const getData = () => {
      const waitfunc = async () => {
        axios
          .get(`http://localhost:3000/user?username=${UserName}`)
          .then((res) => {
            console.log(res.data);
            setUserType(res.data.role);
            setFirstName(res.data.firstname);
            setLastName(res.data.lastname);
            setMobileno(res.data.phone_no);
            setEmail(res.data.email);
            setPhotourl(res.data.img_url);
            setUserName(res.data.username);
            setPassword(res.data.password);
          });
      };
      waitfunc();
    };
    getData();
  }, []);

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
    } else {
      console.log(photourl);
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
      localStorage.setItem(
        "cogocache",
        JSON.stringify({ firstname: data.firstname, username: data.username })
      );
      axios
        .put("http://localhost:3000/updateUserProfile", data)
        .then((res) => console.log(res.data));
    }
  };

  return (
    <>
      <div className="mparentprofile">
        <div className="mposterprofile">{photoJSX}</div>
        <div className="mLogin">
          <div className="mheadingprofile">
            <div className="mtitle">Welcome,{user} to your profile</div>
            <div className="mdescription">
              <button
                onClick={() => {
                  setEditText("");
                  setBtnDisabled(false);
                }}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className="minputs">
            {/* {photoJSX} */}
            <select
              name="typeofuser"
              className="muserName"
              autoFocus
              onChange={(e) => {
                setUserType(e.target.value);
              }}
              readOnly={editText}
            >
              <option value="user">User</option>
              <option value="shopkeeper">Shopkeeper</option>
            </select>
            <input
              type="text"
              name="firstname"
              className="muserName"
              placeholder="Enter First Name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              readOnly={editText}
            />
            <input
              type="text"
              name="lastname"
              className="mpassword"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              readOnly={editText}
            />
            <input
              type="text"
              name="mobileno"
              className="mpassword"
              value={mobileno}
              placeholder="Enter Mobile No"
              onChange={(e) => {
                setMobileno(e.target.value);
              }}
              readOnly={editText}
            />
            <input
              type="email"
              name="email"
              value={email}
              className="mpassword"
              placeholder="Enter Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              readOnly={editText}
            />
            <input
              type="text"
              name="photourl"
              className="mpassword"
              value={photourl}
              placeholder="Enter Photo Url"
              onChange={(e) => {
                setPhotourl(e.target.value);
              }}
              readOnly={editText}
            />
            <input
              type="text"
              name="username"
              className="mpassword"
              value={userName}
              placeholder="Enter UserName"
              readOnly
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              className="mpassword"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              readOnly={editText}
            />
            {/* <input type="submit" className="mlogin" value="Log In"/> */}
            <button
              className="mlogin"
              disabled={btnDisabled}
              onClick={verifyfields}
            >
              Save
            </button>
            <div className="madvertisement">
              Hungry!! Order Some Food
              {/* Add Link to Register page */}
              {/* <Link to={'/login'}>Sign In</Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
