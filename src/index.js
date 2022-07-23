import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//styled Components
import { GlobalStyle } from "./GlobalStyles.js";

//components
import ShopInterface from "./aakash-components/ShopInterface.js";
import { UserService } from "./User-interface/UserService.js";
import UserRegister from "./Auth/Login/userregister";
import UserLogin from "./Auth/Login/userlogin";
import { Profile } from "./Auth/Profile/Profile";
import Home from "./Home/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="userRegister/" element={<UserRegister />} />
        <Route path="userRegister/login" element={<UserLogin />} />
        <Route
          path="userRegister/userProfile/:UserName"
          element={<Profile />}
        />
        <Route path="shopkeeper/:username" element={<ShopInterface />} />
        <Route path="user/:username" element={<UserService />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
