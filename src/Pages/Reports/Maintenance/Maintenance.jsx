import React from 'react'

const Maintenance = () => {
    return (

        <>
            {/* Add button modal start */}
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <ul class="nav nav-pills mb-3  m-3  " id="pills-tab" role="tablist">
                            <li class="nav-item  me-3 " role="presentation">
                                <a
                                    class="nav-link active"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane"

                                    role="tab"
                                    aria-controls="home-tab-pane"
                                    aria-selected="true"
                                >
                                    Select unit
                                </a>
                            </li>
                            <li class="nav-item " role="presentation">
                                <button
                                    class="nav-link"
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile-tab-pane"
                                    aria-selected="false"
                                >
                                    Enter details
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div
                                class="tab-pane fade show active"
                                id="home-tab-pane"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                                tabindex="0"
                            >
                                <h3 className="m-3">Add new maintenance request</h3>

                                <p className="m-3">
                                    Select the property and unit for which you would like to
                                    create new maintenance request.
                                </p>

                                <div className="row m-3">
                                    <div class="col-md-6">
                                        <label for="disabledSelect" class="form-label">
                                            Address
                                        </label>
                                        <select id="disabledSelect" class="form-select">
                                            <option>1 Main Street</option>
                                            <option>1 BiggerPockets Drive</option>
                                            <option>7 Marne St</option>
                                            <option>431 Main Street</option>
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="disabledSelect" class="form-label">
                                            Unit
                                        </label>
                                        <select id="disabledSelect" class="form-select">
                                            <option>Select Unit</option>
                                            <option>1A</option>
                                            <option>1B</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">
                                        Continue
                                    </button>
                                </div>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="profile-tab-pane"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                                tabindex="0"
                            >
                                <h3 className="m-3">Provide request details</h3>

                                <div class="mb-3 m-3">
                                    <label for="exampleInputEmail1" class="form-label">
                                        Description *
                                    </label>
                                    <input
                                        placeholder="ex. Broken sidewalk"
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>

                                <div className="row m-2">
                                    <div class="col-md-6">
                                        <label for="disabledSelect" class="form-label">
                                            Priority
                                        </label>
                                        <select id="disabledSelect" class="form-select">
                                            <option>Set Priority</option>
                                            <option>Low</option>
                                            <option>Medium</option>
                                            <option>High</option>
                                        </select>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="disabledSelect" class="form-label">
                                            Category
                                        </label>
                                        <select id="disabledSelect" class="form-select">
                                            <option>Set Category</option>
                                            <option>Appliance</option>
                                            <option>Electricity</option>
                                            <option>Heat/AC</option>
                                            <option>Property</option>
                                            <option>Security</option>
                                            <option>Sidewalk/Parking</option>
                                            <option>Water</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="mb-3 m-3 ">
                                    <label for="disabledSelect" class="form-label">
                                        Latchel Vendor Access Instructions *
                                    </label>
                                    <select id="disabledSelect" class="form-select">
                                        <option>Select Access Instructions</option>
                                        <option>
                                            Landlord will meet the vendor at the property
                                        </option>
                                        <option>Entering the home is not needed</option>
                                        <option>Vendor will contact: Test Tenant</option>
                                        <option>
                                            Allow vendor access with specific instructions
                                        </option>
                                    </select>
                                </div>

                                <div class="mb-3 m-3 ">
                                    <label for="exampleInputEmail1" class="form-label">
                                        Notes
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        style={{ height: "100px" }}
                                    />
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">
                                        Save & Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add button modal end  */}


            <div className="container-fluid my-5 ">
                <div className="row       ">
                    <div className="col-md-5 mb-2">
                        <div className="bg-info py-2 rounded  text-center  shadow  text-light ">
                            <h5 className="p-0 m-0">2</h5>
                            <p className="p-0 m-0">
                                {" "}
                                <b> Pending Maintenance Requests</b>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-5 mb-2 ">
                        <div className="bg-secondary bg-opacity-50 py-2 rounded text-center shadow text-light ">
                            <h5 className="p-0 m-0">2</h5>
                            <p className="p-0 m-0">Maintenance Completed</p>
                        </div>
                    </div>

                    <div className="col-md-2 mb-2  ">
                        <div className="bg-white bg-opacity-50 py-2 mt-2 rounded text-center shadow" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" >
                            <h6 > Add </h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid border my-5">
                <div className="row my-3 ">
                    <div className="col-md-4 ">
                        <h4>Pending Maintenance Requests</h4>
                    </div>

                    <div className="col-md-8">
                        <div className="float-end ">
                            <button type="button" class="btn btn-white shadow  me-2 mt-2 ">
                                <i class="fa-sharp fa-solid fa-file me-1 "></i>Export Data
                            </button>
                            <button type="button" class="btn btn-white shadow  me-2 mt-2 ">
                                <i class="fa-solid fa-ban me-1"></i>Clear All Filters
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-responsive">
                            <table class="table table-hover">
                                <thead style={{ whiteSpace: "nowrap" }}>
                                    <tr className="">
                                        <th scope="col" className='fw-medium' >Address</th>
                                        <th scope="col" className='fw-medium' >Description</th>
                                        <th scope="col" className='fw-medium' >Date</th>
                                    </tr>
                                </thead>
                                <tbody style={{ whiteSpace: "nowrap" }} className="">
                                    <tr>
                                        <td>  1 Main Street 1A</td>
                                        <td>
                                            Living Room Light Broken The living room light fixture is broken and needs to be replaced
                                        </td>
                                        <td>
                                            May 20
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1 Main Street 2B </td>
                                        <td>
                                            leaky faucet my faucet is leaking</td>
                                        <td>Dec 18</td>
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

export default Maintenance