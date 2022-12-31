import axios from "axios";
import React from "react";
import { useState } from "react";
import { v4 as uuid } from 'uuid';


const Add = () => {
  const [book, setBook] = useState({
    u_id:"",
    name:"",
    label:"",
    ProjectPlotArea:"",
    GreenArea:"",
    PropertyStatus:"",
    PriceRange:"",
    TotalTowers:"",
    TotalFlats:"",
    OCStatus:"",
    Density:"",
    PodiumNonPodium:"",
    ApprovedBank:"",
    ClubHouseSize:"",
    ConstructionType:"",
    TowerHeights:"",
    LiftperTower:"",
    FloorvsFlats:"",
    PossessionDate:"",
    Lobby:"",
    Distance:"",
    Segment:""


  });
  const [error,setError] = useState(false)

 

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      await axios.post("http://localhost:8000/compare/data", book);
     
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="container" >
          
      <div><h4 style={{float:'left'}}>Add New Property</h4></div>
      <div style={{border: '1px solid dodgerblue',padding: '15px',borderRadius: '5px',background: 'lavenderblush',}}>
      <input
        type="text"
        placeholder=" Enter Property name"
        name="name"
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
        placeholder="Enter Project plot area"
        name="ProjectPlotArea"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Green Area"
        name="GreenArea"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Property Status"
        name="PropertyStatus"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Price Range"
        name="PriceRange"
        onChange={handleChange}
        className="form-control"
      />
      <input
        type="text"
        placeholder="Enter Total Towers"
        name="TotalTowers"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Total Flats"
        name="TotalFlats"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter OC Status"
        name="OCStatus"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Density"
        name="Density"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Podium/NonPodium"
        name="PodiumNonPodium"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Approved Bank"
        name="ApprovedBank"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Club House Size"
        name="ClubHouseSize"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Construction Type"
        name="ConstructionType"
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
        placeholder="Enter Lobby"
        name="Lobby"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Distance"
        name="Distance"
        onChange={handleChange}
        className="form-control"
      />
       <input
        type="text"
        placeholder="Enter Segment"
        name="Segment"
        onChange={handleChange}
        className="form-control"
      />
      
      <button onClick={handleClick} className='btn'>Add Data</button>
  
      {error && "Something went wrong!"}
     
    </div>
    </div>
  );
};

export default Add;

