import React from 'react'
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <>

            <div className="container">
                <aside>
                    <div className="top">
                        <div className="logo">
                            <h2>
                                ADI<span className="danger">AOT</span>
                            </h2>
                        </div>
                        <div className="close" id="close-btn">
                            <i className="bx bx-x" />
                        </div>
                    </div>
                </aside>

                <main>
                    <h1>Dashboard</h1>
                    <div className="date">
                        <input type="date" />
                    </div>
                    <div className="insights">
                        <div className="sales">
                            <i className="bx bx-bar-chart-alt" />
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Sales</h3>
                                    <h1>$40,023</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx={38} cy={38} r={36} />
                                    </svg>
                                    <div className="number">
                                        <p>81%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>

                        <div className="income">
                            <i className="bx bx-line-chart" />
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Income</h3>
                                    <h1>$25,023</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx={38} cy={38} r={36} />
                                    </svg>
                                    <div className="number">
                                        <p>45%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>

                        <div className="expense">
                            <i className="bx bx-line-chart-down" />
                            <div className="middle">
                                <div className="left">
                                    <h3>Total Expense</h3>
                                    <h1>$15,020</h1>
                                </div>
                                <div className="progress">
                                    <svg>
                                        <circle cx={38} cy={38} r={36} />
                                    </svg>
                                    <div className="number">
                                        <p>21%</p>
                                    </div>
                                </div>
                            </div>
                            <small className="text-muted">Last 24 Hours</small>
                        </div>
                    </div>
                    <div className="recent-order">
                        <h2>Recent Orders</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product number</th>
                                    <th>Payment</th>
                                    <th>Status</th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                {/*  <tr>
                  <td>Playstation PS5</td>
                  <td>84332</td>
                  <td>Due</td>
                  <td class="warning">Pending</td>
                  <td class="primary">Details</td>
                  </tr>
              */}
                            </tbody>
                        </table>
                        <a href="#">Show All</a>
                    </div>
                </main>

                <div className="right">
                    <div className="top">
                        <button id="menu-btn">
                            <i className="bx bx-menu" />
                        </button>
                        <div className="theme-toggle">
                            <i className="bx bx-sun active" />
                            <i className="bx bx-moon" />
                        </div>
                        <div className="profile">
                            <div className="info">
                                <p>
                                    Hey, <b>Ayo</b>
                                </p>
                                <small className="text-muted">Admin</small>
                            </div>
                            <div className="profile-photo">
                                <img src="./Assets/images/profile-1.jpg" alt="Oluwadare Taye Ayo" />
                            </div>
                        </div>
                    </div>

                    <div className="recent-updates">
                        <h2>Recent Updates</h2>
                        <div className="updates">
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="./Assets/images/ADii's Devs logo.png" alt="A.O.T" />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>A.O.T Brand</b> just received an order to work on a dashboard
                                        for SHAMA
                                    </p>
                                    <small className="text-muted">3 Minutes ago</small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="./Assets/images/profile-1.jpg" alt="A.O.T" />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>Oluwadare Taye Ayo</b> just received an order to collaborate on
                                        a dashboard with AOT Brand
                                    </p>
                                    <small className="text-muted">16 Minutes ago</small>
                                </div>
                            </div>
                            <div className="update">
                                <div className="profile-photo">
                                    <img src="./Assets/images/pic-4.png" />
                                </div>
                                <div className="message">
                                    <p>
                                        <b>Tyler</b> just received an order for Zephyron GPS, Drone
                                    </p>
                                    <small className="text-muted">18 Minutes ago</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sales-analytics">
                        <h2>Sales Analytics</h2>
                        <div className="item online">
                            <i className="bx bx-cart-alt" />
                            <div className="right">
                                <div className="info">
                                    <h3>ONLINE ORDERS</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>
                                <h5 className="success">+38%</h5>
                                <h3>2345</h3>
                            </div>
                        </div>
                        <div className="item offline">
                            <i className="bx bx-store" />
                            <div className="right">
                                <div className="info">
                                    <h3>OFFLINE ORDERS</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>
                                <h5 className="danger">-17%</h5>
                                <h3>1100</h3>
                            </div>
                        </div>
                        <div className="item customers">
                            <i className="bx bx-male-female" />
                            <div className="right">
                                <div className="info">
                                    <h3>NEW CUSTOMERS</h3>
                                    <small className="text-muted">Last 24 Hours</small>
                                </div>
                                <h5 className="success">+25%</h5>
                                <h3>897</h3>
                            </div>
                        </div>
                        <div className="item add-product">
                            <div>
                                <i className="bx-add" />
                                <a href="#">
                                    <h3>Add Product</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Dashboard