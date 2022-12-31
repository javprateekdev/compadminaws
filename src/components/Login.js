import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '.././store/./cartSlice';
import { useNavigate } from "react-router-dom";
import Header from './Header';



function Login() {
 
 const [usernameReg, setUernameReg] = useState("");
 const [passwordReg, setPasswordReg] = useState ("");
 
 const [username, setUername] = useState("");
 const [password, setPassword] = useState ("");
 
 const [loginStatus, setLoginStatus] = useState(false);

  console.log(loginStatus)
  const dispatch=useDispatch()

  useEffect(() => {
       
    dispatch(add(loginStatus))
  }, [loginStatus]);

  const navigate=useNavigate();
  
  useEffect(() => {
    if (loginStatus) {
      localStorage.setItem('login', 'Yes')
      navigate('/Profile')
        
    }
   
   });

 const register = () => {
    Axios.post("http://localhost:8000/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
 };
 
 const getdata = () => {
    Axios.post("http://localhost:8000/login", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response.status);
      if (!response.status==200) {
         setLoginStatus(false);
      } else {
         setLoginStatus (true);

      }
   });
  
   

 };
 
 return (
    <div>
       <Header/>
        
       <div>
        <div  style={{marginTop:"200px",marginLeft:"500px",width:"500px"}}>
           <h1>Login</h1>
           <div style={{height:"40px"}}>
           <input
              type="text"
              placeholder="Username…"
              onChange = { (e) => {
                 setUername (e.target.value);
              }}
              style={{height:"30px",marginTop:"10px"}}
              />
              </div>
              <div >
           <input
              type="password"
              placeholder="Password…"
              onChange = { (e) => {
                 setPassword (e.target.value);
              }}
              style={{height:"30px",marginTop:"10px"}}
           />
            </div>
            <div>
           <button onClick={getdata} style={{height:"30px",width:"100px",marginTop:"10px"}}>Login</button>
           </div>
           </div>
       </div>
    
    </div>
 );
}

export default Login;