import "./App.css";
import { Button } from "react-bootstrap";
// import {BrowserRouter} from 'react-router-dom'
import AllRoutes from "./routes/Routes";
import SideBar from "./Pages/Shared/SideBar";

function App() {
  return (
    <>
    {/* Hello Iam Here
      <Button variant="primary">Click!!</Button> */}
    <SideBar/>
     <AllRoutes />     
    
    </>
  );
}

export default App;
