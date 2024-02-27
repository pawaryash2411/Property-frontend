import React from 'react'
import { Link } from 'react-router-dom'
// import "./Dashboard.css";

const Dashboard = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row py-5" style={{ backgroundColor: "rgb(46, 136, 172)", color: "white" }} >
                    <h3>Good Afternoon, your name</h3>
                    <h5>Welcome to RentRedi!</h5>
                    <div className="col-lg-8 mx-auto">
                        <div className="row">
                            <div className="col-md-4 mt-2">
                                <div className="d-flex border rounded-5  p-2 justify-content-between">
                                    <div className="mt-2">
                                        <h5 className='ms-2' style={{ fontSize: "17px" }}>Renters</h5>
                                    </div>
                                    <div className="">
                                        <button
                                            type="button"
                                            className="border-0 rounded-4 bg-light text-secondary  p-2 "
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            style={{ fontSize: "14px" }}
                                        >
                                            Add
                                            <span>
                                                <i className="fa-solid fa-plus ms-1" />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-2">
                                <div className="d-flex border rounded-5 p-2  justify-content-between">
                                    <div className="mt-2">
                                        <h5 className='ms-2' style={{ fontSize: "17px" }}>Notifications</h5>
                                    </div>
                                    <div className="">
                                        <button
                                            type="button"
                                            className="border-0 rounded-4    bg-light text-secondary  p-2  "
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                            style={{ fontSize: "14px" }}
                                        >
                                            Send
                                            <span>
                                                <i className="fa-solid fa-plus ms-1  " />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-2">

                                <div className="d-flex border rounded-5 p-2 justify-content-between">
                                    <div className="mt-2">
                                        <h5 className='ms-2' style={{ fontSize: "17px" }}>Renters</h5>
                                    </div>
                                    {/* <div className=""> */}
                                    <button
                                        type="button"
                                        className="border-0 rounded-4  bg-light text-secondary  p-2 "
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        style={{ fontSize: "14px" }}
                                    >
                                        Add
                                        <span>
                                            <i className="fa-solid fa-plus ms-1" />
                                        </span>
                                    </button>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-1 mt-2">
                        <div
                            className="card p-4 rounded-4 py-1 px-1 shadow border-0"
                            style={{ height: "20rem" }}
                        >
                            <div className="d-flex px-2 py-1 justify-content-between">
                                <div className="mx-2 mt-3">
                                    <h5 style={{ fontWeight: 600 }}>Calender</h5>
                                </div>
                                <div className="mx-2">
                                    {/* Button trigger modal */}
                                    {/* <Link  > */}

                                    <button
                                        type="button"
                                        className="border-0 rounded-4 py-2 px-3  mt-2"
                                        style={{
                                            fontWeight: 600,
                                            backgroundColor: "rgb(243, 237, 230)"
                                        }}
                                    >
                                        <Link to={"/calender"} >

                                            Add Event
                                        </Link>
                                        <span>
                                            <i className="fa-solid fa-plus ms-1" />
                                        </span>
                                    </button>
                                    {/* </Link> */}
                                </div>
                            </div>
                            <div
                                className="mt-5 mb-5 border-0 p-3 rounded-4 py-4 mx-2 text-center"
                                style={{
                                    boxShadow:
                                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                }}
                            >
                                <h6>Sync Google Calender</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-1 mt-2">
                        <div
                            className="card p-2 rounded-4 py-1 px-1 shadow border-0"
                            style={{ height: "20rem" }}
                        >
                            <div className="d-flex px-2 py-1 justify-content-between">
                                <div className="mx-2 mt-3">
                                    <h5 style={{ fontWeight: 600 }}>Task</h5>
                                </div>
                                <div className="mx-2">
                                    {/* Button trigger modal */}
                                    <button
                                        type="button"
                                        className="border-0 rounded-4 py-2 px-3  mt-2"
                                        style={{
                                            fontWeight: 600,
                                            backgroundColor: "rgb(243, 237, 230)"
                                        }}
                                    >
                                        <Link to={"/task"} >
                                            Add Task
                                        </Link>
                                        <span>
                                            <i className="fa-solid fa-plus ms-1" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="mt-5 mb-5 border-0 py-1 rounded-4 mx-2 text-center"
                                style={{
                                    boxShadow:
                                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                }}
                            >
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input ms-1"
                                        id="exampleCheck1"
                                    />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Check Gutters at 1 Main ST Medium
                                    </label>
                                    <p className="text-info ">
                                        Medium <span className="text-secondary"> Dec 01</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-1 mt-2">
                        <div
                            className="card p-2 rounded-4 py-1 px-1 shadow border-0"
                            style={{ height: "20rem" }}
                        >
                            <div className="d-flex px-2 py-1 justify-content-between">
                                <div className="mx-2 mt-3">
                                    <h5 style={{ fontWeight: 600 }}> Reports </h5>
                                </div>
                                <div className="mx-2">
                                    {/* Button trigger modal */}
                                    <button
                                        type="button"
                                        className="border-0 rounded-4 py-2 px-3  mt-2"
                                        style={{
                                            fontWeight: 600,
                                            backgroundColor: "rgb(243, 237, 230)"
                                        }}
                                    >
                                        <Link to={"/property"}>
                                            Invite
                                        </Link>
                                        <span>
                                            <i className="fa-solid fa-plus ms-1" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="mt-5 mb-5 border-0 rounded-4 mx-3 px-3 py-1 d-flex justify-content-between "
                                style={{
                                    boxShadow:
                                        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                                }}
                            >
                                <div>
                                    <p>
                                        Chadav, DJ
                                        <br />1 Main Street, 1B
                                    </p>
                                </div>
                                <div>Lease from Jul 31, 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 p-1 mt-2">
                        <div
                            className="card p-2 rounded-4 py-1 px-1 shadow-sm border-0"
                            style={{ height: "20rem" }}
                        >
                            <div className="d-flex px-2 py-1 justify-content-between">
                                <div className="mx-2 mt-3">
                                    <h5 style={{ fontWeight: 600 }}>Rent</h5>
                                </div>
                                <div className="mx-2">
                                    {/* Button trigger modal */}
                                    <button
                                        type="button"
                                        className="border-0 rounded-4 py-2 px-3  mt-2"
                                        style={{
                                            fontWeight: 600,
                                            backgroundColor: "rgb(243, 237, 230)"
                                        }}
                                    >
                                        <Link to={"/addpage"}>
                                            Add Charges to less
                                        </Link>
                                        <span>
                                            <i className="fa-solid fa-plus ms-1" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="border-0 p-3 text-center"
                                style={{ height: "18rem", overflowY: "scroll" }}
                            >
                                <div
                                    className="d-flex justify-content-between mt-2"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <p style={{ color: "brown" }}>
                                            $1875.00
                                            <br />1 Main Street, 1A
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between mt-2"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <p style={{ color: "brown" }}>
                                            $1875.00
                                            <br />1 Main Street, 1A
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between mt-2"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <p style={{ color: "brown" }}>
                                            $1875.00
                                            <br />1 Main Street, 1A
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between mt-2"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <p style={{ color: "brown" }}>
                                            $1875.00
                                            <br />1 Main Street, 1A
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-1 mt-2">
                        <div
                            className="card p-2 rounded-4 py-1 px-1 shadow-sm border-0"
                            style={{ height: "20rem" }}
                        >
                            <div className="d-flex px-2 py-1 justify-content-between">
                                <div className="mx-2 mt-3">
                                    <h5 style={{ fontWeight: 600 }}>Maintenance</h5>
                                </div>
                                <div className="mx-2">
                                    <button
                                        type="button"
                                        className="border-0 rounded-4 py-2 px-3  mt-2"
                                        style={{
                                            fontWeight: 600,
                                            backgroundColor: "rgb(243, 237, 230)"
                                        }}
                                    >  <Link to={"/createRequest"} >

                                            Add Request
                                        </Link>
                                        <span>
                                            <i className="fa-solid fa-plus ms-1" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="border-0 p-3 text-center"
                                style={{ height: "18rem", overflowY: "scroll" }}
                            >
                                <div
                                    className="d-flex justify-content-between"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            1 Main Street, 1A
                                        </h5>
                                        <p>
                                            Living room living broken the living room light fixure is
                                            broken and needs to be replaced
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between mt-2"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            1 Main Street, 1A
                                        </h5>
                                        <p>
                                            Living room living broken the living room light fixure is
                                            broken and needs to be replaced
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between mt-2"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            1 Main Street, 1A
                                        </h5>
                                        <p>
                                            Living room living broken the living room light fixure is
                                            broken and needs to be replaced
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between mt-2"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            1 Main Street, 1A
                                        </h5>
                                        <p>
                                            Living room living broken the living room light fixure is
                                            broken and needs to be replaced
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between mt-2"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            1 Main Street, 1A
                                        </h5>
                                        <p>
                                            Living room living broken the living room light fixure is
                                            broken and needs to be replaced
                                        </p>
                                    </div>
                                    <div className="p-1">
                                        <p>Due Jun 01, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-1 mt-2">
                        <div
                            className="card p-2 rounded-4 py-1 px-1 shadow-sm border-0"
                            style={{ height: "20rem" }}
                        >
                            <div className="d-flex px-2 py-1 justify-content-between">
                                <div className="mx-2 mt-3">
                                    <h5 style={{ fontWeight: 600 }}>Renters</h5>
                                </div>
                                <div className="mx-2">
                                    <button
                                        type="button"
                                        className="border-0 rounded-4 py-2 px-3  mt-2"
                                        style={{
                                            fontWeight: 600,
                                            backgroundColor: "rgb(243, 237, 230)"
                                        }}
                                    >
                                        <Link to={"/viewallrenters"} >

                                            Invite
                                        </Link>
                                        <span>
                                            <i className="fa-solid fa-plus ms-1" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div
                                className="border-0 p-3 text-center"
                                style={{ height: "18rem", overflowY: "scroll" }}
                            >
                                <div
                                    className="d-flex justify-content-between"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            Barone ryan
                                        </h5>
                                        <p>1 Main Street , 1B</p>
                                    </div>
                                    <div className="p-1">
                                        <p>Lease from Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            Barone ryan
                                        </h5>
                                        <p>1 Main Street , 1B</p>
                                    </div>
                                    <div className="p-1">
                                        <p>Lease from Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            Barone ryan
                                        </h5>
                                        <p>1 Main Street , 1B</p>
                                    </div>
                                    <div className="p-1">
                                        <p>Lease from Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            Barone ryan
                                        </h5>
                                        <p>1 Main Street , 1B</p>
                                    </div>
                                    <div className="p-1">
                                        <p>Lease from Due Jun 01, 2023</p>
                                    </div>
                                </div>
                                <div
                                    className="d-flex justify-content-between"
                                    style={{ backgroundColor: "rgb(245, 252, 255)" }}
                                >
                                    <div className="p-1">
                                        <h5 style={{ fontStyle: "italic", fontWeight: 600 }}>
                                            Barone ryan
                                        </h5>
                                        <p>1 Main Street , 1B</p>
                                    </div>
                                    <div className="p-1">
                                        <p>Lease from Due Jun 01, 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-dark " id="exampleModalLabel">
                                Add Tenant to RentRedi
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body" style={{ color: "black" }}>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected="">1 Main Street</option>
                                        <option value={1}>7 Marn Set</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Unit</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                    >
                                        <option selected="">Select Unit</option>
                                        <option value={1}>1A</option>
                                        <option value={1}>2B</option>
                                    </select>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">
                                        Tenant's Email:
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter Email"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard