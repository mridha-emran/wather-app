
import  { useState,useContext,useEffect } from 'react';
import getWather from '../component/Api';
import { favoritsContext } from '../App';

function Home(){

    const [cityName, setCityName] = useState("");
    const [cityTemp,setTemp] = useState({});
    const {favoriteCity, setfavoriteCity} = useContext(favoritsContext)
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data=await getWather(cityName)
        setTemp(data)
        console.log(data)
      };

      const setFavorite = () => {
        if(favoriteCity){
          if ( favoriteCity.length <3){
            setfavoriteCity([...favoriteCity,cityTemp])
            console.log("setfavorite")
          } 
        
        }
        
        
        
    }
    return(
        <>
       < div>
        <h1>weather</h1>
        <form class="form-inline my-2 my-sm-0">
      <input className="form-control mr-sm-2" type="text" value={cityName} onChange={(e) => {
        setCityName(e.target.value)}}  placeholder="Search" aria-label="Search"/>
        
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleSubmit} type="submit">Search</button>
    </form>
    </div> 
    <div>
                <p>City : {cityTemp.name}</p>
                <p>Temperature : {cityTemp.main ? cityTemp.main.temp : null}</p>
                <button onClick={setFavorite} className="btn btn-outline-success my-2 my-sm-0">addfavorite</button>
            </div>


        </>
    )
}
export default Home