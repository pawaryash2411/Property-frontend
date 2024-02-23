import "./App.css";
import AllRoutes from "./routes/Routes";
import SideBar from "./Pages/Shared/SideBar";
import Navbar from "./Components/Navbar";
import Addpage from "./Pages/Reports/Rent/Addpage";
import Rent from "./Pages/Reports/Rent/Rent";
import Addproperty from "./Pages/Reports/Property/Addproperty";
import Property from "./Pages/Reports/Property/Property";
import Maintenance from "./Pages/Reports/Maintenance/Maintenance";
import Renters from "./Pages/Reports/Property/Renters";
import Deposit from "./Pages/Reports/Rent/Deposit";
import ViewChange from "./Pages/Reports/Rent/ViewChange";
import AddBox from "./Pages/Memberpeak/AddBox";
import ViewAllRenters from "./Pages/Renters/ViewAllRenters";
import AddRenter from "./Pages/Renters/AddRenter";
import Task from "./Pages/Tasks/Task";
import ViewRentRoll from "./Pages/Reports/Rent/ViewRentRoll";
import AddChange from "./Pages/New folder/Components/AddChange";
import Create from "./Pages/New folder/Components/Create";
import Requset from "./Pages/New folder/Components/Requset";

function App() {
  return (
    <>
      <Navbar />
      <div className="app-wrapper">
        <SideBar />
        <div className="main-wrapper">
          <AllRoutes />
        </div>
      </div>

      <AddChange />
      <Create />
      <Requset />
      {/* <AddRenter/> */}
      {/* <Task/> */}
      {/* <ViewRentRoll /> */}
      {/* <ViewAllRenters/> */}

      {/* <Deposit />
      <Renters />
      <Maintenance/>
      <Addpage />
      <Rent />
      <Addproperty />
      <Property /> */}
      {/* <ViewChange /> */}
      {/* <AddBox /> */}
      {/* <Rent /> */}
      {/* 1700 */}
      {/* <CreateRequest /> */}
      {/* <ViewAllRenters /> */}

      {/* Property section start */}
      {/* <Property /> */}
      {/* <Addproperty /> */}
      {/* Property section end  */}



      {/* Renter section start */}
      {/* <Renters /> */}
      {/* Renter section end  */}

      {/* Maintenance section start */}
      {/* <Maintenance /> */}
      {/* <ViewAllRenters /> */}
      {/* Maintenance section end  */}




      {/* <AddBox /> */}
      {/* <ViewChange /> */}
      {/* <Request/> */}
      {/* <ViewChange /> */}


      {/* done */}
      {/* <Viewnewproperty /> */}

    </>
  );
};

export default App;
