import React from 'react'

const Addpage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row mt-5">
            <div
              className="col-md-2 col-lg-2 col-sm-2   border-1 border-info text-info py-5"
              style={{ height: 300 }}
            >
              <select
                className="form-select form-select-md mb-3 text-info"
                aria-label="Large select example"
              >
                <option selected="">All Properties</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <select
                className="form-select form-select-md mb-3 text-info"
                aria-label="Large select example"
              >
                <option selected="">All Units</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <p>Late Fee Rule</p>
              <div className="container">
                <div className="row justify-content-center mt-5">
                  <div className="col-6 text-center">
                    <button
                      type="button"
                      className="btn btn-outline-info  text-info"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 col-sm-5">
              <div className="row mb-3">
                <div className="col-4">
                  <p className="my-auto">Days rent is late:</p>
                </div>
                <div className="col-4">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <select className="form-select form-select-sm text-info">
                    <option selected="">Days</option>
                    <option value={1}>One</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <p className="my-auto">Late Fee(1st time):</p>
                </div>
                <div className="col-4">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <select className="form-select form-select-sm text-info">
                    <option selected="">$</option>
                    <option value={1}>One</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <p className="my-auto">Late Fee(recurring):</p>
                </div>
                <div className="col-4">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <select className="form-select form-select-sm text-info">
                    <option selected="">$</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <p className="my-auto">every:</p>
                </div>
                <div className="col-4">
                  <div className="input-group input-group-sm">
                    <input
                      type="number"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <select
                    className="form-select form-select-sm text-info"
                    style={{ width: "100%" }}
                  >
                    <option selected="">Day</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <p className="my-auto">Max Late Fee:</p>
                </div>
                <div className="col-4">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <select className="form-select form-select-sm text-info">
                    <option selected="">%</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <p className="my-auto">Apply for:</p>
                </div>
                <div className="col-4">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <select className="form-select form-select-sm text-info">
                    <option selected="">Rental Income</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-4">
                  <p className="my-auto">Save as:</p>
                </div>
                <div className="col-4">
                  <div className="input-group input-group-sm">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-4">
                  <select className="form-select form-select-sm text-info">
                    <option selected="">Add to existing</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
              <div>
                <p>Summary for all properties (all units)</p>
                <p>First late fee: $10 will be applied 5 days after rent is due.</p>
                <p>
                  After that, an additional $5 will be applied each following day.
                </p>
                <div className="input-group input-group-sm mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Sample charge amount:</span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </div>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Days Late</th>
                    <th scope="col">Late Fee Applied This Day</th>
                    <th scope="col">Total Late Fee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>$100</td>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>$70</td>
                    <td>$20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Addpage