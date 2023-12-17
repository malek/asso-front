import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomeRoutes from "./routes/HomeRoutes";

function App() {
  return (
    <BrowserRouter>
        {/* <Navbar /> */}
        {/* <div className="pt-5 mt-2"> */}
          <HomeRoutes />
          {/* </div> */}
    </BrowserRouter>
  );
}


export default App;
