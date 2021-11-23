import React, { useContext } from 'react'

import { favoritsContext } from '../App'

const CityCard = () => {
    const { favoriteCity, setfavoriteCity } = useContext(favoritsContext)
    const removeFavorite = (city) => {
        let favorite = favoriteCity.filter((favorite) => favorite.name !== city)

        setfavoriteCity(favorite)
    }

    return (
        <div className>
            {favoriteCity.map((cityTemp) => (
                <div className="cityCard">
                    <p>City : {cityTemp.name}</p>
                    <p>Temperature : {Math.floor(cityTemp.main.temp) - 273}</p>
                    <p>Temp min : {Math.floor(cityTemp.main.temp_min) - 273}</p>
                    <p>Temp max : {Math.floor(cityTemp.main.temp_max) - 273}</p>

                    <button
                        className="favorites-btn"
                        onClick={() => removeFavorite(cityTemp.name)}
                    >
                        Remove to favorite
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CityCard
