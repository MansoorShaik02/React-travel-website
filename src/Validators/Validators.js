import * as yup from "yup"


export const UserSchema = yup.object().shape(
    {
        email: yup.string().email().required(),
        password: yup.string().min(4).max(8).required()
    }
)
