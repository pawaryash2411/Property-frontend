import {useFormik} from 'formik'
import { NavLink } from 'react-router-dom';
// import {CreateRequestSchema} from '../../Schema/Maintenance/CreateRequestSchema'

let CreateRequest = ()=>{



const myStyle = {
    textDecoration : "none",
    fontSize : "18px",
    // textAlign : "center"
}

const font = {
    fontSize : "18px"
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
    return(
        <>

        <div className='container-fluid ' style={{minHeight:"650px"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 offset-md-2'>

                        <div className='row my-5'>
                            <div className='col-md-6'>
                        <NavLink to='#' className='text-justify' style={myStyle}>Select Unit</NavLink>
                            </div>
                            <div className='col-md-6'>
                        <NavLink to='#' className='' style={myStyle}>Enter Details</NavLink>
                            </div>
                        </div>




                                {/* <ul className="nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to="#">Active</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link " aria-current="page" to="#">Active</NavLink>
                                </li>
                                </ul> */}







                    <h3 className="my-3">Add new maintenance request</h3>
                    <p>Select the property and unit for which you would like to create new maintenance request.</p>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='my-3'>
                                    <label style={font}>Address</label>
                                    <select style={font} className='form-select'>
                                        <option>Select</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='my-3'>
                                <label style={font}>Unit</label>
                                    <select style={font} className='form-select'>
                                        <option>Select Unit</option>
                                        <option>1A</option>
                                        <option>2B</option>
                                        <option>3C</option>
                                    </select>
                                </div>
                            <button type='submit' className="btn btn-info btn-lg float-end mt-5" ><span className='ps-5 pe-5'>Continue</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






        {/* <div className="container-fluid">
        <div className="container my-5" style={{minHeight:"650px"}}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h3 className="my-3">Add new maintenance request</h3>
                    <p>Select the property and unit for which you would like to create new maintenance request.</p>

                    <div className="row">
                        <form onSubmit={handleSubmit}>
                        <div className="col-md-8 offset-md-2 ">
                            <div className="my-3">
                            <label>Address</label>
                                <select name='address' onChange={handleChange} className={"form-control " + (errors.address && touched.address ? 'is-invalid' : '')}></select>
                                {
                                    errors.address && touched.address ? <small className='text-danger'>{errors.address}</small> : ''
                                }
                            </div>
                            <div className=" my-3">
                            <label>Unit</label>
                                <input type="text" name='unit' onChange={handleChange} className={"form-control " + (errors.unit && touched.unit ? 'is-invalid' : '')}/>
                                {
                                    errors.unit && touched.unit ? <small className='text-danger'>{errors.unit}</small> : ''
                                }
                        </div>    
                            <button type='submit' className="btn btn-info btn-lg float-end mt-5" ><span className='ps-5 pe-5'>Continue</span></button>
                        </div>   
                        </form> 
                    </div>
                    

                    
                </div>
            </div>
        </div>
        </div> */}
        </>
    )
}

export default CreateRequest;