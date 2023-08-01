import React from 'react'
import "../styles/login.css"

function Login() {
    return (
        <div className='container'>
            <div className='formcontainer'>
                <label>Enter your User Name : </label>
                <input type='text' placeholder='Username'></input>
                <label>Enter your password : </label>
                <input type='password' placeholder='Password'></input>
                <button className='submitbutton'>Submit</button>
                <div id='linklink'>
                    <a href='#' className='link3'>Forgot password?</a> <br />
                    <a href="#" className='link3'>New user? Register here</a>
                </div>
            </div>
        </div >
    )
}

export default Login