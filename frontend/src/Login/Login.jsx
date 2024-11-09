import React from "react";
import './Login.css'
import {MdEmail} from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import {FaLock} from "react-icons/fa6";

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        //API implementation
        //Mock success
        console.log("Login successful!");
        navigate('/'); //Navigate to main page
    }

    return (
        <div className='login-container'>
            <div className='form-wrapper'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <MdEmail className='icon'/>
                        <input type='email' placeholder='Email' required/>
                    </div>
                    <div className='input-box'>
                        <FaLock className='icon'/>
                        <input type='password' placeholder='Password' required/>
                    </div>
                    <div className='remember'>
                        <label><input type='checkbox'/>Remember me</label>
                    </div>

                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login