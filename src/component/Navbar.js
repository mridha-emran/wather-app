import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="navWrapper">
        <h2>weather app</h2>
        <li>
          <Link className="navLink" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/Favortis">
            Favoris
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;