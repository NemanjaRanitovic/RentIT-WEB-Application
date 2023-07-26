import React, { useState } from 'react'
import { useNavigate, Link} from "react-router-dom";
import Dropdown from './Dropdown';
import axios from 'axios';


const Register = () => {
    const navigate = useNavigate()
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Lastname, setLastName] = useState("")
    const [BirthDate, setBirthDate] = useState("")
    const [Sex, setSex] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const register = async (event)=> {
        event.preventDefault();
        try{
          const config = {
            headers:{
              "Content-type":"application/json"
            }
          }
          setLoading(true);
            const { data} = await axios.post('/users/register',{Name,Lastname,Sex,Email,Username,Password,BirthDate},config); //user routes, user controllers
            navigate("/");
          setLoading(false);
        }catch(error){
          setError(error.response.data.message);
        }
      }

  return (
    <div className='h-[600px]'>
        <div className='justify-center flex content-center'>
        <div className='register flex-wrap w-[300px] flex justify-center'>
            <h2 className='w-[200px] text-center'>
                Register
            </h2>
            <input className='rounded-md 
                              bg-[#dcdde1]
                              pl-[12px]
                              w-[200px]
                              mb-[10px]
                              '
                    placeholder='Name'
                    value={Name}
                    type='text'
                    onChange={(N)=>setName(N.target.value)}
            />            
            <input className='rounded-md 
                              bg-[#dcdde1]
                              pl-[12px]
                              w-[200px]
                              mb-[10px]
                              '
                    placeholder='Last name'
                    value={Lastname}
                    type='text'
                    onChange={(LN)=>setLastName(LN.target.value)}
            />
            <input className='rounded-md 
                              bg-[#dcdde1]
                              pl-[12px]
                              w-[200px]
                              mb-[10px]
                              '
                    placeholder='Username'
                    value={Username}
                    type='text'
                    onChange={(U)=>setUsername(U.target.value)}
            />
            <input className='rounded-md 
                              bg-[#dcdde1]
                              pl-[12px]
                              w-[200px]
                              mb-[10px]
                              '
                    placeholder='Password'
                    value={Password}
                    type='password'
                    onChange={(P)=>setPassword(P.target.value)}
            />
            <input className='rounded-md 
                              bg-[#dcdde1]
                              pl-[12px]
                              w-[200px]
                              mb-[10px]
                              '
                    placeholder='E-mail'
                    value={Email}
                    type='email'
                    onChange={(E)=>setEmail(E.target.value)}
            />
            <input className='mb-[10px]'
                   type='date'
                   value={BirthDate}
                   onChange={(D)=>setBirthDate(D.target.value)}
            ></input>
            <input className='rounded-md 
                              bg-[#dcdde1]
                              pl-[12px]
                              w-[200px]
                              mb-[10px]
                              '
                    placeholder='Gender'
                    value={Sex}
                    type='email'
                    onChange={(S)=>setSex(S.target.value)}
            />
           <button className="registerBtn 
           bg-[#dcdde1] 
           rounded-md
           w-[200px]
           hover:bg-[#ffffff]
           " 
           onClick={register}
            type="button"              
            >Register</button>
        </div>   
        </div> 
    </div>
  )
}

export default Register