import { useEffect, useState } from 'react';
import "./App.css";
import HotelForm from "./components/HotelForm";
import Checkbox from "./components/Checkbox";
import HotelsList from "./components/HotelsList";




 function App() {
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
        <h1>Lotus retreats</h1> <i class="fa-solid fa-spa"></i>
        <p>Disconnect and recharge</p>
        <HotelForm getHotels={getHotels} />
      </div>
      </div>
   
  );
}

      

      export default App;
