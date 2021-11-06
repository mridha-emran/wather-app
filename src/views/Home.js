
import  { useState,useContext, } from 'react';
import getWather from '../component/Api';
import { favoritsContext } from '../App';



function Home(){

    const [cityName, setCityName] = useState("");
    const [cityTemp,setTemp] = useState({});
    const [weather, setWeather] = useState("");
    const {favoriteCity, setfavoriteCity} = useContext(favoritsContext)
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data=await getWather(cityName)
        setTemp(data)
        setWeather(data)
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
      <div className={

        typeof weather.weather !== "undefined"
        ? weather.weather[0].main !== "Clear" ? weather.weather[0].main !== "Mist" ?
        weather.weather[0].main !== "Snow" ? weather.weather[0].main !== "Rain" ? weather.weather[0].main !== "Clouds" ?
         "App thander" :  "App cloud" : "App rain" : "App cold" : "App mist": " App clear": "App"
      
      }>
       <div>
        <h1>weather</h1>

        <form className="search-container">
      <input className="search-bar" type="text" value={cityName} onChange={(e) => {
        setCityName(e.target.value)}}  placeholder="Search" aria-label="Search"/>
        
      <button className="button" onClick={handleSubmit} type="submit">Search</button>
    </form>
    </div>
    {typeof cityTemp.main != "undefined" ?(

      <div className="cityCard">
                <p>City : {cityTemp.name}</p>
                <p>Weather : { weather.weather ? weather.weather[0].main : null}</p>
                <p>Temperature : {Math.floor(cityTemp.main ? cityTemp.main.temp: null)-273}°c</p>
                <p>Temp max : {Math.floor(cityTemp.main ? cityTemp.main.temp_max:null)-273}°c</p>
                <p>Temp min : {Math.floor(cityTemp.main ? cityTemp.main.temp_min:null)-273}°c</p>
                <button className = "favorites-btn" onClick={setFavorite}>addfavorite</button>
            </div>

)
: (
  <div className="not-found">
    <p>Please type your City Name...</p>
  </div>
 )
} 

        </div>
    )
}
export default Home