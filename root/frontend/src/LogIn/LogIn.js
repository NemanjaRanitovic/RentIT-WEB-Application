import React, { useEffect } from 'react'
import "./LogIn.css"
import axios from 'axios';

const LogIn = () => {

  const getUser = async() => {
    const data = await axios.get("/getUser")
    console.log(data);
  }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <div className='content'> 
		<div className="login">
			<h2>Login</h2>
			<input id="Username" className="usernameInput" type={"text"} placeholder="Username"/>
			<input id="Password" className="passwordInput" type={"password"} placeholder="Password"></input>
			<button className="loginBtn" type="button">Log In</button>			
		</div>
    </div>
  );
};

export default LogIn