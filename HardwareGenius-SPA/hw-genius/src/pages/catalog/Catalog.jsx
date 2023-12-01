import { NavLink } from "react-router-dom";
import "./Catalog.scss";
import pic from "./1.png";

const Catalog = () => {
  return (
    <div className="go">
      <div class="test">
        <p>Армения</p>
      </div>

      <div className="search"></div>
      <div class="search-panel">
        <form>
          {/* <label for="s-panel">Поиск по каталогу</label> */}
          <input
            type="text"
            id="s-panel"
            name="s-panel"
            placeholder="Поиск..."
          />
        </form>
      </div>
    </div>
  );
};

export default Catalog;
