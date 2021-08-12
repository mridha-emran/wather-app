import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
import Home from "./views/Home";
import Footer from "./component/Footer";
import Favorits from "./views/Favorites";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  
  return (
    <BrowserRouter>
       < nav className="navbar navbar-expand-md navbar-light bg-light">
                <div className="container-fluid">             
                    <p> <Link to="/">Home</Link> </p>
                    <p> <Link to="/Favortis">Favorits</Link></p>
                </div>
            </nav>

      <Switch>
      <Route exact path="/"  component={Home} />
      <Route  exact path="/Favortis"  component={Favorits} />
      </Switch>
        <Footer />
    </BrowserRouter>
    
      

   
  );
}

export default App;
