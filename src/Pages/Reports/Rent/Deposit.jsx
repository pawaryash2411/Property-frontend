import React from 'react'

const Deposit = () => {
  return (
    <>
      <>
        {/* card section start  */}
        <section>
          <div className="container">
            <div className="row mt-3">
              <div className="col-md-3 col-sm-3">
                <div className="rounded-3" style={{ backgroundColor: "#3788d8" }}>
                  <h1 className="text-center text-light" style={{ fontSize: 20 }}>
                    $0
                  </h1>
                  <h4
                    className="text-center text-light mb-1 pb-2"
                    style={{ fontSize: 20 }}
                  >
                    0 Due in next 30 days
                  </h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div
                  className="rounded-3"
                  style={{ backgroundColor: "rgb(161, 159, 159)" }}
                >
                  <h1 className="text-center text-light" style={{ fontSize: 20 }}>
                    $0
                  </h1>
                  <h4
                    className="text-center text-light pb-2"
                    style={{ fontSize: 20 }}
                  >
                    0 Overdue 1-10 days
                  </h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div
                  className="rounded-3"
                  style={{ backgroundColor: "rgb(161, 159, 159)" }}
                >
                  <h1 className="text-center text-light" style={{ fontSize: 20 }}>
                    $0
                  </h1>
                  <h4
                    className="text-center text-light pb-2"
                    style={{ fontSize: 20 }}
                  >
                    0 Overdue 11+ days
                  </h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-3">
                <div
                  className="rounded-3"
                  style={{ backgroundColor: "rgb(161, 159, 159)" }}
                >
                  <h1 className="text-center text-light" style={{ fontSize: 20 }}>
                    $0
                  </h1>
                  <h4
                    className="text-center text-light pb-2"
                    style={{ fontSize: 20 }}
                  >
                    0 Paid in last 30 days
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* card section End*/}
        {/* Charges  section start  */}
        <section>
          <div className="container">
            <div className="row">
              <div className="allSidesMargin0 col-md-6 pb-3">
                <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>
                  Charges (0 Paid in last 30 days)
                </h1>
              </div>
              {/* <div className="col-md-3 pb-3" /> */}
              <div className="col-md-6   pb-3">
                <div className="   float-end ">
                  <button
                    type="button"
                    style={{ fontWeight: 400, border: "1px solid #e2e8f0" }}
                    className="btn1 btn shadow bg-transparent text-dark"
                  >
                    <i className="fa-solid fa-file-export text-secondary" /> Export
                    Data
                  </button>
                  <button
                    type="button"
                    className="btn1 btn shadow bg-transparent text-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                    style={{ fontWeight: 400, border: "1px solid #e2e8f0" }}
                  >
                    <i className="fa-solid fa-ban text-secondary" /> Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Charges  section End  */}
        {/* Payment section start  */}
        <section>
          <div className="container mt-3 mb-3">
            <div className="row">
              <div className="col-md-3 mt-2 mb-2">
                <div className="card  ">
                  <div className="d-flex align-items-center  justify-content-center  ">
                    <div>
                      <img
                        src="./img/pro/f591213e-5967-41c1-94a3-445d04217537.jpeg"
                        className="img-fluid "
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-center " style={{ fontSize: 15 }}>
                        $0
                      </h1>
                      <h4 className="text-center mt-2" style={{ fontSize: 15 }}>
                        0 Payments overall
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-2 mb-2">
                <div className="card  ">
                  <div className="d-flex align-items-center  justify-content-center  ">
                    <div>
                      <img
                        src="./img/pro/moblie.jpeg"
                        className="img-fluid "
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="text-center " style={{ fontSize: 15 }}>
                        $0
                      </h1>
                      <h4 className="text-center " style={{ fontSize: 15 }}>
                        0 Recent (pending) payments
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-2 mb-2">
                <div className="card  ">
                  <div className="d-flex align-items-center  justify-content-center  ">
                    <div>
                      <img src="./img/pro/bank1.jpeg" className="img-fluid " alt="" />
                    </div>
                    <div>
                      <h1 className="text-center " style={{ fontSize: 15 }}>
                        $0
                      </h1>
                      <h4 className="text-center " style={{ fontSize: 15 }}>
                        0 Deposits initiated
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mt-2 mb-2">
                <div
                  className="card border-0 "
                  style={{ backgroundColor: "#2eaef0" }}
                >
                  <div className="d-flex align-items-center  justify-content-center  ">
                    <div>
                      <img src="./img/pro/bank2.jpeg" className="img-fluid " alt="" />
                    </div>
                    <div>
                      <h1
                        className="text-center text-light "
                        style={{ fontSize: 15 }}
                      >
                        $0
                      </h1>
                      <h4
                        className="text-center  text-light"
                        style={{ fontSize: 15 }}
                      >
                        0 Deposits made in last 30 days
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Payment section End  */}
        {/* Table Section start  */}
        <section>
          <div className="container">
            <div className="row">
              <hr />
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr style={{ whiteSpace: "nowrap" }}>
                      <th className="text-secondary" scope="col">
                        <img
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                          alt=""
                        />
                        Transfer Amount
                      </th>
                      <th className="text-secondary" scope="col">
                        <img
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                          alt=""
                        />
                        Payment(s) linked
                      </th>
                      <th className="text-secondary" scope="col">
                        <img
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                          alt=""
                        />
                        Paid By
                      </th>
                      <th className="text-secondary" scope="col">
                        <img
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                          alt=""
                        />
                        Property
                      </th>
                      <th className="text-secondary" scope="col">
                        <img
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                          alt=""
                        />
                        Unit
                      </th>
                      <th className="text-secondary" scope="col">
                        <img
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                          alt=""
                        />
                        Paid on
                      </th>
                      <th className="text-secondary" scope="col">
                        <img
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                          alt=""
                        />
                        Receive by
                      </th>
                      <th className="text-secondary" scope="col">
                        <img
                          className="mx-1"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          src="https://app.rentredi.com/static/media/greyFilterIcon.addaac64.svg"
                          alt=""
                        />
                        Deposit to
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        {/* Table Section start  */}
        {/* Fliter model start  */}
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
              <div className="modal-header"></div>
              <div className="modal-body">
                <div className="container">
                  <div className="row">
                    <h1 style={{ fontSize: 25 }}>Transfer Amount Column</h1>
                    <p style={{ fontWeight: 600 }}>
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
                    <div className="d-flex justify-content-center ">
                      <label htmlFor="" className="mt-1 mx-1">
                        Between
                      </label>
                      <input
                        type="text"
                        className="mt-1 mx-1 w-50"
                        placeholder="Low"
                      />
                      <label htmlFor="" className="mt-1 mx-1">
                        to
                      </label>
                      <input
                        type="text"
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
        {/* Fliter model start  */}
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
                        className="btn btn-outline-primary border-0  shadow "
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
      </>



    </>
  )
}

export default Deposit