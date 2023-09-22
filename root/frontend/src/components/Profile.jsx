import React from 'react'
import styles from '../style'
import dayjs from "dayjs"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  const User = JSON.parse(localStorage.getItem('userInfo')); 
  const UserBirthDay = dayjs(User.Date).format("MM/DD/YYYY");
  console.log(User);
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
          <div className='absolute right-0 top-0 m-2 h-[50px] w-[50px]'>
            <button className='h-[50px] w-[50px]  text-primary'>
              <FontAwesomeIcon className="text-secondary" icon={faGear} size="" />
            </button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Profile