import "./App.css";
import AllRoutes from "./routes/Routes";
import SideBar from "./Pages/Shared/SideBar";
import Navbar from "./Components/Navbar";
import Addpage from "./Pages/New folder/Addpage";
import Rent from "./Pages/Reports/Rent/Rent";
import Addproperty from "./Pages/Reports/Property/Addproperty";
import Property from "./Pages/Reports/Property/Property";
import Maintenance from "./Pages/Reports/Maintenance/Maintenance";
import Renters from "./Pages/Reports/Property/Renters";
import Deposit from "./Pages/New folder/Components/Deposit";
// import Rent from "./Pages/Reports/Rent/Rent";
// import CreateRequest from "./Pages/Maintenance/CreateRequest";
// import ViewAllRenters from "./Pages/Renters/Viewallrenters";
// import Viewnewproperty from "./Pages/Property/Viewnewproperty";
// import AddBox from "";
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


      {/* <Deposit /> */}
      {/* <Renters /> */}
      {/* <Maintenance/> */}
      {/* <Addpage /> */}
      {/* <Rent /> */}
      {/* <Addproperty /> */}
      {/* <Property /> */}

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
