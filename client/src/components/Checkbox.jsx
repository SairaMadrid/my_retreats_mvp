import React from 'react'

 function Checkbox() {

  const [checked, setChecked] = useState(false);
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
    <Checkbox
                label="Yoga onsite?"
                value={checkedOne}
                onChange={handleChangeOne}
                />
               <p>Is "Yoga onsite" checked? {checked.toString()}</p>
        <Checkbox
               label="Spa?"
               value={checkedTwo}
               onChange={handleChangeTwo}     
        />   
        <p>Is "Spa" checked? {checked.toString()}</p>   
                </div>
)};


/* const Checkbox = ({ label, value, onChange }) => {
    return (
      <label>
        <input type="checkbox" checked={value} onChange={onChange} />
        {label}
      </label>
    );
  }; */

  export default Checkbox;
