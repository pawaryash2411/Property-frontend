import React from 'react'

const View_vhange = () => {
  return (
  <>
  <div className="container">
  <div className="row">
    <div className="col-md-12 col-sm-12 col-12">
      <div className="float-end mt-5">
        <button
          type="button"
          className="btn btn-lg shadow border-4 w-100"
          style={{ fontWeight: 600 }}
        >
          Add Rule
        </button>
      </div>
    </div>
    <div className="table-responsive mt-4">
      <table className="table">
        <thead>
          <tr style={{ whiteSpace: "nowrap" }}>
            <th scope="col" className="text-secondary">
              Address
            </th>
            <th scope="col" className="text-secondary">
              Unit
            </th>
            <th scope="col" className="text-secondary">
              Grace Period
            </th>
            <th scope="col" className="text-secondary">
              First Late Fee
            </th>
            <th scope="col" className="text-secondary">
              Rec Late Fee
            </th>
            <th scope="col" className="text-secondary">
              Max Late Fee
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ whiteSpace: "nowrap" }}>
            <td>1 BiggerPockets Drive</td>
            <td>main</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
            <td>--</td>
          </tr>
          <tr>
            <td>1 Main Street</td>
            <td>1A</td>
            <td>5 days</td>
            <td>$10</td>
            <td>$5</td>
            <td>25%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

  
  </>
  )
}

export default View_vhange