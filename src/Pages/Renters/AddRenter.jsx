import React from 'react'

const AddRenter = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-5 border ">
                    <div className=" my-4">
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
        </>
    )
}

export default AddRenter;