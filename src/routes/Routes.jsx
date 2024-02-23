import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateRequest from "../Pages/Maintenance/CreateRequest";
import ViewAllRenters from "../Pages/Renters/ViewAllRenters";
import Renters from "../Pages/Reports/Property/Renters";
import Maintenance from "../Pages/Reports/Maintenance/Maintenance";
import Rent from "../Pages/Reports/Rent/Rent";
import Property from "../Pages/Reports/Property/Property";
import Viewnewproperty from "../Pages/Reports/Property/Viewnewproperty";
import Requset from "../Pages/New folder/Components/Requset";
import Addproperty from "../Pages/Reports/Property/Addproperty";
import Dashboard from "../Components/Dashboard";
import Deposit from "../Pages/Reports/Rent/Deposit";
import AddBox from "../Pages/Memberpeak/AddBox";
import ViewChange from "../Pages/Reports/Rent/ViewChange";
import Addpage from "../Pages/Reports/Rent/Addpage";
import Task from "../Pages/Tasks/Task";
import ViewTask from "../Pages/Tasks/ViewTask";
import ViewRentRoll from "../Pages/Reports/Rent/ViewRentRoll";
let AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/view-all-renters" element={<ViewAllRenters />} />
        <Route path="/maintenance" element={<Maintenance />} />


        {/* Route property start*/}
        <Route path="/viewnewproperty" element={<Viewnewproperty />} />
        <Route path="/renters" element={<Renters />} />
        <Route path="/Viewallrenters" element={<ViewAllRenters />} />

        {/* Route property End */}

        {/*  rent  Route start */}
        <Route path="/rent" element={<Rent />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/addproperty" element={<Addproperty />} />
        <Route path="/property" element={<Property />} />
        <Route path="/viewchange" element={<ViewChange />} />
        <Route path="/addpage" element={<Addpage />} />
        <Route path="/viewrentroll" element={<ViewRentRoll />} />
        {/*  rent  Route end  */}

        {/* maintenance Route start  */}
        <Route path="/createrequest" element={<CreateRequest />} />
        <Route path="/requset" element={<Requset />} />
        {/* maintenance Route end   */}
        {/* member peck start */}
        <Route path="/addbox" element={<AddBox />} />

        {/* member peck end  */}


        {/* task section start */}
        <Route path="/task" element={<Task />} />
        <Route path="/viewtask" element={<ViewTask />} />
        {/* task section end */}

      </Routes>
    </>
  );
};

export default AllRoutes;
