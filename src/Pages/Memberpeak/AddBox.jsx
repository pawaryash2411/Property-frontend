import React from 'react'
import "./AddBox.css";

// import AddBox from "./";
const AddBox = () => {
  return (
    <>
      <div className="container-fluid " style={{ background: "rgb(85, 173, 234)" }}>
        <div className="row p-3">
          <h2 className="text-light   my-3 " style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            Featured Offers 🔥
          </h2>
          <div className="col-md-4 col-sm-6 col-12 mb-3">
            <div className="card border-0 shadow mb-4" style={{ height: 470 }}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p style={{ fontSize: 18, fontWeight: 600 }}>REI HUB</p>
                  <img
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1634760825/member%20perks%20page%20logos/reiHubLogo_nolx6p.png"
                    className="img-fluid w-25"
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      maxWidth: 200,
                      height: 50
                    }}
                    alt=""
                  />
                </div>
                <div className="img mt-4" style={{ height: 200 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1706031104/RentRedi-Rent-Reporting-Feature-Boosts-On-Time-Rent-Payments-and-Tenant-Credit-Scores_bi2qpe.jpg"
                    className="img-fluid rounded-2"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="mt-1 set_text" style={{ fontWeight: 600 }}>
                    Accounting Software For Rental Property
                  </h5>
                  <div style={{ fontSize: 15 }} className="set_text">
                    Automatically sync all your properties for easier bookkeeping ?
                  </div>
                </div>
                <div className="btn w-100 mt-5">
                  <button
                    style={{
                      backgroundColor: "#0172c0",
                      color: "white",
                      fontWeight: 600
                    }}
                    className="btn rounded-4 w-100"
                  >
                    Add Accounting to RentRedi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-3">
            <div className="card border-0 shadow mb-4" style={{ height: 470 }}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p style={{ fontSize: 18, fontWeight: 600 }}>Credit Reporting</p>
                  <img
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1659392260/rentredi-logo-512x512-1.png"
                    className="img-fluid w-25"
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      maxWidth: 200,
                      height: 50
                    }}
                    alt=""
                  />
                </div>
                <div className="img mt-4" style={{ height: 200 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1706314167/iStock-1212365729_mkzuwg.webp"
                    className="img-fluid rounded-2"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="mt-1 set_text" style={{ fontWeight: 600 }}>
                    Reward On-Time Rent Payments
                  </h5>
                  <div style={{ fontSize: 15 }} className="set_text">
                    Did you know 7 in 10 renters are more likely to make on-time rent
                    payments if landlords report payments to a credit bureau? Increase
                    on-time payments by enabling tenant rent reporting
                  </div>
                </div>
                <div className="btn w-100 mt-5">
                  <button
                    style={{
                      backgroundColor: "#0172c0",
                      color: "white",
                      fontWeight: 600
                    }}
                    className="btn rounded-4 w-100"
                  >
                    Add Accounting to RentRedi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-3">
            <div className="card border-0 shadow mb-4" style={{ height: 470 }}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p style={{ fontSize: 18, fontWeight: 600 }}>1-800-GOT-JUNK?</p>
                  <img
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1705555658/1-800-GOT-JUNK___RGBNo_tagline_1_f2jvls.png"
                    className="img-fluid w-25"
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      maxWidth: 200,
                      height: 50
                    }}
                    alt=""
                  />
                </div>
                <div className="img mt-4" style={{ height: 200 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1705554955/1-800-junk-removal_kjy4mt.jpg"
                    className="img-fluid rounded-2"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="mt-1 set_text" style={{ fontWeight: 600 }}>
                    Accounting Software For Rental Property
                  </h5>
                  <div style={{ fontSize: 15 }} className="set_text">
                    Automatically sync all your properties for easier bookkeeping ?
                  </div>
                </div>
                <div className="btn w-100 mt-5">
                  <button
                    style={{
                      backgroundColor: "#0172c0",
                      color: "white",
                      fontWeight: 600
                    }}
                    className="btn rounded-4 w-100"
                  >
                    Add Accounting to RentRedi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-3">
            <div className="card border-0 shadow mb-4" style={{ height: 470 }}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p style={{ fontSize: 18, fontWeight: 600 }}>Latchel</p>
                  <img
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1612029255/member%20perks%20page%20logos/Latchel_Logo-Web-1_mzklbj.webp"
                    className="img-fluid w-25"
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      maxWidth: 200,
                      height: 50
                    }}
                    alt=""
                  />
                </div>
                <div className="img mt-4" style={{ height: 200 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1705555928/RentRedi_Graphic_1_lss6hl.png"
                    className="img-fluid rounded-2"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="mt-1 set_text" style={{ fontWeight: 600 }}>
                    Accounting Software For Rental Property
                  </h5>
                  <div style={{ fontSize: 15 }} className="set_text">
                    Automatically sync all your properties for easier bookkeeping ?
                  </div>
                </div>
                <div className="btn w-100 mt-5">
                  <button
                    style={{
                      backgroundColor: "#0172c0",
                      color: "white",
                      fontWeight: 600
                    }}
                    className="btn rounded-4 w-100"
                  >
                    Add Accounting to RentRedi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-3">
            <div className="card border-0 shadow mb-4" style={{ height: 470 }}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p style={{ fontSize: 18, fontWeight: 600 }}> BrightInvestor</p>
                  <img
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1705558871/BrightInvestor-Logo-Vibrant_cxgzmi.png"
                    className="img-fluid w-25"
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      maxWidth: 200,
                      height: 50
                    }}
                    alt=""
                  />
                </div>
                <div className="img mt-4" style={{ height: 200 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1705558730/Lifestyle_BrightInvestor_auanjk.png"
                    className="img-fluid rounded-2"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="mt-1 set_text" style={{ fontWeight: 600 }}>
                    Accounting Software For Rental Property
                  </h5>
                  <div style={{ fontSize: 15 }} className="set_text">
                    Automatically sync all your properties for easier bookkeeping ?
                  </div>
                </div>
                <div className="btn w-100 mt-5">
                  <button
                    style={{
                      backgroundColor: "#0172c0",
                      color: "white",
                      fontWeight: 600
                    }}
                    className="btn rounded-4 w-100"
                  >
                    Add Accounting to RentRedi
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-12 mb-3">
            <div className="card border-0 shadow mb-4" style={{ height: 470 }}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p style={{ fontSize: 18, fontWeight: 600 }}>Honeycomb</p>
                  <img
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1705581061/honeyCombLogo_cztk6s.png"
                    className="img-fluid w-25"
                    style={{
                      objectFit: "contain",
                      width: "auto",
                      maxWidth: 200,
                      height: 50
                    }}
                    alt=""
                  />
                </div>
                <div className="img mt-4" style={{ height: 200 }}>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://res.cloudinary.com/da6wkcnok/image/upload/v1705581216/unnamed_1_1_lkiaw5.png"
                    className="img-fluid rounded-2"
                    alt=""
                  />
                </div>
                <div>
                  <h5 className="mt-1 set_text" style={{ fontWeight: 600 }}>
                    Accounting Software For Rental Property
                  </h5>
                  <div style={{ fontSize: 15 }} className="set_text">
                    Automatically sync all your properties for easier bookkeeping ?
                  </div>
                </div>
                <div className="btn w-100 mt-5">
                  <button
                    style={{
                      backgroundColor: "#0172c0",
                      color: "white",
                      fontWeight: 600
                    }}
                    className="btn rounded-4 w-100"
                  >
                    Add Accounting to RentRedi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBox