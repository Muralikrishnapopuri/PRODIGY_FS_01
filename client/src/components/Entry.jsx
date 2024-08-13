import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register';
import './styles.css';
function Entry() {

  return (
    <div style={{width:"100%",height:"100vh" ,backgroundImage:`url("https://t.ly/y0LzW")`,backgroundRepeat:"no-repeat"}}>
       
        <div id='Entry' className='d-flex justify-content-center align-items-center h-100 text-white flex-column'>
            <div>
            <h1 style={{color:'white'}}>
                User Authentication with Jsonwebtoken
            </h1>
            <strong>Technologies included :</strong> <br/> &nbsp; <strong>Backend -</strong><span style={{color:""}}>&nbsp;(Mongoose,Node.js,express.js,jwt)</span>
            <br/> &nbsp; <strong>FrontEnd - </strong><span> &nbsp;(HTML,CSS,javascript, React.js - [useContext, usestate, useEffect, axios, formik, functional-components, react-router-dom, react-cookie ])</span>
            </div>
            <div>
                <Link to="/register">
                <button className='custom-btn btn-1'>Register</button>
                </Link>
                
                
            <Link to="/login"> 
            <button className='custom-btn btn-3'>Login</button>
            </Link>
          
            </div>
        </div>
    </div>
  )
}

export default Entry
