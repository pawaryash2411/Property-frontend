import {useFormik} from 'formik'
import {CreateRequestSchema} from '../../Schema/Maintenance/CreateRequestSchema'

let CreateRequest = ()=>{
    let {handleChange, handleSubmit, errors, touched} = useFormik({
        validationSchema : CreateRequestSchema,
        initialValues : {
            address : "",
            unit : ""
        },
        onSubmit : (data)=>{
            console.log(data)
        }
    })
    return(
        <>
        <div className="container-fluid">
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
                                <textarea name='address' onChange={handleChange} className={"form-control " + (errors.address && touched.address ? 'is-invalid' : '')}></textarea>
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
                            <button type='submit' className="btn btn-info" >Continue</button>
                        </div>   
                        </form> 
                    </div>
                    

                    
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default CreateRequest;