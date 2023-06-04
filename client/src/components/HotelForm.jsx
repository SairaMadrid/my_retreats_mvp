import { useState } from "react";

 function HotelForm({ searchHotel }) {
  const initalHotelState = { location: "", price_range: ""};
  const [newHotel, setNewHotel] = useState(initalHotelState);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewHotel((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addHotel(newHotel);
    setNewHotel(initalHotelState);
  };

  return (
    <div>
      <form className="mt-5" onSubmit={(e) => handleSubmit(e)}/>
        <div className="row mt-5">
          <div className="col">
            <label className="text-start mx-1">Location: Choose from these places- Alicante, Madrid, Amsterdam, Lisbon, Berlin</label>
            <input
              className="form-control mt-1"
              name="location"
              value={newHotel.location}
              onChange={(e) => handleChange(e)}
              />
          
              <div className="col">
              <label className="text-start mx-1"> Price range: Choose from budget, mid range, luxury</label>
              <input
                className="form-control mt-1"
                name="price_range"
                value={newHotel.price_range}
                onChange={(e) => handleChange(e)}
            />
            <div className="col">
              <label className="text-start mx-1"> Yoga onsite?</label>
              <input
                className="form-control mt-1"
                name="yoga"
                value={newHotel.yoga}
                onChange={(e) => handleChange(e)}
            />
            <div className="col">
              <label className="text-start mx-1"> Spa?</label>
              <input
                className="form-control mt-1"
                name="spa"
                value={newHotel.spa}
                onChange={(e) => handleChange(e)}
            />
            
           </div>
           </div>
            </div>
            <button type="submit" className="btn btn-outline-danger mt-5">
          Find hotels
        </button>
        </div>
        </div>
        </div>

     
     
    );
}

export default HotelForm;