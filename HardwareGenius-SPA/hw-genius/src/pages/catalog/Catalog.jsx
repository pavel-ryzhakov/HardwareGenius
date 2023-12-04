import { NavLink } from "react-router-dom";
import "./Catalog.scss";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="left-menu">
        <div class="search-panel">
          <form>
            <label for="s-panel">Поиск по каталогу</label>

            <input
              type="text"
              id="s-panel"
              name="s-panel"
              placeholder="Поиск..."
            />
            <button type="submit">Поиск</button>
          </form>
        </div>
        <div className="price-panel">
          <form>
            <p for="min-price">Цена</p>
            <div className="s-p">
              <input type="text" id="min-price" name="min-price" />
              <input type="text" id="max-price" name="max-price" />
            </div>
          </form>
          <div class="slide-container">
            <input type="range" min="1" max="100" value="50" class="sliderr" />
          </div>
          <div class="button-container">
            <button class="button cancel">Сбросить</button>
            <button class="button confirm">Применить</button>
          </div>
        </div>
        <div className="dropdown-menu">
          <nav>
            <label for="touch">
              <span>Производитель</span>
            </label>
            <input type="checkbox" id="touch" />

            <ul class="slide">
              <li>
                <div className="li-el">
                  <label for="happy">Asus</label>
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    id="happy"
                    name="happy"
                    value="yes"
                  />
                </div>
              </li>
              <li>
                <div className="li-el">
                  <label for="happy">Acer</label>
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    id="happy"
                    name="happy"
                    value="yes"
                  />
                </div>
              </li>
              <li>
                <div className="li-el">
                  <label for="happy">Palit</label>
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    id="happy"
                    name="happy"
                    value="yes"
                  />
                </div>
              </li>
              <li>
                <div className="li-el">
                  <label for="happy">MSI</label>
                  <input
                    type="checkbox"
                    class="custom-checkbox"
                    id="happy"
                    name="happy"
                    value="yes"
                  />
                </div>
              </li>
            </ul>
          </nav>
        </div>

        <p>Армения</p>
      </div>
      <div className="central-container">
        <div class="top-panel">
          <div class="sort-filter-container">
            <p>Цена</p>
            <i class="fa fa-angle-up" aria-hidden="true"></i>
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </div>
          <div class="right-container">
            <div class="pagination-panel">
              <p></p>
              <select name="" id="" class="form-control">
                <option value="">20</option>
                <option value="">50</option>
                <option value="">все</option>
              </select>
            </div>
            <div className="pag-img">
              <i class="fa fa-th-list" aria-hidden="true"></i>
              <i class="fa fa-th-large" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
