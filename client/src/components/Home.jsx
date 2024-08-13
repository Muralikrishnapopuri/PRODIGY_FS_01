import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { store } from '../App';
import axios from 'axios';
import {useCookies} from 'react-cookie'
function Home() {
  const [token,setToken] = useContext(store);
  const [data,setData] =useState(null); 
  const navigate = useNavigate();
  const [cookies,setCookie,removeCookie]=useCookies(['token']);
  React.useEffect(() =>{


    console.log(cookies.token)
      axios.get('http://127.0.0.1:2021/myprofile',{
          headers :{
              'x-token':token
          }
      }).then(res => setData(res.data)).catch((err) => console.log(err));
      if(cookies.token){
        axios.get('http://127.0.0.1:2021/myprofile',{
          headers :{
              'x-token':cookies.token
          }
      }).then(res => setData(res.data)).catch((err) => console.log(err));
      }
      if(!cookies.token){
          window.location.reload();
          navigate('../login')  
      };
  },[]);
  return (
    <div className='bg-secondary text-white d-flex justify-content-center align-items-center' style={{width:"100%",height:"100vh"}}>
    <div className='bg-dark p-4 w-75 ' style={{borderRadius:"2rem"}}>
        <span style={{backgroundColor:"green" ,borderRadius:'2rem',paddingLeft:"0.5rem",paddingRight:"0.5rem",marginLeft:"20px"}}>User Details :</span>
        <div className='card w-95 bg-white   m-3' style={{backgroundImage:"url('https://t.ly/y0LzW')"}}>
        <div className='card w-100 h-100  ' style={{border:"none",backgroundColor:"transparent",backdropFilter:"blur(10px)"}}>
            <div className=' text-white fw-bold p-4'>
            <div>
              
                        { data &&
                        <div>
                          <h2>welcome {data.UserName}</h2>
                            <dl>
                              <dt>UserName</dt>
                              <dd>{data.UserName}</dd>
                              <dt>Password</dt>
                              <dd>{data.Password}</dd>
                              <dt>Email</dt>
                              <dd>{data.Email}</dd>
                              <dt>Mobile</dt>
                              <dd>{data.Mobile}</dd>
                            </dl>
                            <div onClick={()=>{removeCookie("token");window.location.reload()}} style={{display:"flex",justifyContent:"end"}}>
                              <button className='btn btn-6 text-white'>
                                Logout
                              </button>
                            </div>
                        </div>

                        }
              
           </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Home
