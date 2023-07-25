import React, { useEffect, useState } from 'react'
import "./LogIn.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const [Username, setUsername] = useState("")
  const [Password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleClick = async (event)=> {
    event.preventDefault();
    try{
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }
      setLoading(true);
        const { data} = await axios.post('/users/login',{Username,Password},config);
        localStorage.setItem('userInfo',JSON.stringify(data));
        console.log(data);
        navigate("/");
      setLoading(false);
    }catch(error){
      setError(error.response.data.message);
    }
  }

  return (
    <div className='content'> 
		<div className="login">
			<h2>Login</h2>
			<input id="Username" 
             className="usernameInput" 
             type={"text"} 
             placeholder="Username"
             value={Username}
             onChange={(u)=>setUsername(u.target.value)}/>

			<input id="Password" 
             className="passwordInput" 
             type={"password"} 
             placeholder="Password" 
             value={Password}
             onChange={(p)=>setPassword(p.target.value)}></input>
			<button className="loginBtn" 
              type="button"
              onClick={handleClick}
      >Log In</button>			
		</div>
    </div>
  );
};

export default LogIn