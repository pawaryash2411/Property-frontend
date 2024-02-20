
import "./App.css";
import AllRoutes from "./routes/Routes";
import SideBar from "./Pages/Shared/SideBar";
import Navbar from "./components/Navbar"
let App = ()=> {
  return (
    <>
      <Navbar/>
      <SideBar/>
      <AllRoutes/>
    </>
  );
}

export default App;