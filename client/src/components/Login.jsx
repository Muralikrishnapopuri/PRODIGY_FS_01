import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { store } from '../App';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import './styles.css'
function Login() {
    const navigate =useNavigate();
    const [token,setToken] =useContext(store);
  const [cookies,setCookie,removeCookie]=useCookies(['token']);

    const [data,setData] = useState({
        Email:'',
        Password:'' 
    });

    const handleChange = e =>{
        setData({...data,[e.target.name]:e.target.value}) 
    }

    const handleSubmit = e =>{
        e.preventDefault();
        axios.post(`http://127.0.0.1:2021/login`,data).then(
            res => setToken(res.data.token) 
        );

    };
    if(token){
        setCookie("token",token);
        navigate('../myprofile');
    };

  return (
    <div style={{width:"100%",height:"100vh",overflow:"auto" ,backgroundImage:`url("https://t.ly/y0LzW")`,backgroundRepeat:"no-repeat"}}>
       <div className='row text-white d-flex justify-content-center align-items-center h-100'>
        <div className='col-md-6' style={{paddingLeft:"5rem",fontSize:"2rem",textShadow:"2px 2px 7px black"}}>
            <h3>Welcome Back!</h3>
            <p>Enter your details here!</p>
        </div>
        <div className='col-md-6' >
            <div className='card w-50 'style={{backgroundColor:"transparent",backdropFilter:"blur(10px)"}}>
                <div className='card-header p-4'>
                    <div className='card-title text-white'>
                    <h3>Login Here <i className='btn btn-fill'></i></h3>
                    </div>
                </div>
                <div className='card-body' >
                    <form className='p-2' onSubmit={handleSubmit}>
                       
                        <input name='Email'  type="email" onChange={handleChange} className='form-control mb-3' placeholder='Email' />
                        
                        <input name='Password' type="password" onChange={handleChange} className='form-control mb-3' placeholder='Password' />
                   
                    <Link to="/register" style={{color:"white",textDecoration:"none",marginLeft:"2.3rem"}}>Create An Account?</Link>
                    <button className='btn  w-100 btn-3'>
                        Login
                    </button>
                    </form>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Login
