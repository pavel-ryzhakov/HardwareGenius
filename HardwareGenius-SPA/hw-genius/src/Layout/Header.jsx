import { Link } from "react-router-dom";
import logo1 from "../assets/images/logos/logo.png";
import "./Header.scss";
import "../components/Menu.scss";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={logo1} alt="logo" width="180px" />
        </Link>
        {/* <div className="info-container">
          <p>
            Самый тяжелый компьютер в мире был разработан в 1980-м году
            компанией IBM. Его вес составлял около 48-ми кг, и это не считая
            дисковода, который шел к нему отдельно и весил примерно 59 кг.
          </p>
          <hr className="hr-shelf" />
        </div> */}
        <Menu />
      </div>
    </header>
  );
};

export default Header;
