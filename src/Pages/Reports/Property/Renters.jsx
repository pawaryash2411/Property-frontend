import React from "react";

const Renters = () => {
  return (
    <>
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
              <h5 className="modal-title" id="exampleModalLabel">
                Add Tenant to RentRedi
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-12  ">
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

          </div>
        </div>
      </div>

      <div className="container-fluid mb-3 ">
        <div className="row       ">
          <div className="col-md-2 mb-2">
            <div
              className=" py-2 rounded  text-center  shadow  text-light "
              style={{ background: "#2BC7C2" }}
            >
              <h5 className="p-0 m-0">Current</h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>
                {" "}
                <b> 4 Tenants </b>
              </p>
            </div>
          </div>
          <div className="col-md-2 mb-2 ">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0"> Moving In </h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }} >0 Lease Starting </p>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0"> Leaving </h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>4 Lease Ending </p>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0">Accepted</h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>1 Accepted </p>
            </div>
          </div>
          <div className="col-md-2 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0"> Rejected </h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>1 Rejected</p>
            </div>
          </div>
          <div className="col-md-2 mb-2 ">
            <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
              <h5 className="p-0 m-0"> Prior </h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>4 Previous Tenants</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border ">
        <div className="row my-3 ">
          <div className="col-md-4">
            <h3>Prior</h3>
          </div>
          <div className="col-md-8       ">
            <div className="float-end d-flex ">
              <button
                type="button"
                className="btn btn-white shadow  me-2  "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                {" "}
                <i className="fa-solid fa-plus fs-5 me-1" style={{ color: "#74C0FC" }}></i>

                Add
              </button>
              <button type="button" className="btn btn-white shadow  me-2  ">
                <i className="fa-sharp fa-solid fa-coins fs-5 me-1" style={{ color: "#74C0FC" }}></i>
                Show
                Balance Due
              </button>
              <button type="button" className="btn btn-white shadow  me-2">
                <i class="fa-regular fa-file fs-5 me-1" style={{ color: "#74C0FC" }}></i>
                Export Data
              </button>
              <button type="button" className="btn btn-white shadow  me-2">
                <i className="fa-solid fa-ban fs-5 me-1" style={{ color: "#74C0FC", fontWeight: "500" }}></i>
                Clear All Filters
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
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
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

export default Renters;
