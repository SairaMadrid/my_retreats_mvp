import { useState } from "react";

function Checkbox() {
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={checkedOne}
          onChange={handleChangeOne}
        />
        Yoga onsite?
      </label>
      <p>Is "Yoga onsite" checked? {checkedOne.toString()}</p>

      <label>
        <input
          type="checkbox"
          checked={checkedTwo}
          onChange={handleChangeTwo}
        />
        Spa?
      </label>
      <p>Is "Spa" checked? {checkedTwo.toString()}</p>
    </div>
  );
}

export default Checkbox;
