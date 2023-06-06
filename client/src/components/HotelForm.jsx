import { useState } from "react";

function HotelForm({ searchHotel }) {
  const initalHotelState = { location: "", price_range: "" };
  const [newHotel, setNewHotel] = useState(initalHotelState);
  const [checkedYoga, setCheckedYoga] = useState(false);
  const [checkedSpa, setCheckedSpa] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewHotel((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //await addHotel(newHotel);
    console.log("hello");
    setNewHotel(initalHotelState);
  };

  return (
    <div>
      <form className="mt-5" onSubmit={(e) => handleSubmit(e)} >
      <div className="row mt-5">
        <div className="col">
          <label className="text-start mx-1 form-label">
            Location: 
          </label>
          <input
            className="form-control mt-1"
            name="location"
            value={newHotel.location}
            onChange={(e) => handleChange(e)}
          />

          <div className="col">
            <label className="text-start mx-1 form-label">
              {" "}
              Price range: 
            </label>
            <select
              className="form-control mt-1"
              name="price_range"
              value={newHotel.price_range}
              onChange={(e) => handleChange(e)}
            >
              <option value="select">Select...</option>
              <option value="budget">Budget</option>
              <option value="mid range">Mid range</option>
              <option value="luxury">Luxury</option>
            </select>
            <div className="col">
              <label className="text-start mx-1"> Yoga onsite?</label>
              <input
                type="checkbox"
                className="mt-3"
                name="yoga"
                value={newHotel.yoga}
                onChange={(e) => handleChange(e)}
              />
              <div className="col">
                <label className="text-start mx-1"> Spa?</label>
                <input
                  type="checkbox"
                  className="mt-3"
                  name="spa"
                  value={newHotel.spa}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-primary mt-1">
            Find hotels
          </button>
          <br></br>
          <h4 className="mt-5">Popular destinations</h4>
        </div>
      </div>
      </form>
    </div>
  );
}

//I think I need to use a filter function to get the search button to work but I have not achieved this yet....!

export default HotelForm;
