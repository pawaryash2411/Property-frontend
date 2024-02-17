import * as YUP from 'yup'

let CreateRequestSchema = YUP.object({
    address : YUP.string().required("Insert Your Address First"),
    unit : YUP.string().required("Insert Your Units")
})

export {CreateRequestSchema}