import "../../App.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <>
    <Header />
    <main className="p-6" style={{ flex: "1" }}>
      <Outlet />
    </main>
    <Footer/>
  </>
);

export default MainLayout;
