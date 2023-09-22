import React from 'react'
import styles from '../style'
import dayjs from "dayjs"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useNavigate, Link} from "react-router-dom";
import Register from './Register'
import axios from 'axios';
const EditProfile = () => {
  const User = JSON.parse(localStorage.getItem('userInfo')); 
  const UserBirthDay = dayjs(User.Date).format("MM/DD/YYYY");
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const [Username, setUsername] = useState(User.Username)
  const [Name, setName] = useState(User.Name)
  const [Lastname, setLastname] = useState(User.Lastname)
  const [Email, setEmail] = useState(User.Email)
  const [BirthDate, setBirthDate] = useState(UserBirthDay)
  const [Sex, setSex] = useState("Male")
  const [Password, setPassword] = useState("TAMALAJEKOKETA")
  const [loading, setLoading] = useState(false)

  const Register = async (event)=> {
    event.preventDefault();
    try{
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }
      setLoading(true);
        const {data} = await axios.post('/users/register',{Name,Lastname,Sex,Email,Username,Password,BirthDate},config); //user routes, user controllers
        navigate("/");
      setLoading(false);
    }catch(error){
      setError(error.response.data.message);
    }
  }




  return (
    <div>
      <div className={`${styles.paddingX} 
                      font-poppins 
                      font-normal                     
                      text-[36px] 
                      text-black mr-10`}>
        {User.Name} {User.Lastname}
      </div>

      <div className={`${styles.paddingX}`}>
        <div className=' bg-[#e6e1e1] h-[500px] w-[500px] rounded-md relative'>
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[15px]                    
                          `'>
            Username: <TextField
                id="UsernameTextField"
                label={Username}
                defaultValue={Username}
                size = "small"
                onChange={(U)=>setUsername(U.target.value)}
                />                                                 
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            Name: <TextField
                id="outlinedd-helperText"
                label={Name}
                defaultValue={Name}
                size = "small"
                onChange={(N)=>setName(N.target.value)}
                />  
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            Last name: <TextField
                id="outlined-helperText"
                label={Lastname}
                defaultValue={Lastname}
                size = "small"
                onChange={(LN)=>setLastname(LN.target.value)}
                />                                   
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            E-mail: <TextField
                id="outlined-helperText"
                label={Email}
                defaultValue={Email}
                size = "small"
                onChange={(E)=>setEmail(E.target.value)}
                />                                   
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            Birth date: <TextField
                id="outlined-helperText"
                label={BirthDate}
                defaultValue={BirthDate}
                size = "small"
                onChange={(D)=>setBirthDate(D.target.value)}
                />                                  
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            {
              User.IsAdmin === "true"?
              "Profile type: Admin"
              :
              User.IsManager === "true"?
              "Profile type: Manager"
              :
              "Profile type: User" //ovde treba dodati jos jedan ===? kasnije da se proveri kakvog tipa je kupac (Golden,silver, itd...)
            }
            
          </div>
          <Button variant="contained" color="success" onClick={
           Register
          }
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditProfile