import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from "./views/Home";
import Footer from "./component/Footer";
import Favorits from "./views/Favorites";
import NavBar from "./component/Navbar";
import{createContext,useState} from "react"

import "./App.css";

export const favoritsContext = createContext([]);
function App() {
  const [favoriteCity, setfavoriteCity] = useState([])
  return (
    <BrowserRouter>
  <div className="page-container">
    
    <div className="content-wrap">

     <favoritsContext.Provider value={{favoriteCity, setfavoriteCity}}>
      <NavBar />

      <Switch>
      <Route exact path="/"  component={Home} />
      <Route  exact path="/Favortis"  component={Favorits} />
      </Switch>
      </favoritsContext.Provider>
    </div>
        <Footer />
  </div>
    
    </BrowserRouter>
    
      

   
  );
}

export default App;
