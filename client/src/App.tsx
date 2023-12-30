import "./App.css";
import Router from "./components/router/router";
import { BrowserRouter } from "react-router-dom";
import { ParentData } from "./components/parent_data_provider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ParentData>
          <Router />
        </ParentData>
      </BrowserRouter>
    </>
  );
}

export default App;
