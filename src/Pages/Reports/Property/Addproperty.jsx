import React from "react";

const Addproperty = () => {
  return (
    <>
      <div className="container">
        <div
          className="   p-3 shadow-sm rounded"
          style={{ backgroundColor: "rgb(114, 150, 218)" }}
        >
          <div className="row">
            <div className="col-md-12">
              <span
                className="   p-2 rounded-circle  "
                style={{ color: "white", backgroundColor: "#0072c0" }}
              >
                <i class="fa-solid  ms-1 fa-house"></i>{" "}
              </span>
              <span style={{ fontSize: "larger", color: "white" }}>
                <b className="ms-2">Property Info</b>
              </span>
            </div>
          </div>
        </div>
        <div
          className="container  p-3  mt-2 shadow-sm rounded"
          style={{ backgroundColor: "#ffff" }}
        >
          <div className="">
            <div className="d-flex ">
              <div className="pt-3">
                <span
                  className="   p-2 rounded-circle  "
                  style={{ color: "white", backgroundColor: "#0072c0" }}
                >
                  <i class="fa-solid   fa-house"></i>{" "}
                </span>{" "}
              </div>
              <div>
                <p className="ms-2 p-0 m-0 ">
                  <b style={{ color: "rgb(30, 95, 192)" }}>
                    Enter property address and the number of units
                  </b>
                </p>
                <p className="p-0 m-0 ms-2" style={{ fontSize:"13px"}}>
                  For single-family properties, enter 1 under # of Units:
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  Address<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Address"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  City<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="City"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  State<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="State"
                />
              </div>
            </div>
          </div>
          <div className="row  ">
            <div className="col-md-4">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  Zip Code<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  # Of Units<span style={{ color: "rgb(33, 30, 49)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Units"
                />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="">
              <div className="d-flex ">
                <div className="pt-3 ">
                  <span
                    className="  ps-2 p-2 rounded-circle  "
                    style={{ color: "white", backgroundColor: "#0072c0" }}
                  >
                    <i class="fa-solid fa-gas-pump"></i>{" "}
                  </span>{" "}
                </div>
                <div>
                  <p className="ms-2 p-0 m-0 ">
                    <b style={{ color: "rgb(30, 95, 192)" }}>
                      Enter the details for each unit
                    </b>
                  </p>
                  <p className="p-0 m-0 ms-2" style={{ fontSize:"13px"}}>
                    Please note: Unit Name/Number cannot be changed later
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3 ">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  Unit Name/Number{" "}
                  <span style={{ color: "rgb(0, 81, 255)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Average Per Ltr "
                  className="form-control"
                  placeholder="Number"
                />
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  # of Bedrooms<span style={{ color: "rgb(4, 0, 255)" }}>*</span>
                </label>
                <input
                  type="text"
                  name="Purchase Year"
                  className="form-control"
                  placeholder={0}
                />
              </div>
            </div>
            <div className="col-md-2 ">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  # of Bathrooms
                  <span style={{ color: "rgb(38, 0, 255)" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="Type OF Vehicle"
                  className="form-control"
                  placeholder={0}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  Square Feet
                  <span style={{ color: "rgb(38, 0, 255)" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="Capacity "
                  className="form-control"
                  placeholder={0}
                />
              </div>
            </div>
            <div className="col-md-3 ">
              <div className="mb-2">
                <label htmlFor="" className="form-label">
                  Notes
                  <span style={{ color: "rgb(0, 81, 255)" }}>*</span>{" "}
                </label>
                <input
                  type="text"
                  name="Capacity "
                  className="form-control"
                  placeholder="-"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12   ">
              <div className="  float-end     ">
                <button
                  type="button"
                  className="btn border-0 rounded-1  mx-4 text-light "
                  style={{ backgroundColor: "#004ec2" }}
                >
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addproperty;
