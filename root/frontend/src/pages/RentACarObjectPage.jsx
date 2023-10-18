import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {GoNote} from 'react-icons/go'

const RentACarObjectPage = () => {
    
    const {objectId} = useParams();

    const [Object, setObject] = useState();

    const fetchObject = async() => {
        const {data} = await axios.get(`/rentObjects/getObjectById/${objectId}`);
        setObject(data);
    };

    useEffect(() => {
        fetchObject();
    }, []);

    console.log(Object);

    return (
        <>
            <div className='mt-[100px] h-screen'>
                <div className='flex flex-row px-16 justify-between'>
                    <div className='w-[30%]  flex-wrap flex flex-col p-[20px] h-[800px] bg-[#f5f6fa] rounded-md shadow-xl flex flex-col'>
                    <img src={`${Object?.Logo}`} className="w-[150px] mx-auto rounded-full shadow-xl"/>
                            <h1 className='font-poppins text-[2rem] text-secondary mt-[20px] mx-auto font-bold'>{Object?.Name}</h1>
                            <p className='text-[20px] text-[#828282] mx-auto'>Working hours: {Object?.WorkingHours}</p>
                            <div className='flex flex-row items-center mx-auto mt-[10px]'>
                                <div className='w-[10px] h-[10px] rounded-full bg-[#4cd137]'/>
                                <p className='font-poppins text-[16px] ml-[5px] text-[#4cd137]'>Currently open</p>
                            </div>
                            <hr className='border-[#c9c9c9] w-full mb-[10px] mt-[20px]'/>
                            <div className='h-auto'>
                                <div className='flex flex-row text-[20px] text-[#828282] items-center'>
                                    <IoLocationSharp/>
                                    <p className='ml-[5px]'>Location:</p>
                                </div>
                                <p className='text-[24px] text-secondary font-poppins font-medium flex-wrap '>{Object?.Street} {Object?.Number}</p>
                                <p className='text-[24px] text-secondary font-poppins font-medium flex-wrap '>{Object?.City}</p>
                                <p className='text-[17px] text-secondary font-regular font-poppins'>Lat: {Object?.Latitude}<br/>Long: {Object?.Longitude}</p>
                            </div>
                            <hr className='border-[#c9c9c9] w-full mt-[10px]'/>
                            <div className='h-[150px] mt-[10px]'>
                                <div className='flex flex-row text-[20px] text-[#828282] items-center'>
                                    <GoNote/>
                                    <p className='ml-[5px]'>Description:</p>
                                </div>
                                <p className='text-[24px] text-secondary font-poppins font-medium flex-wrap '>{Object?.Description}</p>
                            </div>
                            <hr className='border-[#c9c9c9] w-full mb-[10px] mt-[20px]'/>
                            <div className='flex flex-row justify-between items-center'>
                                <p className='text-[20px] text-[#828282]'>Average rate</p>
                                <div className='flex flex-row items-center'>
                                    <p className='font-medium font-poppins mr-[5px] text-[18px] text-secondary'>{Object?.AverageRate}</p>
                                    <FaStar className='text-[#fbc531] text-[20px]'/>
                                </div>
                            </div>
                    </div>
                    <div className='w-[70%] h-auto ml-[50px] bg-secondary rounded-md shadow-xl flex flex-col'>
                        <div className='w-full h-[10%] bg-[#c4ad7b]'>

                        </div>
                        <div className='bg-secondary w-full h-auto'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentACarObjectPage