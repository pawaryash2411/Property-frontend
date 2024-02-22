import React from 'react'

const ViewRentRoll = () => {
    return (
        <>

            <>
                <div className="container-fluid" style={{ margin: 0, padding: 0 }}>
                    <div
                        className=" text-light"
                        style={{ height: 200, backgroundColor: "#1993cf" }}
                    >
                        <h1 className="text-center pt-5">Rent Roll</h1>
                        <h5 className="text-center">
                            View high-level details about your properties to help with your PnL
                            statements
                        </h5>
                    </div>
                </div>
                <div
                    className="container my-5 bg-light"
                    style={{ borderRadius: "30px 30px" }}
                >
                    <div className="row">
                        <div className="col-md-6 mt-5">
                            <h2 className="d-flex">Properties</h2>
                        </div>
                        <div className="col-md-6 mt-5">
                            <div className="dropdown  float-end ">
                                <button
                                    className="btn btn-light btn-lg dropdown-toggle "
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Export data
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            CSV(Excel)
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            PDF
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-md-12 mb-5">
                            <table className="table table-light table-hover table-striped">
                                <thead>
                                    <tr className="text-secondary ">
                                        <th className="py-3">ADDRESS</th>
                                        <th className="py-3">UNIT</th>
                                        <th className="py-3">TENANT</th>
                                        <th className="py-3">BEDS/BATH</th>
                                        <th className="py-3">SQ. FT.</th>
                                        <th className="py-3">MONTHLY RENT</th>
                                        <th className="py-3">SECURITY DEPOSIT</th>
                                        <th className="py-3">LEASE START</th>
                                        <th className="py-3">LEASE END</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3">1 Main Street</td>
                                        <td className="py-3">1A</td>
                                        <td className="py-3">Test Tenant</td>
                                        <td className="py-3">3/1</td>
                                        <td className="py-3">N/A</td>
                                        <td className="py-3">$1,500.00</td>
                                        <td className="py-3">$0.00</td>
                                        <td className="py-3">01/01/2023</td>
                                        <td className="py-3">12/31/2023</td>
                                    </tr>
                                    <tr>
                                        <td>1 Main Street</td>
                                        <td>1A</td>
                                        <td>Test Tenant</td>
                                        <td>3/1</td>
                                        <td>N/A</td>
                                        <td>$1,500.00</td>
                                        <td>$0.00</td>
                                        <td>01/01/2023</td>
                                        <td>12/31/2023</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>

        </>
    )
}

export default ViewRentRoll