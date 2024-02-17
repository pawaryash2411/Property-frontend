import React from "react";
import {Routes, Route} from 'react-router-dom'
import CreateRequest from "../Pages/Maintenance/CreateRequest";
import ViewAllRequest from "../Pages/Maintenance/ViewAllRequest";


let AllRoutes = ()=>{
    return(
        <>
       <Routes>
        <Route path="create-request" element={<CreateRequest />} />
        <Route path="view-request" element={<ViewAllRequest />} />
       </Routes>
        </>
    )
}

export default AllRoutes