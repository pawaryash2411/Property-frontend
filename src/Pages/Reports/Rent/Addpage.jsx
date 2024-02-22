import React from 'react'

const Addpage = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="my-3">
              <button type="button" className="btn btn-outline-info float-end  text-secondary" >
                Save
              </button>
            </div>
            <div className="col-md-2 mx-auto shadow  rounded-3  text-info py-5" style={{ height: "280px" }} >
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
            </div>
            <div className="col-md-9 mx-auto  shadow rounded-3">
              <div className='p-2 mt-3'>
                {/* <div className="row">
                  <div className="col-md-6">
                    <p style={{ whiteSpace: "nowrap" }} className="mx-1">
                      Days rent is late:&nbsp;
                    </p>
                    <div className="input-group input-group-sm mb-3">
                      <input
                        type="text"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                  <label htmlFor=""></label>
                    <select className="form-select form-select-sm text-info mx-1">
                      <option selected="">Days</option>
                      <option value={1}>One</option>
                    </select>
                  </div>
                </div> */}
                <div className="d-flex justify-content-between mb-1">
                  <p style={{ whiteSpace: "nowrap" }} className="mx-1">
                    Days rent is late:&nbsp;
                  </p>
                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <select className="form-select form-select-sm text-info mx-1">
                    <option selected="">Days</option>
                    <option value={1}>One</option>
                  </select>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={{ whiteSpace: "nowrap" }} className="mx-1">
                    Late Fee(1st time):
                  </p>
                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <select className="form-select form-select-sm  text-info mx-1">
                    <option selected="">$</option>
                    <option value={1}>One</option>
                  </select>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={{ whiteSpace: "nowrap" }} className="mx-1">
                    Late Fee(recurring):
                  </p>
                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <select
                    className="form-select form-select-sm  text-info mx-1"
                    aria-label="Large select example"
                  >
                    <option selected="">$</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={{ whiteSpace: "nowrap" }} className="mx-1">
                    every:
                  </p>
                  <div className="input-group input-group-sm mx-1">
                    {/* <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"> */}
                  </div>
                  <select
                    className="form-select form-select-sm  text-info mx-1"
                    aria-label="Large select example"
                  >
                    <option selected="">Day</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={{ whiteSpace: "nowrap" }} className="mx-1">
                    Max Late Fee:
                  </p>
                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <select
                    className="form-select form-select-sm  text-info mx-1"
                    aria-label="Large select example"
                  >
                    <option selected="">%</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={{ whiteSpace: "nowrap" }} className="mx-1">
                    Apply for:
                  </p>
                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <select
                    className="form-select form-select-sm  text-info mx-1"
                    aria-label="Large select example"
                  >
                    <option selected="">Rental Income</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div className="d-flex justify-content-between">
                  <p style={{ whiteSpace: "nowrap" }} className="mx-1">
                    Save as:
                  </p>
                  <div className="input-group input-group-sm mb-3">
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                  <select
                    className="form-select form-select-sm text-info mx-1 "
                    aria-label="Large select example"
                  >
                    <option selected="">Add to existing</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
                <div>
                  <p>Summary for all properties (all units)</p>
                  <p>
                    First late free 10 dollar amount will be applied 5 days after rent
                    is due.
                  </p>
                  <p>
                    After that, an additional 5 dollar amount will be applied each
                    following day.
                  </p>
                  <div className="input-group input-group-sm mb-3">
                    <p>Sample charge amount:- &nbsp;</p>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                &gt;
                <table className="table">
                  <thead>
                    <tr>
                      <td scope="col" style={{ whiteSpace: "nowrap" }}>
                        Days Late
                      </td>
                      <td scope="col" style={{ whiteSpace: "nowrap" }}>
                        Late Fee Applied This Day
                      </td>
                      <td scope="col" style={{ whiteSpace: "nowrap" }}>
                        Total Late Fee
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">0</th>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">1</th>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>$100</td>
                      <td>$50</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>$70</td>
                      <td>$20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Addpage