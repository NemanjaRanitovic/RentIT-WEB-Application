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
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


const Profile = () => {
  const User = JSON.parse(localStorage.getItem('userInfo')); 
  const UserBirthDay = dayjs(User.Date).format("MM/DD/YYYY");
  const [Users,setUsers]= useState([]);
  const columns = [       
    {
      field: 'Name',
      headerName: 'First name',
      width: 200,
      editable: true,
    },
    {
      field: 'Lastname',
      headerName: 'Last name',
      width: 200,
      editable: true,
    },
    {
      field: 'Username',
      headerName: 'Username',      
      width: 200,
      editable: true,
    },    
  ];
  const fetchUsers = async() =>{
    //return await axios.get('/users/getAllNames');
    const {data}= await axios.get('/users/getAllNames');
    setUsers(data);
  }
  const getRowId = (row)=>{
    return row.Username;
  }
  useEffect(() => {    
    console.log(Users);
    fetchUsers();
  },[])
  
  return (
    <div className='bg-[#e6e1e1] h-[800px] w-[1920px]'>    
      <div className={`${styles.paddingX}`}>
        <div className=' bg-[#e6e1e1] h-[400px] w-[500px] top-16 rounded-md relative mb-10'  style={{border: '1px solid black'}}>
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
      <div className='absolute left-1/3 top-36 bg-[#e6e1e1] h-[400px] w-[700px] font-poppins 
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
          <div>
          <Box sx={{ height: 380, width: '100%' }}>
            <DataGrid
              rows = {Users}
              columns={columns}
              getRowId={getRowId}
            />
            </Box>
          </div>
                      
        </div>
        :
        User.IsManager === "true"?
        "Profile type: Manager ovde treba da bude data grid porudzbina"        
        :
        "Profile type: User" //ovde treba dodati jos jedan ===? kasnije da se proveri kakvog tipa je kupac (Golden,silver, itd...)
      }
      </div>
      {
        User.IsAdmin === "true" ? 
        <div>
        
          <div className=' absolute bg-[#e6e1e1] right-36 top-36 h-[400px] w-[300px] rounded-md font-poppins text-center'
              style={{border: '1px solid black',
                      display: 'flex',
                      justifyContent: 'center'}}>
            What do you want to do today?
            <div className = 'top-16 translate-middle absolute'
                style = {{display:'flex', 
                          alignItems: 'center',
                          justifyContent: 'center'}}>
              <Link to ="/CreateRentObject">
                <Button variant="contained">
                  Add rent object
                </Button>
              </Link>
            </div>        
          </div>      
      </div>
      :
      User.IsManager === "true" ?
      <div>
        <div className=' absolute bg-[#e6e1e1] right-36 top-36 h-[400px] w-[300px] rounded-md font-poppins text-center'
              style={{border: '1px solid black',
                      display: 'flex',
                      justifyContent: 'center'}}>
            What do you want to do today?
            <div className = 'top-16 translate-middle absolute'
                style = {{display:'flex', 
                          alignItems: 'center',
                          justifyContent: 'center'}}> 
                                        
              <Link to ="/AddVehicle">  
                <Button variant="contained">
                  Add a vehicle to your object
                </Button>
              </Link>
            </div>
                    
          </div> 
      </div>
      :
      <div>
        Ne jaja
      </div>
      }

    </div>
  )
}
 //promeniti link na 189 liniji
export default Profile