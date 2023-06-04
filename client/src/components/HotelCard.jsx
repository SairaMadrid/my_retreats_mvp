import React from 'react'

 function HotelCard() {
    const [hotel, setHotel] = useState([]);

useEffect(() => {
  getHotelbyId();
}, []);

const getHotelbyId = async () => {
  try {
    const response = await fetch("http://localhost:4000/api/hotels/1");
    const jsonData = await response.json();

    setHotel(jsonData);
  } catch (error) {

    console.error(err.message);
  }
};
  return //how do I style each card?
}

export default HotelCard;
