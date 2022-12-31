import axios from "axios";
import React from "react";
import { useState } from "react";
import { v4 as uuid } from 'uuid';


const AddFlat = () => {

  const [book, setBook] = useState({
    
    id:"",
    title:"",
    label:"",
    serviceTime:"",
    category:"",
    rating:"",
    price:"",
    coverSrc:"",
    SuperArea:"",
    CarpetArea:"",
    NoofBalconies:"",
    Loading:"",
    Electricload:"",
    Powerbackup:"",
    FurnishedorSemifernished:"",
    CeilingHeight:"",
    MainDoorHeight:"",
    InternalDoorHeights:"",
   

  });
  const [error,setError] = useState(false)

 

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("http://localhost:8000/flatdata", book);
     
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="container" >
         
      <div><h4 style={{float:'left'}}>Add New Flat Data</h4></div>
      <div style={{border: '1px solid dodgerblue',padding: '15px',borderRadius: '5px',background: 'lavenderblush',}}>
      <input
        type="text"
        placeholder=" Enter Property name"
        name="title"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter label"
        name="label"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Possession Date"
        name="serviceTime"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Ready to Move/Underconstruction(r/u)"
        name="category"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Flat Size(2BHK,3BHK,4BHK,5BHK,6BHK,7BHK) in No."
        name="rating"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Price "
        name="price"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter image url without commas"
        name="coverSrc"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter SuperArea"
        name="SuperArea"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter CarpetArea"
        name="CarpetArea"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter No of Balconies"
        name="NoofBalconies"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Loading"
        name="Loading"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Electricload"
        name="Electricload"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Powerbackup"
        name="Powerbackup:"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Furnished or Semifernished"
        name="FurnishedorSemifernished"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Tower Heights"
        name="TowerHeights"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Lift per Tower"
        name="LiftperTower"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Floor vs Flats"
        name="FloorvsFlats"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Possession Date"
        name="PossessionDate"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Ceiling Height"
        name="CeilingHeight"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Main Door Height"
        name="MainDoorHeight"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Internal Door Heights"
        name="InternalDoorHeights"
        onChange={handleChange}
        className="form-control"
      />
      
      <button onClick={handleClick} className='btn'>Add Flat Data</button>
  
      {error && "Something went wrong!"}
     
    </div>
    </div>
  );
};

export default AddFlat;

