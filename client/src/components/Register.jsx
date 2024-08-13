import React from 'react'
import axios from 'axios';
import {useFormik} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
function Register() {
const navigate = useNavigate();
const formik = useFormik({
    initialValues:{
        UserName:'',
        Password:'',
        Mobile:'',
        Email:''
    },

    onSubmit: (values)=>{
        axios.post("http://127.0.0.1:2021/register",values);
        navigate("/login");
        // alert(JSON.stringify(values));
    }
})
  return (
    <div style={{width:"100%",height:"100vh",overflow:"auto" ,backgroundImage:`url("https://t.ly/y0LzW")`,backgroundRepeat:"no-repeat"}} >
       <div className='row text-white d-flex justify-content-center align-items-center h-100'>
        <div className='col-md-6' style={{paddingLeft:"5rem",fontSize:"2rem",textShadow:"2px 2px 7px black"}}>
            <h3>Create An Account </h3>
            <p>Enter your details here!</p>
        </div>
        <div className='col-md-6' >
            <div className='card w-75 ' style={{backgroundColor:"transparent",backdropFilter:"blur(10px)"}}>
                <div className='card-header p-4'>
                    <div className='card-title text-white'>
                    <h3>Create An Account</h3>
                    </div>
                </div>
                <div className='card-body' >
                    <form className='p-2' onSubmit={formik.handleSubmit}>
                       
                        <input name='UserName'  type="text" onChange={formik.handleChange} className='form-control mb-3' placeholder='UserName' />
                        <dd className="text-danger fw-bold"> {formik.errors.UserName} </dd>
                        <input name='Password' type="password" onChange={formik.handleChange} className='form-control mb-3' placeholder='Password' />
                       
                        <input name='Mobile'  type="number" onChange={formik.handleChange} className='form-control mb-3' placeholder='Mobile' />
                        
                        <input name='Email' type="text" onChange={formik.handleChange} className='form-control mb-3' placeholder='Email' />
                        
                    
                    <Link to="/login" style={{color:"white",textDecoration:"none",marginLeft:"5rem"}}>Already i have an account ?</Link>
                    <button className='btn btn-1 w-100 text-white' type='submit'>
                        Register
                    </button>
                    </form>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Register
