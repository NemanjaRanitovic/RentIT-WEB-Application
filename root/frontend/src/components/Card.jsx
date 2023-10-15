import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {objects} from '../constants';
import {FaShoppingCart, FaRegBookmark, FaStar} from 'react-icons/fa';


const Card = () => {

    /*const [Objects,setObjects]= useState([]);

    const fetchObjects = async() =>{
        const {data}= await axios.get('/rentObjects/getAllObjects');
        setObjects(data);
    }

    useEffect(() => {    
        console.log(Objects);
        fetchObjects();
    },[]);*/

    const [Objects, setObjects] = useState([])

    useEffect(() =>{
        const fetchObjects = async () => {
            const response = await fetch('/rentObjects/getAllObjects');
            const json = await response.json();

            if(response.ok){
                console.log(json);
                setObjects(json);
            }
        }

        fetchObjects();
    }, [])
    

    return (
        <div className='flex flex-row justify-evenly mt-[20px] cursor-pointer relative'>
            {Objects.map((object) =>(
                <div key={object._id} className='bg-[#f5f6fa] m-1 flex flex-col max-w-lg shadow-xl
                                                max-h-[40rem] rounded-md relative mx-[0.5rem] md:w-[300px]
                                                hover:translate-y-[-0.5rem] ease-in-out duration-300
                                                hover:shadow-[3px_3px_10px_6px_rgba(0,0,0,0.2)]'>
                    <img src={object.Image}
                        alt='product-img' className='m-2.5 rounded-md w-[100px]
                                                    md:w-[280px]'/>
                    <button className='absolute right-0 m-[1.5rem]'>
                        <FaRegBookmark className='text-[25px] hover:text-third text-secondary
                                                    ease-in-out duration-150'/>
                    </button>
                    <div className='m-[1rem]'>
                        <div className='flex font-poppins flex-row justify-between items-center'>
                            <h3 className='md:text-[1.5rem] text-[20px]'>
                                {object.Name}
                            </h3>
                            <div className='flex flex-row items-center text-[1.2rem] font-poppins justify-center absolute right-0 mr-[1rem]'>
                                    2  
                                    <FaStar className='text-[#fbc531] w-[25px] mb-[3px]'/>
                            </div>
                        </div>
                        <div className='my-[10px] font-poppins'>
                            <div className='lg:text-[1rem] text-[15px] flex flex-col'>
                                <div className='flex flex-col left-0 mr-[1rem]'>
                                    <hr class="rounded" className='mb-[5px] border-[#c9c9c9]'/>
                                    <p className='text-[13px] text-[#828282]'>Description:</p>
                                    {object.Description}
                                    <hr class="rounded" className='mt-[5px] border-[#c9c9c9]'/>
                                </div>
                            </div>
                        </div>
                        <div className='md:my-[0.5rem] font-poppins flex md:flex-row flex-col justify-between md:items-center'>
                            <div className='lg:text-[1rem] text-[15px] font-bold md:flex'>
                                <div className='flex items-center md:absolute mr-[1rem]'>
                                    {object.Location}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className=" w-[100%] text-primary ease-in-out mt-[10px]
                                            rounded-b-md bg-third text-[20px] py-[5px] duration-150
                                            cursor-pointer font-poppins hover:bg-[#037f85]" 
                                type="button">Visit object</button>
                </div>
            ))}
        </div>
    )
}

export default Card