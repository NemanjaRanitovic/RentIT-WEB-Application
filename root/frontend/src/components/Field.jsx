import React from 'react'
import userPicture from "../images/people01.png"
import { FaFacebookF, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";

const Field = ({instagram, twitter, facebook, phone}) => {
    return (
        <div className='relative'>
            <div className='flex flex-rows items-center justify-start ml-4 my-2 align-middle'>
                <FaInstagram className='text-[24px] mr-[5px] text-[#E1306C]'/>
                <div className='flex flex-row'>
                    <p className='font-poppins text-[18px]'>Instagram</p>
                    <p className='font-poppins text-[18px] absolute text-[#9a9a9c] right-0 mr-4 '>{instagram}</p>
                </div>
            </div>
            <hr class="solid"></hr>
            <div className='flex flex-rows items-center justify-start ml-4 my-2 align-middle'>
                <FaTwitter className='text-[24px] mr-[5px] text-[#1DA1F2]'/>
                <div className='flex flex-row'>
                    <p className='font-poppins text-[18px]'>Twitter</p>
                    <p className='font-poppins text-[18px] absolute text-[#9a9a9c] right-0 mr-4'>{twitter}</p>
                </div>
            </div>
            <hr class="solid"></hr>
            <div className='flex flex-rows items-center justify-start ml-4 my-2 align-middle'>
                <FaFacebookF className='text-[24px] mr-[5px] text-[#4267B2]'/>
                <div className='flex flex-row'>
                    <p className='font-poppins text-[18px]'>Facebook</p>
                    <p className='font-poppins text-[18px] absolute text-[#9a9a9c] right-0 mr-4'>{facebook}</p>
                </div>
            </div>
            <hr class="solid"></hr>
            <div className='flex flex-rows items-center justify-start ml-4 my-2 align-middle'>
                <FaPhone className='text-[24px] mr-[5px] text-[#78C257]'/>
                <div className='flex flex-row'>
                    <p className='font-poppins text-[18px]'>Phone</p>
                    <p className='font-poppins text-[18px] absolute text-[#9a9a9c] right-0 mr-4'>{phone}</p>
                </div>
            </div>
        </div>
    )
}

export default Field