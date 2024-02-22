import React from 'react'
import { Link } from 'react-router-dom'

const ViewTask = () => {
    return (
        <>

            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col-md-5">
                        <div className="card border-0 shadow py-2 text-center" style={{ backgroundColor: "#aaa" }} >
                            <h5 className=" text-light p-0 m-0 " > 0 </h5>
                            <p className=" text-light p-0 m-0" style={{ fontSize: "14px" }} > <b> Pending Maintenance Requests </b> </p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card border-0 shadow py-2 text-center" style={{ backgroundColor: "#07beb8" }} >
                            <h5 className=" text-light p-0 m-0 " > 0 </h5>
                            <p className=" text-light p-0 m-0" style={{ fontSize: "14px" }}> <b> Pending Maintenance Requests </b> </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="d-grid mt-3">
                            <button
                                className="btn  shadow text-primary   "
                                type="button" style={{ fontSize: "14px" }}
                            >
                                <Link to={"/task"}>
                                    Add
                                </Link>

                            </button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid my-3 ">
                <div className="row  ">
                    <div className="col-md-4 my-2 ">
                        <h4>To Do</h4>
                    </div>

                    <div className="col-md-8">
                        <div className="float-end ">
                            <button type="button" className="btn btn-white shadow  me-2 mt-2 ">
                                <i className="fa-sharp fa-solid fa-file me-1 "></i>Export Data
                            </button>
                            <button type="button" className="btn btn-white shadow  me-2 mt-2 " data-bs-toggle="modal"
                                data-bs-target="#staticBackdrop">
                                <i className="fa-solid fa-ban me-1"></i>Clear All Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            <section>
                <div className="container-fluid ">
                    <div className="row ">
                        {/* <hr /> */}
                        <div className="col-md-12">
                            <div className="table-responsive  ">
                                <table className="table">
                                    <thead>
                                        <tr style={{ whiteSpace: "nowrap" }}>
                                            <th className="text-secondary  " scope="col">
                                                <div className='d-flex'>
                                                    Task
                                                    <img
                                                        className="mx-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </th>
                                            <th className="text-secondary " scope="col">
                                                <div className='d-flex'>

                                                    Priority

                                                    <img
                                                        className="mx-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </th>

                                            <th className="text-secondary" scope="col">
                                                <div className='d-flex'>
                                                    Date
                                                    <img
                                                        className="mx-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                                                        alt=""
                                                    />
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 Main Street 2B</td>
                                            <td>Check Gutters at 1 Main St Main Street 2B  </td>
                                            <td>20/1/2023</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ViewTask