import React from "react";

const ViewAllRenters = () => {
  return (
    <>
      {/* Add button section start  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body my-4">
              <h4>Add Tenant to RentRedi</h4>
            </div>
            <div className="mb-3 me-3 ms-3">
              <label htmlFor="disabledSelect" className="form-label">
                Address *
              </label>
              <select id="disabledSelect" className="form-select">
                <option>1 Main Street </option>
                <option>1 BiggerPockets Drive </option>
                <option>7 Marne St </option>
                <option>431 Main Street </option>
              </select>
            </div>
            <div className="mb-3 me-3 ms-3">
              <label htmlFor="disabledSelect" className="form-label">
                Unit *
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Select Unit</option>
                <option>1A </option>
                <option>1B</option>
              </select>
            </div>
            <div className="mb-3 me-3 ms-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Tenant's Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=" Enter Tenant's Email:"
              />
            </div>
            <div className="d-flex justify-content-between m-3 ">
              <button
                type="button"
                className="btn btn-white shadow text-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Add button section end */}

      <div className="container-fluid ">
        <div className="row       ">
          <div className="col-md-2 mb-2">
            <div className=" py-2 rounded  text-center  shadow  text-light "   style={{background:"#24526c"}} >
              <h5 className="p-0 m-0">Current</h5>
              <p className="p-0 m-0">
                {" "}
                <b> 4 Tenants</b>
              </p>
            </div>
          </div>
          <div className="col-md-2 mb-2 ">
            <div className=" bg-opacity-50 py-2 rounded text-center shadow text-light "  style={{background:"#8F9489"}}>
              <h5 className="p-0 m-0"> Moving In </h5>
              <p className="p-0 m-0">0 Lease Starting </p>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0"> Leaving </h5>
              <p className="p-0 m-0">4 Lease Ending </p>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0">Accepted</h5>
              <p className="p-0 m-0">1 Accepted </p>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0"> Rejected </h5>
              <p className="p-0 m-0">1 Rejected</p>
            </div>
          </div>
          <div className="col-md-2 mb-2 ">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0"> Current </h5>
              <p className="p-0 m-0">4 Previous Tenants</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid  ">
        <div className="row my-3 ">
          <div className="col-md-4 ">
            <h3>Current</h3>
          </div>

          <div className="col-md-8">
            <div className="float-end ">
              <button
                type="button"
                className="btn btn-white shadow  me-2 mt-2   "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {" "}
                <i className="fa-solid fa-plus"></i> Add
              </button>
              <button
                type="button"
                className="btn btn-white shadow  me-2  mt-2 "
              >
                <i className="fa-sharp fa-solid fa-coins me-1 "></i> Show
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
              <table className="table table-hover">
                <thead style={{ whiteSpace: "nowrap" }}>
                  <tr className="text-center">
                    <th scope="col">Renter</th>
                    <th scope="col">Address</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Rent</th>
                    <th scope="col">Lease Start</th>
                    <th scope="col">Lease End</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{ whiteSpace: "nowrap" }} className="text-center">
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button className="rounded text-light  border-0  px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="rounded ms-2 text-light  border-0 px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="rounded ms-2 text-light   border-0 px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-trash"   ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button className="rounded text-light   border-0  px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="rounded ms-2 text-light  border-0 px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="rounded ms-2 text-light    border-0 px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-trash"   ></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                      <button className="rounded text-light  border-0  px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="rounded ms-2 text-light  border-0 px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-pen"></i>
                      </button>
                      <button className="rounded ms-2 text-light   border-0 px-2 py-1" style={{backgroundColor: "#aab646"}}>
                        <i className="fa-solid fa-trash"   ></i>
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

export default ViewAllRenters;
