import React, { useEffect } from 'react'
import Dropdown from './Dropdown'
import Search from './Search';
import { useState } from 'react';
import styles from '../style';
import Card from './Card';
import Fade from 'react-reveal/Fade';
import axios from 'axios';

const Objects = () => {

    const[selected, setSelected] = useState("");

    return (
        <>
            <div id='objects' className='flex flex-col items-center justify-center'>
                <div className='flex flex-col rounded-2xl shadow-xl bg-[#f5f6fa] my-[20px] relative'>
                    <p className='absolute top-[20px] left-[60px] font-poppins text-[2rem] font-medium text-secondary'>Search for rent a car objects</p>
                    <div className='w-[1500px] h-[300px] flex flex-row  items-center justify-center '>
                        <div className='flex flex-col'>
                            <p className='font-poppins text-[1rem] text-secondary font-regular'>Type of vehicle</p>
                            <Dropdown selected={selected} setSelected={setSelected} Options={['Car', 'Bike', 'Motorcycle', 'Van', 'Scooter']}/>
                        </div>
                        <div className='flex flex-col ml-[20px]'>
                            <p className='font-poppins text-[1rem] text-secondary font-regular'>Object name</p>
                            <input className="bg-white text-secondary h-[45px] font-poppins shadow-[2px_2px_5px_3px_rgba(0,0,0,0.1)]
                                            w-[260px] border-[0px] rounded-md pl-[10px]"  
                                    placeholder="e.g. Object 1"/>
                        </div>
                        <div className='flex flex-col ml-[20px]'>
                            <p className='font-poppins text-[1rem] text-secondary font-regular'>Object location</p>
                            <input className="bg-white text-secondary h-[45px] font-poppins shadow-[2px_2px_5px_3px_rgba(0,0,0,0.1)]
                                            w-[260px] border-[0px] rounded-md pl-[10px]"  
                                    placeholder="e.g. Street/City/Country"/>
                        </div>
                        <div className='flex flex-col ml-[20px]'>
                            <p className='font-poppins text-[1rem] text-secondary font-regular'>Average rate</p>
                            <input className="bg-white text-secondary h-[45px] font-poppins shadow-[2px_2px_5px_3px_rgba(0,0,0,0.1)]
                                            w-[260px] border-[0px] rounded-md pl-[10px]"  
                                    placeholder="e.g 4.5"/>
                        </div>
                        <div className='flex flex-col ml-[20px]'>
                            <p className='font-poppins text-[1rem] text-secondary font-regular'>Starting price</p>
                            <input className="bg-white text-secondary h-[45px] font-poppins shadow-[2px_2px_5px_3px_rgba(0,0,0,0.1)]
                                            w-[260px] border-[0px] rounded-md pl-[10px]"  
                                    placeholder="e.g 800$"/>
                        </div>
                    </div>
                    <button className=" w-[260px] text-primary ease-in-out absolute bottom-[20px] right-[60px]
                                            rounded-[10px] bg-third text-[20px] py-[5px] duration-150
                                            cursor-pointer font-poppins hover:bg-[#037f85]" 
                                type="button">Apply filters</button>
                </div>
                <div className={`flex justify-center mb-[30px]`}>
                    <div className='Cards'>
                        <Fade bottom distance='20%'>
                            <Card/>
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Objects