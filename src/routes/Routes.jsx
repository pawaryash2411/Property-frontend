import { Routes, Route } from "react-router-dom";
import CreateRequest from "../Pages/Maintenance/CreateRequest";
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
import Calender from "../Pages/Calender/Calender";
import ViewAllRenters from "../Pages/Renters/ViewAllRenters";

let AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/view-all-renters" element={<ViewAllRenters />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/viewnewproperty" element={<Viewnewproperty />} />
        <Route path="/renters" element={<Renters />} />
        <Route path="/viewallrenters" element={<ViewAllRenters />} />

        {/* Route property start*/}
        <Route path="/rent" element={<Rent />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/addproperty" element={<Addproperty />} />
        <Route path="/property" element={<Property />} />
        <Route path="/viewchange" element={<ViewChange />} />
        <Route path="/addpage" element={<Addpage />} />
        <Route path="/viewrentroll" element={<ViewRentRoll />} />
        <Route path="/createrequest" element={<CreateRequest />} />
        <Route path="/requset" element={<Requset />} />
        <Route path="/addbox" element={<AddBox />} />
        <Route path="/task" element={<Task />} />
        <Route path="/viewtask" element={<ViewTask />} />
        <Route path="/calender" element={<Calender />} />


        {/* member peck end  */}
      </Routes>
    </>
    // viewallrenters
  );
};

export default AllRoutes;
