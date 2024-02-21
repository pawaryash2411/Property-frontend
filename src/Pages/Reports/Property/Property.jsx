import React from "react";

const Property = () => {
  return (
    <>
      {/* add modal */}

      <div
        className="modal fade modal-xl"
        id="exampleModaladd"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div
                className="container mt-4  p-3 shadow-sm rounded"
                style={{ backgroundColor: "rgb(114, 150, 218)" }}
              >
                <div className="row">
                  <div className="col-md-12">
                    <span
                      className="   p-2 rounded-circle  "
                      style={{ color: "white", backgroundColor: "#0072c0" }}
                    >
                      <i className="fa-solid  ms-1 fa-house"></i>{" "}
                    </span>
                    <span style={{ fontSize: "larger", color: "white" }}>
                      <b className="ms-2">Property Info</b>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="container  p-3  mt-2 shadow-sm rounded"
                style={{ backgroundColor: "#ffff" }}
              >
                <div className="">
                  <div className="d-flex ">
                    <div className="pt-3">
                      <span
                        className="   p-2 rounded-circle  "
                        style={{ color: "white", backgroundColor: "#0072c0" }}
                      >
                        <i className="fa-solid   fa-house"></i>{" "}
                      </span>{" "}
                    </div>
                    <div>
                      <p className="ms-2 p-0 m-0 ">
                        <b style={{ color: "rgb(30, 95, 192)" }}>
                          Enter property address and the number of units
                        </b>
                      </p>
                      <p className="p-0 m-0 ms-2">
                        For single-family properties, enter 1 under # of Units:
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
                <div className="row mt-4">
                  <div className="col-md-4">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        Address
                        <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Average Per Ltr "
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        City<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Average Per Ltr "
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        State<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Average Per Ltr "
                        className="form-control"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        Zip Code
                        <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Average Per Ltr "
                        className="form-control"
                        placeholder="Zip Code"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        # Of Units
                        <span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Average Per Ltr "
                        className="form-control"
                        placeholder="Units"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="">
                    <div className="d-flex ">
                      <div className="pt-3">
                        <span
                          className="   p-2 rounded-circle  "
                          style={{ color: "white", backgroundColor: "#0072c0" }}
                        >
                          <i className="fa-solid fa-gas-pump"></i>{" "}
                        </span>{" "}
                      </div>
                      <div>
                        <p className="ms-2 p-0 m-0 ">
                          <b style={{ color: "rgb(30, 95, 192)" }}>
                            Enter the details for each unit
                          </b>
                        </p>
                        <p className="p-0 m-0 ms-2">
                          Please note: Unit Name/Number cannot be changed later
                        </p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-2 ">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        Unit Name/Number{" "}
                        <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Average Per Ltr "
                        className="form-control"
                        placeholder="Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        # of Bedrooms
                        <span style={{ color: "rgb(4, 0, 255)" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="Purchase Year"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-md-2 ">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        # of Bathrooms
                        <span style={{ color: "rgb(38, 0, 255)" }}>*</span>{" "}
                      </label>
                      <input
                        type="text"
                        name="Type OF Vehicle"
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        Square Feet
                        <span style={{ color: "rgb(38, 0, 255)" }}>*</span>{" "}
                      </label>
                      <input
                        type="text"
                        name="Capacity "
                        className="form-control"
                        placeholder={0}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="mb-2">
                      <label htmlFor="" className="form-label">
                        Notes
                        <span style={{ color: "rgb(0, 81, 255)" }}>*</span>{" "}
                      </label>
                      <input
                        type="text"
                        name="Capacity "
                        className="form-control"
                        placeholder="-"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* add modal */}

      {/* Modal  1 start*/}
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
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <h4>
                <b>What would you like to add?</b>
              </h4>
              <div className="float-start mt-3 mb-3">
                <button
                  style={{ color: "blue" }}
                  type="button"
                  className="btn btn-light me-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModaladd"
                >
                  Add a Property
                </button>

                <button
                  style={{ color: "blue" }}
                  type="button"
                  className="btn btn-light"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Add a Unit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal  1 end*/}
      {/* Modal 2 start */}
      {/* Modal */}

      {/* table model */}

      <div className="modal fade  modal-xl"
        id="exampleModaltable"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 "
                id="exampleModalLabel"
                style={{ color: "#07beb8" }}
              >
                Choose a property{" "}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="shadow p-4 bg-body rounded  mt-2">
                  <div className="table-responsive mt-4">
                    <table className="table table-hover ">
                      <thead>
                        <tr className="table-light">
                          <th scope="col" style={{ textAlign: "start" }}>
                            #
                          </th>
                          <th scope="col " style={{ textAlign: "start" }}>
                            Address
                          </th>
                          <th scope="col" style={{ textAlign: "start" }}>
                            {" "}
                            Unit
                          </th>
                          <th scope="col" style={{ textAlign: "start" }}>
                            Bed|Baths
                          </th>
                          <th
                            scope="col"
                            style={{
                              textAlign: "strat",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Monthly Rent
                          </th>
                          <th
                            scope="col"
                            style={{
                              textAlign: "strat",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            Lease End
                          </th>
                          <th scope="col" className="text-start" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-start">
                          <td>5</td>
                          <td>BiggerPockets Drive </td>
                          <td>main</td>
                          <td>4/1</td>
                          <td>$750</td>
                          <td>Aug 10, 2023 5:08 AM</td>
                          <td>
                            <div className="parent_div ">
                              <div
                                style={{ cursor: "pointer" }}
                                className="print_icon"
                                aria-label="Example icon button with a menu icon"
                              >
                                <a href="" style={{ textDecoration: "none" }}>
                                  <i className="ri-eye-line" />
                                </a>
                              </div>
                              <div
                                style={{ cursor: "pointer" }}
                                className="edit_icon"
                                aria-label="Example icon button with a menu icon"
                              >
                                <a href=" " style={{ textDecoration: "none" }}>
                                  {" "}
                                  <i className="ri-pencil-line" />
                                </a>
                              </div>
                              <div
                                style={{ cursor: "pointer" }}
                                className="delete_icon"
                                data-bs-target="#exampleModal5"
                                aria-label="Example icon button with a menu icon"
                              >
                                <i className="ri-delete-bin-6-line " />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* table model */}

      <div className="container-fluid mb-3 ">
        <div className="row       ">
          <div className="col-md-2 mb-2">
            <div className="bg-info py-2 rounded  text-center  shadow  text-light ">
              <h6 className="p-0 m-0">5</h6>
              <p className="p-0 m-0"  style={{fontSize:"14px"}} >
                {" "}
                <b>$5,289 per month</b>
              </p>
            </div>
          </div>
          <div className="col-md-2 mb-2 ">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h6 className="p-0 m-0">0 Occupied</h6>
              <p className="p-0 m-0" style={{fontSize:"14px"}}>$0 per month</p>
            </div>
          </div>
          <div className="col-md-2 mb-2 ">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h6 className="p-0 m-0">0 Expiring  90 Days</h6>
              <p className="p-0 m-0"style={{fontSize:"14px"}}>$0 per month</p>
            </div>
          </div>
          <div className="col-md-2 mb-2 ">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h6 className="p-0 m-0">5 Vacant</h6>
              <p className="p-0 m-0"style={{fontSize:"14px"}}>$5,289.00 per month</p>
            </div>
          </div>
          <div className="col-md-2 mb-2 mt-2 ">
            <div className="bg-white bg-opacity-50 py-2 rounded text-center shadow">
              <h6
                className="p-0 m-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModaltable"
                style={{fontSize:"14px"}}
              >
                View Properties
              </h6>
            </div>
          </div>

          <div className="col-md-2 mb-2 mt-2 ">
            <div className="bg-white bg-opacity-50 py-2 rounded text-center shadow   ">
              <h6
                className="p-0 m-0"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{fontSize:"14px"}}
              >
                Add
              </h6>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal2"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title" id="exampleModalLabel">
                    <b>Add New Units</b>
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  <p style={{ fontSize: "larger" }}>
                    Please select a property and specify the unit(s) you wish to
                    add.
                  </p>
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <label htmlFor="form-label " className="mb-2">
                        Property
                      </label>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected="">1 Main Street</option>
                        <option value={1}>1 Bigger Pockets Drive</option>
                        <option value={2}>7 Marne St</option>
                        <option value={2}>431 Main Street</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 mt-2">
                      <label htmlFor="form-control" className="mb-2">
                        {" "}
                        Unit Name
                      </label>
                      <div className="input-group flex-nowrap">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Unit Name"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer mt-4">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Create a Unit
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 2 end */}
        </div>
      </div>

      <div className="container-fluid  ">
        <div className="row my-3 ">
          <div className="col-md-4 ">
            <h3>Units (5 Total)</h3>
          </div>

          <div className="col-md-8">
            <div className="float-end ">
              <button
                type="button"
                className="btn btn-white shadow  me-2  mt-2 "
              >
                <i className="fa-sharp fa-solid fa-coins me-1 "></i> Hide
                Balance Due
              </button>

              <button
                type="button"
                className="btn btn-white shadow  me-2 mt-2 "
              >
                <i className="fa-sharp fa-solid fa-file me-1 "></i>Export Data
              </button>
              <button
                type="button"
                className="btn btn-white shadow  me-2 mt-2 "
              >
                <i className="fa-solid fa-ban me-1"></i>Clear All Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table class="table table-hover">
                <thead style={{ whiteSpace: "nowrap" }}>
                  <tr className="text-center">
                    <th scope="col">Address</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Beds | Baths</th>
                    <th scope="col">Monthly Rent</th>
                    <th scope="col">Lease End</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{ whiteSpace: "nowrap" }} className="text-center">
                  <tr>
                    <td> 1 Main Street 2B</td>
                    <td> 1 Main Street 2B</td>
                    <td> 1 Main Street 2B</td>
                    <td> 1 Main Street 2B</td>

                    <td>My bedroom h</td>
                    <td>
                      <button className="rounded  bg-info text-light border-0  px-2 py-1">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="rounded ms-2 bg-info text-light border-0 px-2 py-1">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="rounded ms-2 bg-info text-light border-0 px-2 py-1">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>1 Main Street 1A</td>
                    <td>1 Main Street 1A</td>
                    <td>1 Main Street 1A</td>
                    <td>1 Main Street 1A</td>

                    <td>Sink Faucet Is Dripping</td>
                    <td>
                      <button className="rounded  bg-info text-light border-0  px-2 py-1">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="rounded ms-2 bg-info text-light border-0 px-2 py-1">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="rounded ms-2 bg-info text-light border-0 px-2 py-1">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
