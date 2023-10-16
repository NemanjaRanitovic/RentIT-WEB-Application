import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FaStar} from 'react-icons/fa';


const Card = () => {

    const [Objects,setObjects]= useState([]);
    const [Locations, setLocations] = useState([]);
    
    const fetchObjects = async() =>{
        const {data}= await axios.get('/rentObjects/getAllObjects');
        setObjects(data);
    }

    const fetchLocations = async() => {
        const {data} = await axios.get('/locations/getAllLocations');
        setLocations(data);
    }

    /*const objectsWithLocations = async() => {
        Objects.forEach((object) => {
            console.log(object.Location, "jaja");
            let locationData = axios.get(`/locations/getLocationById/${object.Location}`);
            object.Location = locationData.Street;
        })
    }*/

    useEffect(() => {    
        fetchObjects();
        fetchLocations();
    },[]);

    Objects.forEach((object) => {
        Locations.forEach((location) => {
            if(object.Location === location._id){
                object.Location = [location.Street, location.Number, location.City, location.Latitude, location.Longitude];
            }
        });
    });

    return (
        <>
            <div className='flex flex-row cursor-pointer items-center flex-wrap items-center justify-evenly'>
                {Objects.map((object) => (
                    <div key={object._id} className='flex flex-row w-auto h-auto bg-[#f5f6fa] rounded-md
                                                    mt-[20px] relative hover:translate-y-[-0.5rem] ease-in-out duration-300
                                                    hover:shadow-[3px_3px_10px_6px_rgba(0,0,0,0.2)] shadow-xl'>
                        <img src={object.Image} alt='product-img' className='m-2.5 rounded-md w-[120px] md:w-[264px]'/>
                        <div className='flex flex-col'>
                            <div className='flex font-poppins flex-row justify-between mt-1'>
                                <h3 className='md:text-[1.4rem] text-[30px] font-bold text-secondary'>
                                    {object.Name}
                                </h3>
                                <div className='flex flex-row items-center text-[1.2rem]  mt-[4px] font-poppins 
                                                justify-center mr-[1rem] absolute right-0'>
                                        {object.AverageRate}
                                        <FaStar className='text-[#fbc531] w-[20px] mb-[3px]'/>
                                </div>
                            </div>
                            <hr className='border-[#c9c9c9] w-[320px] mt-[10px]'/>
                            <div className='font-poppins w-full h-[65px]'>
                                <div className='lg:text-[1rem] text-[15px] flex flex-col w-[330px] '>
                                    <div className='flex flex-col mr-[1rem] w-full'>
                                        <p className='text-[13px] ml-[2px] text-[#828282]'>Description:</p>
                                        <p className='text-[17px] text-secondary font-poppins'>{object.Description}</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-[#c9c9c9] w-[320px]'/>
                            <div className='flex flex-col w-[290px]'>
                                <p className='text-[13px] ml-[2px] text-[#828282]'>Location:</p>
                                <p className='text-[20px] text-secondary font-medium font-poppins'>{object.Location[0]} {object.Location[1]}</p>
                                <p className='text-[20px] text-secondary font-medium font-poppins'>{object.Location[2]}</p>
                                <p className='text-[12px] text-secondary font-medium font-poppins'>Lat: {object.Location[3]}<br/>Long: {object.Location[4]}</p>
                            </div>
                            <button className="w-[320px] text-primary ease-in-out mt-[5px]
                                            rounded-md bg-third text-[20px] py-[5px] duration-150
                                            cursor-pointer font-poppins hover:bg-[#037f85]" 
                                    type="button">Visit object</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Card