// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import Navbar from './components/NavBar/NavBar';
import Navbar from "./components/NavBar/NavBar";
import "./index.css";
import Slider from "./components/slider/Slider";
// // import five from "./five.jpg"
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <React.StrictMode>
// <Navbar />
// <Slider />
// <Body />
// <Footer />
//   </React.StrictMode>
// );

const Home = () => (
  <>
    <Navbar />
    <Slider />
    <Body />
    <Footer />
  </>
);

export default Home;
