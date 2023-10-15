import React from 'react'
import styles from '../style'
import dayjs from "dayjs"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import { useNavigate, Link} from "react-router-dom";
import RegisterPage from '../pages/RegisterPage'
import axios from 'axios';

const EditProfile = () => {
  const User = JSON.parse(localStorage.getItem('userInfo')); 
  const UserBirthDay = dayjs(User.Date).format("MM/DD/YYYY");
  const navigate = useNavigate()
  const [error, setError] = useState(false)
  const Username = User.Username
  const [NewUsername, setNewUsername] = useState(null)
  const [Name, setName] = useState(User.Name)
  const [Lastname, setLastname] = useState(User.Lastname)
  const [Email, setEmail] = useState(User.Email)
  const [BirthDate, setBirthDate] = useState(UserBirthDay)
  const [editProfileNotiffication, seteditProfileNotiffication] = useState("");
  const editProfile = async (event)=> {
   
    try{
      const config = {
        headers:{
          "Content-type":"application/json"
        }
      }
      const {data} = await axios.put('/users/editProfile',{Name,Lastname,Email,Username,NewUsername,BirthDate},config); //user routes, user controllers           
    }catch(error){
      setError(error.response.data.message);
    }
    
  }
  const OnProfileUpdate=()=>{
    seteditProfileNotiffication("Updates will be displayed after loging in again.");
  };

  const UsernameUpdate=(param)=>{
    OnProfileUpdate();
    setNewUsername(param);
  }
  const NameUpdate=(param)=>{
    OnProfileUpdate();
    setName(param);
  }
  const LastnameUpdate=(param)=>{
    OnProfileUpdate();
    setLastname(param);
  }
  const EmailUpdate=(param)=>{
    OnProfileUpdate();
    setEmail(param);
  }
  const BirthDateUpdate=(param)=>{
    OnProfileUpdate();
    setBirthDate(param);
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
                onChange={(U)=>UsernameUpdate(U.target.value)}
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
                onChange={(N)=>NameUpdate(N.target.value)}                
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
                onChange={(LN)=>LastnameUpdate(LN.target.value)}
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
                onChange={(E)=>EmailUpdate(E.target.value)}
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
                onChange={(D)=>BirthDateUpdate(D.target.value)}
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
          <Link to ="/">
          <Button variant="contained" color="success" onClick={
           editProfile                     
          }                    
          >          
            Submit
          </Button>
          </Link>
          {editProfileNotiffication}
        </div>        
      </div>
    </div>
  )
}

export default EditProfile