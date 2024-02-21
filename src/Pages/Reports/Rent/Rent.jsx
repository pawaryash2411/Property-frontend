import React from "react";
import "./rent.css";
const Rent = () => {
  return (
    <>
      <div className="container-fluid ">
        <h3 className="ms-2" >  Rent  </h3>
        <div className="row " >
          <div className="col-md-3 mb-2">
            <div className="bg-info py-2 rounded  text-center text-light  shadow  ">
              <h5 className="p-0 m-0">  $13,125.00</h5>
              <p className="p-0 m-0"style={{ fontSize: "14px" }}>  7 Due in next 30 days </p>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 text-light rounded text-center shadow">
              <h5 className="p-0 m-0"> $0</h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }}> 0 Overdue 1-10 days </p>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 text-light rounded text-center shadow">
              <h5 className="p-0 m-0"> $13,125.00</h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>  7 OverDue 11+ days</p>
            </div>
          </div>
          <div className="col-md-3 mb-2">
            <div className="bg-secondary bg-opacity-50 py-2 text-light rounded text-center shadow">
              <h5 className="p-0 m-0"> $0</h5>
              <p className="p-0 m-0" style={{ fontSize: "14px" }}>  0 paid in last 30 days  </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-8">
            <div>
              <h4>Charges (7 Due in next 30 days)</h4>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="float-end">
              <button type="button" className="btn    side_btn shadow  ">
                {" "}
                <i className="fa-solid fa-file"></i> Export Data{" "}
              </button>
              <button type="button" className="btn ms-2 side_btn shadow">
                {" "}
                <i className="fa-solid fa-ban"></i> Clear All Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-12  borber ">
            <div className="table-responsive ">
              <table className="table">
                <thead style={{ whiteSpace: "nowrap" }}>
                  <tr className="text-center">
                    <th scope="col">Balance</th>
                    <th scope="col">Address</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Description</th>
                    <th scope="col">Due date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody style={{ whiteSpace: "nowrap" }} className="text-center">
                  <tr>
                    <th scope="row"> $1875.00 </th>
                    <td> 1 main Street </td>
                    <td> Unit </td>
                    <td> Rent + late free </td>
                    <td> Jun 01,2023 </td>
                    <td
                      className=""
                      style={{ textAlign: "center", width: "200px" }}
                    >
                      <select
                        style={{ width: "200px" }}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1"> Send Reminder </option>
                        <option value="2"> Add Payment Received </option>
                        <option value="3"> Edit charges Details </option>
                      </select>
                    </td>
                    <td>
                      {" "}
                      <i className="fa-solid fa-pen-to-square fs-5"></i>{" "}
                      <i className="fa-solid fa-trash fs-5 ms-1"></i>{" "}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row"> $1875.00 </th>
                    <td> 1 main Street </td>
                    <td> Unit </td>
                    <td> Rent + late free </td>
                    <td> Jun 01,2023 </td>
                    <td
                      className=""
                      style={{ textAlign: "center", width: "200px" }}
                    >
                      <select
                        style={{ width: "200px" }}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1"> Send Reminder </option>
                        <option value="2"> Add Payment Received </option>
                        <option value="3"> Edit charges Details </option>
                      </select>
                    </td>
                    <td>
                      {" "}
                      <i className="fa-solid fa-pen-to-square fs-5"></i>{" "}
                      <i className="fa-solid fa-trash fs-5 ms-1"></i>{" "}
                    </td>
                  </tr>

                  <tr>
                    <th scope="row"> $1875.00 </th>
                    <td> 1 main Street </td>
                    <td> Unit </td>
                    <td> Rent + late free </td>
                    <td> Jun 01,2023 </td>
                    <td
                      className=""
                      style={{ textAlign: "center", width: "200px" }}
                    >
                      <select
                        style={{ width: "200px" }}
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Open this select menu</option>
                        <option value="1"> Send Reminder </option>
                        <option value="2"> Add Payment Received </option>
                        <option value="3"> Edit charges Details </option>
                      </select>
                    </td>
                    <td>
                      {" "}
                      <i className="fa-solid fa-pen-to-square fs-5"></i>{" "}
                      <i className="fa-solid fa-trash fs-5 ms-1"></i>{" "}
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

export default Rent;
