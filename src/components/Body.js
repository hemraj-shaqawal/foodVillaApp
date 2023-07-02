import Constant from "../utill/Constant";
import Shimmer from "./ShimmerUI";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import {filterData} from "../utill/helper";
import useOnline from "../utill/useOnline";

// Data interpulation
const RestroCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img
        alt="icn"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

// config Drivan UI
// PROPS: => Use to pass a data into coponent => restorant={configData}
// no key (not acceptable) <<<<< index Key <<<<<<<< unique key (recomandaed way)
// What is State?
// What is Hooks?
// What is useState()?
const Body = () => {
    // useState 
    const [searchInput, setsearchInput] = useState(''); // it'll return a array with variableName and funn to set variable into it.
    const [restroList, setRestroList] = useState([]);
    const [actualRestroList, setActualRestroList] = useState([]);

   
    // With empty array it will be call ones after render
    // dep array [searchInput] => ones after render + everytime after each render.
    useEffect(() => {
      getRestrolist();            
    }, []);

    async function getRestrolist() {
        const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.952864&lng=77.695094&page_type=DESKTOP_WEB_LISTING');
        const result =  await response.json();
        const configData = result?.data?.cards[2]?.data?.data?.cards;
        setRestroList(configData);
        setActualRestroList(configData);
    }

    // custom Hooks
    const isOnline = useOnline();
    if (!isOnline) {
      return <><h1>🔴 Please check your internet connection.</h1></>
    }

    // Avoid render or earlly return
    // if(restroList.length === 0) return null;
  
  return (actualRestroList && actualRestroList.length === 0) ?  <Shimmer/> : (
    <>
      <div className="searchContainer">
        <input type="text" className="inp" placeholder="Search" value={searchInput} 
        onChange={(e) => setsearchInput(e.target.value)}
        ></input>

        <button type="button" className="btn" onClick={() => {
            const data = filterData();
            setRestroList(data);
        }}>Search </button>
      </div>
      <div className="restroList">
        { 
          // Always write in Expreation.
          (restroList.length === 0?<h1>No Record Found!</h1>:"")
        }
        { 
          restroList.map((restorant) => {
            return (
             
              <Link to={ "/restromenu/" + restorant.data.id }  key={restorant.data.id}><RestroCard
              {...restorant.data}
              hello="world"
             
            /></Link> 
            );
          })
        }
      </div>
    </>
  );  
};

export default Body;