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
import Field from '../components/Field';
import { useTable } from "react-table";

const Profile = () => {
    const User = JSON.parse(localStorage.getItem('userInfo')); 
    const UserBirthDay = dayjs(User.Date).format("MM/DD/YYYY");
    const [Users,setUsers]= useState([]);

    const fetchUsers = async() =>{
        //return await axios.get('/users/getAllNames');
        const {data}= await axios.get('/users/getAllNames');
        setUsers(data);
    }

    useEffect(() => {    
        console.log(Users);
        fetchUsers();
    },[])
    
    return (
        <>
            <div className='mr-[-8px] ml-[-8px] flex flex-row'>
                <div className='p-4 ml-[300px]'>
                    <div class="leading-[35px]">
                        <div className="w-[450px] mb-4">
                            <div className='shadow-xl relative flex flex-col min-w-0 break-words bg-[#f5f6fa] bg-clip-border 
                                            border-solid border-0 border-inherit rounded-md mb-4'>
                                <div className="flex-auto min-h-[1px] p-4">
                                    <div className='flex flex-col items-center text-center'>
                                        <img src='/people01.png' alt='Admin' className='rounded-full object-cover w-[150px] skeleton'/>
                                        <div className='mt-3'>
                                            <p className='text-secondary font-poppins text-[34px]'>{User.Username}</p>
                                            <p className='text-secondary mb-1 font-poppins text-[16px]'>{User.Name} {User.Lastname}</p>
                                            <p className='text-secondary mb-1 font-poppins text-[16px]'>
                                                {
                                                    User.IsAdmin === "true"? 
                                                    "Profile type: Admin"
                                                    :
                                                    User.IsManager === "true"?
                                                    "Profile type: Manager"
                                                    :
                                                    "Profile type: User"
                                                }   
                                            </p>
                                            <button className='rounded-md bg-third font-poppins text-[18px] py-[10px] px-[20px] 
                                                               hover:bg-[#037f85] text-primary mr-[10px] ease-in-out duration-150'>
                                                Edit Profile
                                            </button>
                                            <Link to="/CreateRentObject">
                                                <button className='rounded-md bg-none border-[1px] border-[#00ADB5] font-poppins 
                                                                    text-[18px] py-[10px] px-[20px] text-third ml-[10px] 
                                                                    hover:text-primary hover:bg-third ease-in-out duration-150'>
                                                    Messages
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='shadow-xl relative flex flex-col min-w-0 break-words bg-[#f5f6fa] bg-clip-border 
                                            border-solid border-0 border-inherit rounded-md'>
                                <Field instagram={'_nemkac'} twitter={'@LickiDodjos'} facebook={"Nemanja Todorovic"} phone={"+381 644316167"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[800px] py-4'>
                    <div className='shadow-xl relative flex flex-col min-w-0 break-words bg-[#f5f6fa] bg-clip-border 
                                    border-solid border-0 border-inherit rounded-md mb-4'>
                        <div className='flex-auto min-h-[1px] p-4'>
                            <div className='felx flex-row'>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row'>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>First Name</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{User.Name}</p>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row'>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>Last Name</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{User.Lastname}</p>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row'>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>Username</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{User.Username}</p>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row'>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>Date of Birth</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{UserBirthDay}</p>
                                    </div>
                                </div>
                                <hr class="solid"></hr>
                                <div className='w-[300px] py-4'>
                                    <div className='flex flex-row '>
                                        <p className='font-poppins text-secondary text-[18px] font-semibold'>Email</p>
                                        <p className='font-poppins absolute left-[200px] text-[18px] text-[#9a9a9c]'>{User.Email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>        
                    <div className='w-[800px] py-4'>
                        <div className='shadow-xl relative flex flex-col min-w-0 break-words bg-[#f5f6fa] bg-clip-border 
                                        border-solid border-0 border-inherit rounded-md mb-4 py-4'>
                            <div className='bg-[#f5f6fa] h-[600px] overflow-scroll w-[750px] m-auto font-poppins 
                                            font-normal text-[20px] text-black rounded-md text-center'>
                                {
                                    User.IsAdmin === "true"? 
                                    <div>
                                        <p className='font-poppins text-[24px] font-semibold text-secondary'>Users preview</p>          
                                    <div className='w-auto flex justify-center items-center relative'>
                                        <table className='min-w-full text-left text-sm font-light'>
                                            <thead className='border-b font-medium dark:border-neutral-500 bg-secondary'>
                                                <tr>
                                                    <th scope="col" className='text-[16px] text-primary px-6 py-4 '>
                                                        First Name
                                                    </th>
                                                    <th className='text-[16px] text-primary px-6 py-4'>
                                                        Last Name
                                                    </th>
                                                    <th className='text-[16px] text-primary px-6 py-4'>
                                                        Username
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    Users.map(user => {
                                                        return <tr className='border-b dark:border-neutral-500'>
                                                            <td className='whitespace-nowrap px-6 py-4'>{user.Name}</td>
                                                            <td className='whitespace-nowrap px-6 py-4'>{user.Lastname}</td>
                                                            <td className='whitespace-nowrap px-6 py-4'>{user.Username}</td>
                                                        </tr>
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                                
                                    </div>
                                    :
                                    User.IsManager === "true"?
                                    "Profile type: Manager"
                                    :
                                    "Profile type: User" //ovde treba dodati jos jedan ===? kasnije da se proveri kakvog tipa je kupac (Golden,silver, itd...)
                                }
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </>
    )
}

export default Profile