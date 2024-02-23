import React from 'react'

const Task = () => {
    return (
        <>
            <div className="container">
                <div className="row ">
                    <div
                        className="col-md-6 shadow mx-auto mt-5 rounded-3"
                        style={{ backgroundColor: "rgb(250, 250, 250)" }}
                    >
                        <h1 className="text-center my-2" style={{
                            color: "#414141",
                            borderBottom: "0 solid #3274ba",
                            fontWeight: 700,
                            fontSize: 25
                        }} > Add New Task
                        </h1>
                        <div className="row">
                            <div className="col-md-6">
                                <form>
                                    <div className="mb-3 py-2 mx-1">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            style={{ fontWeight: 600 }}
                                            className="form-label"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            placeholder="Enter Your accordion Email"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3 py-2 mx-1">
                                    <label className="mx-1" style={{ fontWeight: 600 }}>
                                        Book to:
                                    </label>
                                    <select className="form-select form-select-md mt-2">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="mb-3  mx-1">
                                    <label htmlFor="" className="mx-1 py-2" style={{ fontWeight: 600 }}>
                                        Details
                                    </label>
                                    <textarea
                                        id="w3review"
                                        className="form-control"
                                        name="w3review"
                                        rows={6}
                                        cols={40}
                                        placeholder="Leave a comment here"
                                        i=""
                                        defaultValue={"                                "}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 mb-3">
                                <div className="mb-3  mx-1">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        style={{ fontWeight: 600 }}
                                        className="form-label mx-1 mt-1 py-1"
                                    >
                                        Date
                                    </label>
                                    <input
                                        type="datetime-local"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        placeholder="Enter Your accordion Email"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="mb-3 py-2 mx-1">
                                    <label className="mx-1" style={{ fontWeight: 600 }}>
                                        Status:
                                    </label>
                                    <select className="form-select form-select-md mt-2">
                                        <option>Not Complete</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task