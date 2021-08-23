import React, {useContext} from 'react'

import { favoritsContext } from '../App'



const CityCard = () => {
    const {favoriteCity,setfavoriteCity} = useContext(favoritsContext)
    const removeFavorite = (city) => { 
        let favorite = favoriteCity.filter(favorite => favorite.name !== city)
        
        setfavoriteCity(favorite)
            
    }
  

    return (
        <>
                {favoriteCity.map( (cityTemp, index) => 
                   (<div key={index}>
                    <p>City : {cityTemp.name}</p>
                    <p>Temperature : {cityTemp.main ? cityTemp.main.temp : null}</p>
                    <button onClick={() => removeFavorite(cityTemp.name)} className="btn-remove-fav" >Remove to favorite</button>
                    
                </div>)
    
                )}
        </>
    )
}

export default CityCard;