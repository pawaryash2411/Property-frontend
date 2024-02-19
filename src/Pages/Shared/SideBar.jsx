import React from "react";
import { NavLink } from "react-router-dom";
import './SideBar.css'



let SideBar = () => {
    return (
        <>
            {/* <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Dashboard</span>
                            </NavLink>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <NavLink to="#" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline"></span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Property</span> </NavLink>
                                    <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <NavLink to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">View All Properties</span> </NavLink>
                                        </li>  
                                        <li>
                                            <NavLink to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Property</span> 2 </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Add Unit</span> 3 </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="#" className="nav-link px-0"> <span className="d-none d-sm-inline">List Property/Unit</span> 4 </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>


                        </div>
                    </div>

                </div>
            </div> */}

            <div className="wrapper">
                <aside id="sidebar">
                    <div className="d-flex">
                        <button id="toggle-btn" type="button">
                        <i class="fa-solid fa-bars"></i>
                        </button>
                        <div className="sidebar-logo">
                            <a href="#">Menu</a>
                        </div>
                    </div>
                    <ul className="sidebar-nav">
                        <li className="sidebar-item">
                            <a href="" className="sidebar-link">
                            <i class="fa-sharp fa-solid fa-grid-horizontal"></i>
                            <span>Dashboard</span>
                            </a>
                        </li>
                        
                        <li className="sidebar-item">
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#rent" aria-expanded="false" aria-controls="rent">
                            <i class="fa-solid fa-dollar-sign"></i>
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
                            <i class="fa-solid fa-house"></i>
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
                            <i class="fa-solid fa-key"></i>
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
                            <i class="fa-solid fa-wrench"></i>
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
                            <i class="fa-solid fa-file-excel"></i>
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

                        


                        {/* <li className="sidebar-item">
                            <a href="#" className="sidebar-link has-dropdown collapsed" data-bs-toggle="collapse" data-bs-target="#multi" aria-expanded="false" aria-controls="multi">
                                <span>Multi Level</span>
                            </a>
                            <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                <li className="sidebar-item">
                                    <a href="#" className="sidebar-link collapsed" data-bs-toggle="collapse" data-bs-target="#multi" aria-expanded="false" aria-controls="reports">
                                        Two Links
                                    </a>
                                    <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">Link 1</a>
                                        </li>
                                        <li className="sidebar-item">
                                            <a href="#" className="sidebar-link">Link 2</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li> */}

                            {/* <li className="sidebar-item">
                                <a href="" className="sidebar-link">
                                
                                <span>Dashboard</span>
                                </a>
                            </li> */}
                    </ul>
                </aside>
            </div>            


        </>
    )
}

export default SideBar
