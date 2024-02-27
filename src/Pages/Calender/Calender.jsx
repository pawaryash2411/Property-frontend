import React from 'react'

const Calender = () => {
    return (
        <>
            <div className="container my-5" style={{ minHeight: " 650px" }} >
                <div className="row">
                    <div className="col-md-8 mx-auto  shadow p-3 mb-5 rounded" style={{ "background-color": "#FBFEFA" }}>
                        <button className="btn m-3" style={{ "background-color": "#2BC8C2" }}><span className="px-4">Add</span></button>
                        <button className="btn btn-light  m-3"><span className="px-4">Cancel</span></button>
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <div className="mt-2">
                                    <label className="text-primary">Titel :</label>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <div className="mt-2">
                                    <label className="text-primary">Location :</label>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <div className="mt-2">
                                    <label className="text-primary ">All Day :</label>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <input type="checkbox" class="form-check-input me-1" id="exampleCheck1" />
                                All Day
                                <input type="checkbox" class="form-check-input ms-3" id="exampleCheck1" /> Not All Day
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <div className="mt-2">
                                    <label className="text-primary">Start Date :</label>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <div className="mt-2">
                                    <label className="text-primary">Start Time :</label>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <select className="form-select">
                                    <option>Pick a time</option>
                                    <option value={0}>12:00am</option>
                                    <option value={900000}>12:15am</option>
                                    <option value={1800000}>12:30am</option>
                                    <option value={2700000}>12:45am</option>
                                    <option value={3600000}>1:00am</option>
                                    <option value={4500000}>1:15am</option>
                                    <option value={5400000}>1:30am</option>
                                    <option value={6300000}>1:45am</option>
                                    <option value={7200000}>2:00am</option>
                                    <option value={8100000}>2:15am</option>
                                    <option value={9000000}>2:30am</option>
                                    <option value={9900000}>2:45am</option>
                                    <option value={10800000}>3:00am</option>
                                    <option value={11700000}>3:15am</option>
                                    <option value={12600000}>3:30am</option>
                                    <option value={13500000}>3:45am</option>
                                    <option value={14400000}>4:00am</option>
                                    <option value={15300000}>4:15am</option>
                                    <option value={16200000}>4:30am</option>
                                    <option value={17100000}>4:45am</option>
                                    <option value={18000000}>5:00am</option>
                                    <option value={18900000}>5:15am</option>
                                    <option value={19800000}>5:30am</option>
                                    <option value={20700000}>5:45am</option>
                                    <option value={21600000}>6:00am</option>
                                    <option value={22500000}>6:15am</option>
                                    <option value={23400000}>6:30am</option>
                                    <option value={24300000}>6:45am</option>
                                    <option value={25200000}>7:00am</option>
                                    <option value={26100000}>7:15am</option>
                                    <option value={27000000}>7:30am</option>
                                    <option value={27900000}>7:45am</option>
                                    <option value={28800000}>8:00am</option>
                                    <option value={29700000}>8:15am</option>
                                    <option value={30600000}>8:30am</option>
                                    <option value={31500000}>8:45am</option>
                                    <option value={32400000}>9:00am</option>
                                    <option value={33300000}>9:15am</option>
                                    <option value={34200000}>9:30am</option>
                                    <option value={35100000}>9:45am</option>
                                    <option value={36000000}>10:00am</option>
                                    <option value={36900000}>10:15am</option>
                                    <option value={37800000}>10:30am</option>
                                    <option value={38700000}>10:45am</option>
                                    <option value={39600000}>11:00am</option>
                                    <option value={40500000}>11:15am</option>
                                    <option value={41400000}>11:30am</option>
                                    <option value={42300000}>11:45am</option>
                                    <option value={43200000}>12:00pm</option>
                                    <option value={44100000}>12:15pm</option>
                                    <option value={45000000}>12:30pm</option>
                                    <option value={45900000}>12:45pm</option>
                                    <option value={46800000}>1:00pm</option>
                                    <option value={47700000}>1:15pm</option>
                                    <option value={48600000}>1:30pm</option>
                                    <option value={49500000}>1:45pm</option>
                                    <option value={50400000}>2:00pm</option>
                                    <option value={51300000}>2:15pm</option>
                                    <option value={52200000}>2:30pm</option>
                                    <option value={53100000}>2:45pm</option>
                                    <option value={54000000}>3:00pm</option>
                                    <option value={54900000}>3:15pm</option>
                                    <option value={55800000}>3:30pm</option>
                                    <option value={56700000}>3:45pm</option>
                                    <option value={57600000}>4:00pm</option>
                                    <option value={58500000}>4:15pm</option>
                                    <option value={59400000}>4:30pm</option>
                                    <option value={60300000}>4:45pm</option>
                                    <option value={61200000}>5:00pm</option>
                                    <option value={62100000}>5:15pm</option>
                                    <option value={63000000}>5:30pm</option>
                                    <option value={63900000}>5:45pm</option>
                                    <option value={64800000}>6:00pm</option>
                                    <option value={65700000}>6:15pm</option>
                                    <option value={66600000}>6:30pm</option>
                                    <option value={67500000}>6:45pm</option>
                                    <option value={68400000}>7:00pm</option>
                                    <option value={69300000}>7:15pm</option>
                                    <option value={70200000}>7:30pm</option>
                                    <option value={71100000}>7:45pm</option>
                                    <option value={72000000}>8:00pm</option>
                                    <option value={72900000}>8:15pm</option>
                                    <option value={73800000}>8:30pm</option>
                                    <option value={74700000}>8:45pm</option>
                                    <option value={75600000}>9:00pm</option>
                                    <option value={76500000}>9:15pm</option>
                                    <option value={77400000}>9:30pm</option>
                                    <option value={78300000}>9:45pm</option>
                                    <option value={79200000}>10:00pm</option>
                                    <option value={80100000}>10:15pm</option>
                                    <option value={81000000}>10:30pm</option>
                                    <option value={81900000}>10:45pm</option>
                                    <option value={82800000}>11:00pm</option>
                                    <option value={83700000}>11:15pm</option>
                                    <option value={84600000}>11:30pm</option>
                                    <option value={85500000}>11:45pm</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <div className="mt-2">
                                    <label className="text-primary">End Date :</label>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <div className="mt-3">
                                    <label className="text-primary">End Time :</label>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <select className="form-select mt-2">
                                    <option>Pick a time</option>
                                    <option value={0}>12:00am</option>
                                    <option value={900000}>12:15am</option>
                                    <option value={1800000}>12:30am</option>
                                    <option value={2700000}>12:45am</option>
                                    <option value={3600000}>1:00am</option>
                                    <option value={4500000}>1:15am</option>
                                    <option value={5400000}>1:30am</option>
                                    <option value={6300000}>1:45am</option>
                                    <option value={7200000}>2:00am</option>
                                    <option value={8100000}>2:15am</option>
                                    <option value={9000000}>2:30am</option>
                                    <option value={9900000}>2:45am</option>
                                    <option value={10800000}>3:00am</option>
                                    <option value={11700000}>3:15am</option>
                                    <option value={12600000}>3:30am</option>
                                    <option value={13500000}>3:45am</option>
                                    <option value={14400000}>4:00am</option>
                                    <option value={15300000}>4:15am</option>
                                    <option value={16200000}>4:30am</option>
                                    <option value={17100000}>4:45am</option>
                                    <option value={18000000}>5:00am</option>
                                    <option value={18900000}>5:15am</option>
                                    <option value={19800000}>5:30am</option>
                                    <option value={20700000}>5:45am</option>
                                    <option value={21600000}>6:00am</option>
                                    <option value={22500000}>6:15am</option>
                                    <option value={23400000}>6:30am</option>
                                    <option value={24300000}>6:45am</option>
                                    <option value={25200000}>7:00am</option>
                                    <option value={26100000}>7:15am</option>
                                    <option value={27000000}>7:30am</option>
                                    <option value={27900000}>7:45am</option>
                                    <option value={28800000}>8:00am</option>
                                    <option value={29700000}>8:15am</option>
                                    <option value={30600000}>8:30am</option>
                                    <option value={31500000}>8:45am</option>
                                    <option value={32400000}>9:00am</option>
                                    <option value={33300000}>9:15am</option>
                                    <option value={34200000}>9:30am</option>
                                    <option value={35100000}>9:45am</option>
                                    <option value={36000000}>10:00am</option>
                                    <option value={36900000}>10:15am</option>
                                    <option value={37800000}>10:30am</option>
                                    <option value={38700000}>10:45am</option>
                                    <option value={39600000}>11:00am</option>
                                    <option value={40500000}>11:15am</option>
                                    <option value={41400000}>11:30am</option>
                                    <option value={42300000}>11:45am</option>
                                    <option value={43200000}>12:00pm</option>
                                    <option value={44100000}>12:15pm</option>
                                    <option value={45000000}>12:30pm</option>
                                    <option value={45900000}>12:45pm</option>
                                    <option value={46800000}>1:00pm</option>
                                    <option value={47700000}>1:15pm</option>
                                    <option value={48600000}>1:30pm</option>
                                    <option value={49500000}>1:45pm</option>
                                    <option value={50400000}>2:00pm</option>
                                    <option value={51300000}>2:15pm</option>
                                    <option value={52200000}>2:30pm</option>
                                    <option value={53100000}>2:45pm</option>
                                    <option value={54000000}>3:00pm</option>
                                    <option value={54900000}>3:15pm</option>
                                    <option value={55800000}>3:30pm</option>
                                    <option value={56700000}>3:45pm</option>
                                    <option value={57600000}>4:00pm</option>
                                    <option value={58500000}>4:15pm</option>
                                    <option value={59400000}>4:30pm</option>
                                    <option value={60300000}>4:45pm</option>
                                    <option value={61200000}>5:00pm</option>
                                    <option value={62100000}>5:15pm</option>
                                    <option value={63000000}>5:30pm</option>
                                    <option value={63900000}>5:45pm</option>
                                    <option value={64800000}>6:00pm</option>
                                    <option value={65700000}>6:15pm</option>
                                    <option value={66600000}>6:30pm</option>
                                    <option value={67500000}>6:45pm</option>
                                    <option value={68400000}>7:00pm</option>
                                    <option value={69300000}>7:15pm</option>
                                    <option value={70200000}>7:30pm</option>
                                    <option value={71100000}>7:45pm</option>
                                    <option value={72000000}>8:00pm</option>
                                    <option value={72900000}>8:15pm</option>
                                    <option value={73800000}>8:30pm</option>
                                    <option value={74700000}>8:45pm</option>
                                    <option value={75600000}>9:00pm</option>
                                    <option value={76500000}>9:15pm</option>
                                    <option value={77400000}>9:30pm</option>
                                    <option value={78300000}>9:45pm</option>
                                    <option value={79200000}>10:00pm</option>
                                    <option value={80100000}>10:15pm</option>
                                    <option value={81000000}>10:30pm</option>
                                    <option value={81900000}>10:45pm</option>
                                    <option value={82800000}>11:00pm</option>
                                    <option value={83700000}>11:15pm</option>
                                    <option value={84600000}>11:30pm</option>
                                    <option value={85500000}>11:45pm</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-2">
                                <div className="mt-2">
                                    <label className="text-primary">Repeat :</label>
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className='mt-2'>
                                    <input type="checkbox" class="form-check-input me-1" id="exampleCheck1" />
                                    Repeat
                                    <input type="checkbox" class="form-check-input ms-3" id="exampleCheck1" /> No  Repeat
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col-md-2" />
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-8 mx-auto">
                                        <div className="row mb-2">
                                            <div className="col-md-2">
                                                <div className="mt-1">
                                                    <label>Repeats:</label>
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <select className="form-select ">
                                                    <option>Daliy</option>
                                                    <option>Weekli</option>
                                                    <option>Monthly</option>
                                                    <option>Yearly</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 mx-auto">
                                        <div className="row mb-2">
                                            <div className="col-md-2">
                                                <div className="mt-1">
                                                    <label>Every:</label>
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 mx-auto">
                                        <div className="row mb-2">
                                            <div className="col-md-2">
                                                <div className="mt-1">
                                                    <label>End Repeat:</label>
                                                </div>
                                            </div>
                                            <div className="col-md-10">
                                                <select className="form-select ">
                                                    <option>Never</option>
                                                    <option>After</option>
                                                    <option>On Date</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="text-primary">Description:</label>
                            <textarea className="form-control " defaultValue={""} />
                        </div>
                        <div className="mb-2">
                            <label className="text-primary">Reminders:</label>
                        </div>
                        <div className="mb-5">
                            <a className="text-dark fs-6 " style={{ "-webkit-text-decoration": "none", "text-decoration": "none" }}>No Reminders. Press to add</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calender