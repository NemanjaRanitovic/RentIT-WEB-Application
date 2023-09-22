import React from 'react';
import {objects} from '../constants';
import {FaShoppingCart, FaRegBookmark, FaStar} from 'react-icons/fa';


const Card = () => {
    return (
        <div className='flex flex-row justify-evenly mt-[20px] cursor-pointer relative'>
            {objects.map(object =>(
                <div key={object.id} className='bg-white m-1 flex flex-col max-w-lg shadow-2xl
                                                max-h-[40rem] rounded-md relative mx-[0.5rem]
                                                hover:translate-y-[-0.5rem] ease-in-out duration-300
                                                hover:shadow-[3px_3px_10px_6px_rgba(0,0,0,0.2)]'>
                    <img src={object.image}
                        alt='product-img' className='m-2.5 rounded-md w-[140px]
                                                    md:w-[300px]'/>
                    <button className='absolute m-[1.5rem] right-0'>
                    <FaShoppingCart className=' text-[25px] hover:text-third text-secondary
                                                cursor-pointer ease-in-out duration-150'/>
                    </button>
                    <button className='absolute right-[2.5rem] m-[1.5rem]'>
                        <FaRegBookmark className='text-[25px] hover:text-third text-secondary
                                                    ease-in-out duration-150'/>
                    </button>
                    <div className='m-[1rem]'>
                        <h3 className='md:text-[1.5rem] text-[20px]'>
                            {object.name}
                        </h3>
                        <div className='md:my-[0.5rem] flex md:flex-row flex-col justify-between md:items-center'>
                            <div className='lg:text-[1rem] text-[15px] font-bold md:flex'>
                                Location:
                                <div className='flex items-center md:absolute md:right-0 mr-[1rem]'>
                                    {object.location}
                                </div>
                            </div>
                        </div>
                        <div className='my-[0.5rem] flex justify-between items-center 
                                        border-t-secondary border-t-[1px]'>
                            <div className='flex items-center text-[1rem] justify-between'>
                                Avg.Rate:
                                <div className='flex items-center absolute right-0 mr-[1rem]'>
                                    {object.rating}  
                                    <FaStar className='text-[#fbc531]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card