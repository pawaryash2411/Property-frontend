import "./App.css";
import AllRoutes from "./routes/Routes";
import SideBar from "./Pages/Shared/SideBar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <AllRoutes />
    </>
  );
}

export default App;
