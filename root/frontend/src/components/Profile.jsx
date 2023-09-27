import React from 'react'
import styles from '../style'
import dayjs from "dayjs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPersonCircleMinus } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import Tooltip from '@mui/material/Tooltip'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Profile = () => {
  const User = JSON.parse(localStorage.getItem('userInfo')); 
  const UserBirthDay = dayjs(User.Date).format("MM/DD/YYYY");
  const [error, setError] = useState(false);
  const [Imena,setImena]= useState([]);

  const fetchImena = async() =>{
    //return await axios.get('/users/getAllNames');
    const {data}= await axios.get('/users/getAllNames');
    setImena(data);
    console.log({data});
  }

  useEffect(() => {
    fetchImena();
    console.log(Imena);
  },[])
  

  const getAllNames = async()=> {
    const config = {
    headers:{
        "Content-type":"application/json"
    }
    }
    const data = await axios.get('/users/getAllNames',config); //user routes, user controllers           
    setImena(data);
    console.log(Imena);         
      
  }

  //console.log(User);
  return (
    <div className='bg-[#e6e1e1] h-[800px] w-[1920px]'>
      <div className={`${styles.paddingX} 
                      font-poppins 
                      font-normal                     
                      text-[36px] 
                      text-black mr-10`}>
        {User.Name} {User.Lastname}
      </div>

      <div className={`${styles.paddingX}`}>
        <div className=' bg-[#e6e1e1] h-[400px] w-[500px] top-2 rounded-md relative mb-10'  style={{border: '1px solid black'}}>
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            Username: {User.Username}                      
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            Name: {User.Name}
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            Last name: {User.Lastname}                                  
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            E-mail: {User.Email}                                  
          </div> 
          <div className='font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black mr-10
                          p-[10px]
                          `'>
            Birth date: {UserBirthDay}                                
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
          <div className='absolute right-0 top-0 m-2 h-[50px] w-[50px]'>
            <Tooltip title = "Edit profile">
            <Link to ="/EditProfile">
            <button className='h-[50px] w-[50px]  text-primary'>
              <FontAwesomeIcon className="text-secondary" icon={faGear} size="" />
            </button>
            </Link>
            </Tooltip>
          </div>
        </div>
        
      </div>
      <div className='absolute left-1/3 top-36 bg-[#e6e1e1] h-[400px] w-[500px] font-poppins 
                          font-normal                     
                          text-[20px] 
                          text-black
                          rounded-md
                          text-center'
                          style={{border: '1px solid black'}}>
      {
        User.IsAdmin === "true"? 
        <div>
          Users preview
                          
        </div>
        :
        User.IsManager === "true"?
        "Profile type: Manager"
        :
        "Profile type: User" //ovde treba dodati jos jedan ===? kasnije da se proveri kakvog tipa je kupac (Golden,silver, itd...)
      }
      </div>
    </div>
  )
}

export default Profile