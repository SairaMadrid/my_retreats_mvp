import { useEffect, useState } from 'react';
import "./App.css";
import HotelForm from "./components/HotelForm";
import Checkbox from "./components/Checkbox";
import HotelsList from "./components/HotelsList";
import NavBar from "./components/NavBar";
import HotelCard from"./components/HotelCard";
import SearchHotels from './components/SearchHotels';


 function App() {
  const [hotels, setHotels] = useState([]);
  const [currentHotel, setCurrentHotel] = useState(null);
  

return (
  
  <div className="container mt-2">
      <div className="container text-center">
      
      <h1>Lotus retreats</h1> <i class="fa-solid fa-spa"></i>
        <p>Disconnect and recharge</p>
        </div>
        <div>
        <HotelForm getHotels={setHotels} />
        </div>
        
        <HotelsList />
        {/* <HotelCard /> */}
        {/* <NavBar /> */}
        </div>
        


        
        
  );
}


      

      export default App;
