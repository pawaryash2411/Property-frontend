import { useFormik } from 'formik'
import { NavLink } from 'react-router-dom';
// import {CreateRequestSchema} from '../../Schema/Maintenance/CreateRequestSchema'

let CreateRequest = () => {



    const myStyle = {
        textDecoration: "none",
        fontSize: "18px",
        // textAlign : "center"
    }

    const font = {
        fontSize: "18px"
    }




    //     let {handleChange, handleSubmit, errors, touched} = useFormik({
    //         validationSchema : CreateRequestSchema,
    //         initialValues : {
    //             address : "",
    //             unit : ""
    //         },
    //         onSubmit : (data)=>{
    //             console.log(data)
    //         }
    //     })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="py-4">
                            <div className="mx-auto ">
                                <ul className="nav nav-underline" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link text-dark active id="
                                            home-tab=""
                                            data-bs-toggle="tab"
                                            data-bs-target="#home-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="home-tab-pane"
                                            aria-selected="true"
                                        >
                                            Select Unit
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className="nav-link text-dark"
                                            id="profile-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-tab-pane"
                                            type="button"
                                            role="tab"
                                            aria-controls="profile-tab-pane"
                                            aria-selected="false"
                                        >
                                            Enter Details{" "}
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active py-3"
                                    id="home-tab-pane"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    tabIndex={0}
                                >
                                    <div className="container">
                                        <div className="row row-cols-1">
                                            <div className="col px-0">
                                                <div className="card mb-4 rounded-3">
                                                    <div className="card-body">
                                                        <div
                                                            href="#"
                                                            className="d-flex gap-3"
                                                            aria-current="true"
                                                        >
                                                            <div className="container">
                                                                <div className="row">
                                                                    <h4 style={{ fontWeight: 500 }}>
                                                                        Add new maintenance request
                                                                    </h4>
                                                                    <p>
                                                                        Select the property and unit for which you would
                                                                        like to create new maintenance request.
                                                                    </p>
                                                                    <div className="col-md-6 ">
                                                                        <form>
                                                                            <div className="mb-3">
                                                                                <label
                                                                                    htmlFor="exampleInputEmail1"
                                                                                    className="form-label"
                                                                                >
                                                                                    <b> Address</b>
                                                                                </label>
                                                                                <select
                                                                                    className="form-select"
                                                                                    aria-label="Default select example"
                                                                                >
                                                                                    <option >1 Main Street</option>
                                                                                    <option value={1}>
                                                                                        1 Bigger Pockect Drive
                                                                                    </option>
                                                                                    <option value={2}>7 Marne St</option>
                                                                                    <option value={3}>Three</option>
                                                                                </select>
                                                                                <div id="emailHelp" className="form-text">
                                                                                    We'll never share your email with anyone
                                                                                    else.
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div className="col-md-6 ">
                                                                        <form>
                                                                            <div className="mb-3">
                                                                                <label
                                                                                    htmlFor="exampleInputEmail1"
                                                                                    className="form-label mx-1"
                                                                                >
                                                                                    <b>Unit</b>{" "}
                                                                                </label>
                                                                                <select
                                                                                    className="form-select"
                                                                                    aria-label="Default select example"
                                                                                >
                                                                                    <option >Select Unit</option>
                                                                                    <option value={1}>Main</option>
                                                                                    <option value={2}>Two</option>
                                                                                    <option value={3}>Three</option>
                                                                                </select>
                                                                                <div id="emailHelp" className="form-text">
                                                                                    We'll never share your email with anyone
                                                                                    else.
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                    <div className="d-flex justify-content-end mt-5">
                                                                        <button
                                                                            type="submit"
                                                                            className="btn btn-info text-light  w-25 mb-4"
                                                                            style={{
                                                                                minHeight: 47,
                                                                                boxShadow: "0 0 4px rgba(0,0,0,.25)",
                                                                                background: "#55adea",
                                                                                borderRadius: 5,
                                                                                border: 0,
                                                                                fontStyle: "normal",
                                                                                fontWeight: 600,
                                                                                fontSize: "1rem",
                                                                                color: "#fff",
                                                                                textTransform: "none"
                                                                            }}
                                                                        >
                                                                            Continue
                                                                        </button>
                                                                    </div>
                                                                    <div>
                                                                        <h6
                                                                            className="mb-4 "
                                                                            style={{ visibility: "hidden" }}
                                                                        >
                                                                            Lorem delectus iste, quaerat molestias quos cum
                                                                            deserunt nihil? Illo, cumque?
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="tab-pane fade py-3"
                                id="profile-tab-pane"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                                tabIndex={0}
                            >
                                <div className="container">
                                    <div className="row row-cols-1">
                                        <div className="col px-0">
                                            <div className="card mb-4 rounded-3">
                                                <div className="card-body">

                                                    <h3 style={{ fontSize: 25, fontWeight: 400 }}>
                                                        Provide request details
                                                    </h3>
                                                    <form>
                                                        <div className="mb-3">
                                                            <label
                                                                htmlFor="exampleInputEmail1"
                                                                className="form-label"
                                                            >
                                                                Description *
                                                            </label>
                                                            <input
                                                                type="email"
                                                                placeholder="ex. Broken Sidewalk"
                                                                className="form-control"
                                                                id="exampleInputEmail1"
                                                                aria-describedby="emailHelp"
                                                            />
                                                            <div id="emailHelp" className="form-text">
                                                                We'll never share your email with anyone else.
                                                            </div>
                                                        </div>
                                                    </form>
                                                    <div className="col-md-6">
                                                        <label
                                                            htmlFor=""
                                                            style={{ fontWeight: 600 }}
                                                            className="mt-2 mb-2 mx-2"
                                                        >
                                                            Priority
                                                        </label>
                                                        <select
                                                            className="form-select form-select-lg mb-3 mx-1 "
                                                            aria-label="Large select example"
                                                        >
                                                            <option >Medium</option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label
                                                            htmlFor=""
                                                            style={{ fontWeight: 600 }}
                                                            className="mt-2 mb-2 mx-2"
                                                        >
                                                            Category
                                                        </label>
                                                        <select
                                                            className="form-select form-select-lg mb-3 mx-1"
                                                            aria-label="Large select example"
                                                        >
                                                            <option >Priority</option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>
                                                    </div>
                                                    <form action="">
                                                        <select
                                                            className="form-select form-select-lg mb-3 mx-1 "
                                                            aria-label="Large select example"
                                                        >
                                                            <option >
                                                                Latchel Vendor Access Instructions *
                                                            </option>
                                                            <option value={1}>One</option>
                                                            <option value={2}>Two</option>
                                                            <option value={3}>Three</option>
                                                        </select>
                                                    </form>
                                                    <div className="mb-5">
                                                        <label
                                                            htmlFor="floatingTextarea2 mx-5"
                                                            style={{ fontWeight: 600 }}
                                                        >
                                                            Note
                                                        </label>
                                                        <textarea
                                                            className="form-control"
                                                            placeholder="Leave a comment here"
                                                            id="floatingTextarea2"
                                                            style={{ height: 100 }}
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <div className="d-flex justify-content-end mt-5">
                                                        <button
                                                            type="submit"
                                                            className="btn btn-info text-light  w-25 mb-4"
                                                            style={{
                                                                minHeight: 47,
                                                                boxShadow: "0 0 4px rgba(0,0,0,.25)",
                                                                background: "#55adea",
                                                                borderRadius: 5,
                                                                border: 0,
                                                                fontStyle: "normal",
                                                                fontWeight: 600,
                                                                fontSize: "1rem",
                                                                color: "#fff",
                                                                textTransform: "none"
                                                            }}
                                                        >
                                                            Save &amp; Continue
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>
        </>
    )
}

export default CreateRequest;