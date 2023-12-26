import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import ConfessToUs from "../confess_to_us/confess_to_us";
import MainLayout from "../layouts/main_layouts";
import NotFound from "../not_found/not_found";
import MisdemeanoursContainer from "../misdemeanours/misdemeanours_container";

const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="Misdemeanours" element={<MisdemeanoursContainer />} />
      <Route path="ConfessToUs" element={<ConfessToUs />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default Router;
