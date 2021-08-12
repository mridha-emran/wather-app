import Api from '../component/Api';
import  { useState } from 'react';
import getWather from '../component/Api';
function Home(){

    const [cityName, setCityName] = useState("");
    const [cityTemp,setTemp] = useState({})
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data=await getWather(cityName)
    
      };
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
    <>
      <p> city:{handleSubmit.city}</p>
      </>
        </>
    )
}
export default Home