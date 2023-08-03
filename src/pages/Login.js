import React from 'react'
import "../styles/login.css"
//add yup to the login form
import { UserSchema } from '../Validators/Validators';



function Login() {
    const vart = false;

    const UserCreation = async (event) => {
        event.preventDefault()
        let formdata = {
            email: event.target[0].value,
            password: event.target[1].value


        };
        console.log(formdata)
        const validdata = await UserSchema.isValid(formdata)
        console.log(validdata)

    }


    return (


        <div className='container'>
            <form className='formcontainer' onSubmit={UserCreation}>


                <label>E-mail : </label>
                <input type='text' placeholder='E-Mail'></input>

                <label>Password : </label>
                <input type='password' placeholder='Password : '></input>

                <input type='submit' className='submitbutton'></input>
                <div id='linklink'>
                    <a href='#' className='link3'>Forgot password?</a> <br />
                    <a href="#" className='link3'>New user? Register here</a>
                </div>

                {/*    {UserCreation.validdata ? <div className='showError'>hello</div> : <div className='showError'>null</div>} */}
            </form>

        </div >


    )
}

export default Login