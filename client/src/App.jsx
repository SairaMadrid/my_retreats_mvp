import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HotelForm from "./components/HotelForm";
import HotelsList from "./components/HotelsList";
import HotelCard from "./components/HotelCard";
//import Home from "./pages/Home";

function App() {
  const [hotels, setHotels] = useState([]);
  const [currentHotel, setCurrentHotel] = useState(null);

  return (
    <div className="container mt-2">
      {/* <nav className="nav-link-home">
        <ul>
          <Link to="/">Homepage</Link>
        </ul>
      </nav> */}
      <div className="container text-center">
        <h1>Lotus retreats</h1> <i className="fa-solid fa-spa"></i>
        <p>Disconnect and recharge</p>
      </div>
      <div>
        <HotelForm getHotels={setHotels} />
      </div>

      <HotelsList />
      {/* <HotelCard /> */}
      {/* <NavBar /> */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
