import Constant from "../utill/Constant";
import Shimmer from "./ShimmerUI";
import {useState, useEffect, useContext} from "react";
import { Link } from 'react-router-dom';
import {filterData} from "../utill/helper";
import useOnline from "../utill/useOnline";
import UserContext from "../utill/UserContext";
import RestroCard from "./RestroCard";



// config Drivan UI
// PROPS: => Use to pass a data into coponent => restorant={configData}
// no key (not acceptable) <<<<< index Key <<<<<<<< unique key (recomandaed way)
// What is State?
// What is Hooks?
// What is useState()?
// 
const Body = () => {
    // useState 
    const [searchInput, setsearchInput] = useState(''); // it'll return a array with variableName and funn to set variable into it.
    const [restroList, setRestroList] = useState([]);
    const [actualRestroList, setActualRestroList] = useState([]);
    const { user, setUser} = useContext(UserContext);
   
    // With empty array it will be call ones after render
    // dep array [searchInput] => ones after render + everytime after each render.
    useEffect(() => {
      getRestrolist();            
    }, []);

    async function getRestrolist() {
        setActualRestroList([]);
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
      <div className="my-3">
        <input type="text" className="h-8 mr-5" placeholder="Search" value={searchInput} 
        onChange={(e) => setsearchInput(e.target.value)}
        ></input>

        <button type="button" className="bg-green-300 w-[100px] rounded-sm h-8" onClick={() => {
            const data = filterData();
            setRestroList(data);
        }}>Search </button>
        <div>
          <input type="text" onChange={(e) => setUser({
            ...user,
            email: e.target.value
          })} />
        </div>
      </div>
      <div className="flex flex-wrap">
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