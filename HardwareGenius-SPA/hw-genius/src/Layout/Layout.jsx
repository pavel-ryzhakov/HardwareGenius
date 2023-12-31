import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="mainContainer">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
