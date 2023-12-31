import React, {useState} from 'react';
import './style.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Login = () => {
    const [values,setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const [error,setError] = useState()
    const handelSubmit = (event) =>{
        event.preventDefault()
        axios.post('http://localhost:3000/auth/adminlogin',values)
            .then(result => {
                if(result.data.loginStatus) {
                    navigate('/Dashboard')
                }else {
                    setError(result.data.Error)
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-warning'>
                    {error && error}
                </div>
                 <h2>Login Page</h2>
                    <form onSubmit={handelSubmit}>
                        <div className='mb-3'>
                            <label htmlFor="email"><strong>Email: </strong></label>
                            <input type="email" name="email"
                                   autoComplete='off'
                                   placeholder='Enter Email'
                                   className='form-control rouunded-0'
                                   onChange={(e) => setValues({...values,email : e.target.value})}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="password"><strong>Password: </strong></label>
                            <input type="password" name="password"
                                   placeholder='Enter Password'
                                   className='form-control rouunded-0'
                                   onChange={(e) => setValues({...values,password : e.target.value})}
                            />
                        </div>
                        <button className='btn btn-success w-100 rounded-0'>Login</button>
                    </form>
             </div>
        </div>
    );
};

export default Login;
