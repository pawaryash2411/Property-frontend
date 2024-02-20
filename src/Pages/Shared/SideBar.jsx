import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import './SideBar.css'





let SideBar = () => {

    let [sidebar, togglebtn] = useState(false)

    let onClickMenu =()=>{
        
        togglebtn(true)
    }
    return (
        <>
            <div className="wrapper" id="navigation">
                 <aside id="sidebar">                   {/*menu  */}
                    <div className="d-flex">
                         <button id="togglebtn" type="button" onClick={onClickMenu} >  
                        <i className="fa-solid fa-bars"></i>
                        </button>
                        <div className="sidebar-logo">
                            <a href="#">Menu</a>
                        </div>
                    </div>
                    {
                        sidebar ?
                        <ul className="sidebar-nav" >
                        <li className="sidebar-item">
                            <a href="" className="sidebar-link">
                            <i className="fa-sharp fa-solid fa-grid-horizontal"></i>
                            <span>Dashboard</span>
                            </a>
                        </li>
                        
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#rent" aria-expanded="false" aria-controls="rent">
                            <i className="fa-solid fa-dollar-sign"></i>
                                <span>Rent</span>
                            </a>
                            <ul id="rent" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">View all charges</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Add charge or lease</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Add late fee rules</a>
                                </li>
                                
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#property" aria-expanded="false" aria-controls="property">
                            <i className="fa-solid fa-house"></i>
                                <span>Properties</span>
                            </a>
                            <ul id="property" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">View All Property</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Add Property</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Add Unit</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">List Property/Unit</a>
                                </li>  
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#renters" aria-expanded="false" aria-controls="renters">
                            <i className="fa-solid fa-key"></i>
                                <span>Renters</span>
                            </a>
                            <ul id="renters" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">View All Renters</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Add Renter</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Lease Signing</a>
                                </li>  
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#maintenance" aria-expanded="false" aria-controls="maintenance">
                            <i className="fa-solid fa-wrench"></i>
                                <span>Maintenance</span>
                            </a>
                            <ul id="maintenance" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Create request</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">View all requests</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">Add Maintenance Coordination</a>
                                </li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#reports" aria-expanded="false" aria-controls="reports">
                            <i className="fa-solid fa-file-excel"></i>
                                <span>Reports</span>
                            </a>
                            <ul id="reports" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link">For Rent</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">For Properties</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">For Renters</a>
                                </li>
                                <li className="sidebar-item">
                                <a href="#" className="sidebar-link">For Tasks</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    :
                    ''
                    }
                    
                </aside>
                <div className="main p-3">
                    <div className="text-center">
                        <h1>
                            Sidebar Bootstrap 5
                        </h1>
                    </div>
                </div>
            </div>            
        </>
    )
}

export default SideBar
