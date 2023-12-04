import { NavLink } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <nav className="sidebar">
      <NavLink
        style={({ isActive, isPending }) =>
          isActive
            ? { color: "white", textDecoration: "none", fontSize: "17px" }
            : isPending
            ? { color: "red", textDecoration: "none" }
            : {}
        }
        to="."
        end
      >
        <i class="fa fa-home" aria-hidden="true"></i>
        Главная
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="catalog"
      >
        Каталог
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="configurator"
      >
        Конфигуратор
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="prepared"
      >
        Готовые сборки
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="login"
      >
        Личный кабинет
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeLink" : "link")}
        to="cart"
      >
        Корзина
      </NavLink>
    </nav>
  );
};

export default Menu;
