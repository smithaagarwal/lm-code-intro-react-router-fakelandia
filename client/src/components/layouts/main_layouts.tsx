import "../../App.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <Header />
    <main className="main" >
      <Outlet />
    </main>
    <Footer/>
  </>
);

export default MainLayout;
