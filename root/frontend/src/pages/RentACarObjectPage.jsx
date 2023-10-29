import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'
import {IoLocationSharp} from 'react-icons/io5'
import {GoNote} from 'react-icons/go'
import Dropdown from '../components/Dropdown';
import Fade from 'react-reveal/Fade';

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import VehicleCard from '../components/VehicleCard';

const RentACarObjectPage = () => {
    
    const {objectId} = useParams();

    const [Object, setObject] = useState();

    const[selected, setSelected] = useState("");

    const [Latitude, setLatitude] = useState();
    const [Longitude, setLongitude] = useState();   
    const [isLoading, setLoading] = useState(true);
    const [objectVehicles, setObjectVehicles] = useState([]);

    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow, 
        iconSize: [25,41], 
        iconAnchor: [12,41]
    });

    const fetchObject = async() => {
        const {data} = await axios.get(`/rentObjects/getObjectById/${objectId}`);
        setObject(data);
    };

    const fetchVehicleData = async () => {
        if (Object && Object.Vehicles) {
            const vehiclePromises = Object.Vehicles.map(async (vehicleId) => {
                const { data } = await axios.get(`/vehicles/getVehicleById/${vehicleId}`);
                return data;
            });

            const vehicles = await Promise.all(vehiclePromises);
            setObjectVehicles(vehicles);
            console.log(vehicles);
        }
    };
    useEffect(() => {
        fetchObject();
    }, [objectId]);

    useEffect(() => { 
        setLatitude(Object?.Latitude);
        setLongitude(Object?.Longitude);
    });

    useEffect(() => {
        if (Object) {
            fetchVehicleData();
        }
    }, [Object]);

    useEffect(()=>{        
        setTimeout(()=> {
            setLoading(false);
        },1500)        
    },[Object]);

    
    if(isLoading){
        return ( 
            <div className='flex flex-col items-center justify-center h-[100vh]'></div> 
          );
    }else
    return (
        <>
            <div className='mt-[100px] mb-[100px] h-auto relative'>
                <div className='flex flex-row px-16 justify-between'>
                    <div className='w-[30%] flex-wrap flex flex-col p-[20px] h-[105vh] bg-[#f5f6fa] rounded-md shadow-xl flex flex-col'>
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
                            <div className='w-auto h-[250px] shadow-lg'>
                                <MapContainer   className='w-full h-[250px] rounded-md' 
                                                center={[Latitude, Longitude]} 
                                                zoom={13}
                                                maxZoom={18}
                                                attributionControl={true}
                                                zoomControl={true}                                                            
                                                scrollWheelZoom={true}
                                                dragging={true}
                                                animate={true}
                                                easeLinearity={0.35}>                                                                                                           
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />	
                                    <Marker position={[Latitude,Longitude]} icon={icon}></Marker>			
                                </MapContainer>
                            </div>                                                                                                             
                        </div>
                        <hr className='border-[#c9c9c9] w-full mt-[20px]'/>
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
                    <div className='w-[70%] h-auto ml-[50px] rounded-md flex flex-col flex-wrap'>
                        <div className='w-full h-auto relative'>
                            <div className='flex flex-col rounded-2xl shadow-xl bg-[#f5f6fa] relative'>
                                <p className='absolute top-[20px] left-[25px] font-poppins text-[2rem] font-medium text-secondary'>Search for rent a car objects</p>
                                <div className='w-full h-[300px] left-[60px] flex flex-row items-center justify-evenly'>
                                    <div className='flex flex-col'>
                                        <p className='font-poppins text-[1rem] text-secondary font-regular'>Type of vehicle</p>
                                        <Dropdown selected={selected} setSelected={setSelected} Options={['Car', 'Bike', 'Motorcycle', 'Van', 'Scooter']}/>
                                    </div>
                                    <div className='flex flex-col ml-[20px]'>
                                        <p className='font-poppins text-[1rem] text-secondary font-regular'>Brand</p>
                                        <Dropdown selected={selected} setSelected={setSelected} Options={['BMW', 'Mercedes Benz', 'Audi', 'Alfa Romeo', 'Volvo']}/>
                                    </div>
                                    <div className='flex flex-col ml-[20px]'>
                                        <p className='font-poppins text-[1rem] text-secondary font-regular'>Model</p>
                                        <Dropdown selected={selected} setSelected={setSelected} Options={['120d', '320d', '420d', '520d', '720d', 'M3', 'M4', 'M5', 'M8']}/>
                                    </div>
                                    <div className='flex flex-col ml-[20px]'>
                                        <p className='font-poppins text-[1rem] text-secondary font-regular'>Fuel Type</p>
                                        <Dropdown selected={selected} setSelected={setSelected} Options={['Diesel', 'Gasoline', 'Electric', 'Hybrid', 'Other']}/>
                                    </div>
                                </div>
                                <button className=" w-[260px] text-primary ease-in-out absolute bottom-[20px] right-[20px]
                                                        rounded-[10px] bg-third text-[20px] py-[5px] duration-150
                                                        cursor-pointer font-poppins hover:bg-[#037f85]" 
                                            type="button">Apply filters</button>
                            </div>
                        </div>
                        <div className='w-full h-auto my-[20px] justify-between flex flex-start flex-row flex-wrap'>
                            {
                                objectVehicles.map((vehicle) => (
                                    <Fade bottom distance='20%'>
                                        <VehicleCard id={vehicle._id} Name={vehicle.Brand} Price={vehicle.Price} Consumption={vehicle.Consumption}
                                                    Image={vehicle.Brand.replace(/\s/g, '').toLowerCase()} Model={vehicle.Model} ImgModel={vehicle.Model.replace(/\s/g, '').toLowerCase()}
                                                    FuelType={vehicle.FuelType}/>
                                    </Fade>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RentACarObjectPage