import React from 'react'
import { Link } from 'react-router-dom'

const Requset = () => {
  return (
    <>

      {/* top Section Start  */}
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
                <Link to={"/createrequest"}>
                  Add
                </Link>

              </button>
            </div>
          </div>
        </div>
      </div>
      {/* top Section Start  */}
      {/* Maintenance Completed section start  */}
      <div className="container-fluid my-3 ">
        <div className="row  ">
          <div className="col-md-4 ">
            <h4>Maintenance Completed</h4>
          </div>

          <div className="col-md-8">
            <div className="float-end ">
              <button type="button" className="btn btn-white shadow  me-2 mt-2 ">
                <i class="fa-regular fa-file fs-5 me-1" style={{ color: "#74C0FC" }}></i>
                Export Data
              </button>
              <button type="button" className="btn btn-white shadow  me-2 mt-2 " data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                <i className="fa-solid fa-ban fs-5 me-1" style={{ color: "#74C0FC", fontWeight: "500" }}></i>Clear All Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Completed section End  */}
      {/* Table Section start  */}
      <section>
        <div className="container-fluid">
          <div className="row ">
            {/* <hr /> */}
            <div className="col-md-12">
              <div className="table-responsive  ">
                <table className="table">
                  <thead>
                    <tr style={{ whiteSpace: "nowrap" }}>
                      <th className="  " scope="col">
                        <div className=''>
                          Address
                          {/* <img
                            className="mx-1"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                            alt=""
                          /> */}
                        </div>
                      </th>
                      <th className=" " scope="col">
                        <div className=''>
                          Description
                          {/* <img
                            className="mx-1"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                            alt=""
                          /> */}
                        </div>
                      </th>

                      <th className="" scope="col">
                        <div className=''>
                          Date
                          {/* <img
                            className="mx-1"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                            alt=""
                          /> */}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 1 Main Street 2B</td>
                      <td> 1 Main Street 2B  </td>
                      <td>20/1/2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Table Section start  */}
      {/* clear All Filters model start   */}
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
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
              <div className="container">
                <div className="row">
                  <h5>Reset custom filtering settings?</h5>
                  <p>
                    Would you like to set your custom filtering settings back to
                    default or reset them just for now?
                  </p>
                  <div className="btn">
                    <button
                      type="button"
                      className="btn btn-outline-primary border-0 shadow"
                    >
                      Reset just for now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger shadow border-0"
                    >
                      Delete Custom Setting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* clear All Filters model End */}
      {/* Date Column model start  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <div className="row">
                  <h1
                    className="text-center mt-4"
                    style={{ fontWeight: 600, fontSize: 23 }}
                  >
                    Date Column
                  </h1>
                  <p
                    className="text-center mt-4"
                    style={{ fontWeight: 600, fontSize: 15 }}
                  >
                    Set how you would like to sort and filter data.
                  </p>
                  <div>
                    <label htmlFor="" style={{ fontSize: 20 }} className="mx-2">
                      Sort:
                    </label>
                    <label htmlFor="" style={{ fontSize: 20 }} className="mx-2">
                      {" "}
                      <input className="mx-1" type="radio" />
                      Asc{" "}
                    </label>
                    <label htmlFor="" style={{ fontSize: 20 }} className="mx-2">
                      {" "}
                      <input className="mx-1" type="radio" />
                      Dsc{" "}
                    </label>
                  </div>
                  <div className="d-flex justify-content-center mb-4 mt-4">
                    <label htmlFor="" className="mt-1 mx-1">
                      Between
                    </label>
                    <input
                      type="datetime-local"
                      className="mt-1 mx-1 w-50"
                      placeholder="Low"
                    />
                    <label htmlFor="" className="mt-1 mx-1">
                      to
                    </label>
                    <input
                      type="datetime-local"
                      className="mt-1 mx-1 w-50"
                      placeholder="High"
                    />
                  </div>
                  <label htmlFor="" className="mt-2" style={{ fontWeight: 500 }}>
                    <input type="checkbox" className="mx-2" />
                    Save as my default sort/filter setting
                  </label>
                  <div className="d-flex justify-content-center  mt-3">
                    <button
                      type="button"
                      className="btn bg-transparent text-primary shadow border-2 mx-4 w-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn bg-transparent text-primary  mx-4 w-100 "
                      style={{ fontWeight: 400 }}
                    >
                      Cler
                    </button>
                    <button
                      type="button"
                      className="btn btn-info text-light  mx-4 w-100"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Date Column model start  */}


    </>
  )
}

export default Requset