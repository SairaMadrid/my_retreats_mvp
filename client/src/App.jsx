import { useEffect, useState } from "react";
import "./App.css";
//import Navbar from "./components/Navbar"

export default function App() {
  const [hotels, setHotels] = useState([]);
  const [currentHotel, setCurrentHotel] = useState(null);
  

  useEffect(() => {
    getHotels();
}, []);

const getHotels = () => {
  fetch("/api/hotels")
    .then((response) => response.json())
    .then((hotels) => {
      setHotels(hotels);
    })
    .catch((error) => {
      console.log(error);
    });
};
  return (
    <div className="container mt-2">
      <div className="container text-center">
      <h1>Lotus Retreats</h1>
      <p>Disconnect and recharge</p>
      </div> 
      </div>  
      );
      }
