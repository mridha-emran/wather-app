


 const getWather= async(cityName)=>{

     console.log(cityName)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=efd3ea1201e83f239fccc461f6d092ac`)
      const data = await response.json()
      console.log(data)
      return data
 } 

 


 export default getWather