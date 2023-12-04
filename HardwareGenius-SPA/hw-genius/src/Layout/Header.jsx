import { Link } from "react-router-dom";
import logo1 from "../assets/images/logos/logo.png";
import "./Header.scss";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <Link to="/">
          <img src={logo1} alt="logo" width="180px" />
        </Link>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
