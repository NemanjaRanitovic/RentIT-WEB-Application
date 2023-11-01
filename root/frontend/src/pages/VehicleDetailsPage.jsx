import axios from 'axios';
import React, { useEffect, useState, Suspense} from 'react'
import { useParams } from 'react-router-dom'
import {GoNote} from 'react-icons/go'
import { Bmwm3 } from '../components_3d/Bmwm3';

import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const VehicleDetailsPage = () => {

	const {vehicleId} = useParams();
	const [vehicle, setVehicle]  = useState();

	const fetchVehiclel = async() => {
		const {data} = await axios.get(`/vehicles/getVehicleById/${vehicleId}`);
		setVehicle(data);
	}

	useEffect(() =>{
		fetchVehiclel();
	}, [vehicleId])

	return (
		<div className='px-16 mt-[100px] mb-[100px] h-auto flex flex-row justify-between'>
			<div className='flex flex-col rounded-md shadow-xl h-auto w-[30%] bg-[#f5f6fa]'>
				<img src={`/carImages/${vehicle?.Brand.replace(/\s/g, '').toLowerCase()}${vehicle?.Model.replace(/\s/g, '').toLowerCase()}.png`} 
					className="w-[400px] mx-auto mt-2"/>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-10'>
					<p className='text-[24px] font-regular text-[#828282]'>Brand:</p> 
					<p className='text-[24px] font-regular text-[#828282]'>{vehicle?.Brand}</p> 
				</div>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-4'>
					<p className='text-[24px] font-regular text-[#828282]'>Model:</p> 
					<p className='text-[24px] font-regular text-[#828282]'>{vehicle?.Model}</p> 
				</div>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-4'>
					<p className='text-[24px] font-regular text-[#828282]'>Horsepower:</p> 
					<p className='text-[24px] font-regular text-[#828282]'>450</p> 
				</div>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-4'>
					<p className='text-[24px] font-regular text-[#828282]'>Transmition:</p> 
					<p className='text-[24px] font-regular text-[#828282]'>Automatic</p> 
				</div>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-4'>
					<p className='text-[24px] font-regular text-[#828282]'>Body work type:</p> 
					<p className='text-[24px] font-regular text-[#828282]'>{vehicle?.Type}</p> 
				</div>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-4'>
					<p className='text-[24px] font-regular text-[#828282]'>Fuel type:</p> 
					<p className='text-[24px] font-regular text-[#828282]'>{vehicle?.FuelType}</p>
				</div>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-4'>
					<p className='text-[24px] font-regular text-[#828282]'>Consumption:</p> 
					<p className='text-[24px] font-regular text-[#828282]'>{vehicle?.Consumption}l/100km</p>
				</div>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-4'>
					<p className='text-[24px] font-regular text-[#828282]'>Number of doors:</p> 
					<p className='text-[24px] font-regular text-[#828282]'>5</p>
				</div>
				<div className='flex flex-row font-poppins justify-between mx-4 mt-4'>
					<p className='text-[24px] font-regular text-[#828282]'>Status:</p> 
					<p className='text-[24px] font-regular text-[#4cd137]'>Available</p>
				</div>
				<hr className='border-[#c9c9c9] mx-4'/>
				<div className='flex flex-row justify-between items-center my-auto mx-4'>
					<button className="w-[50%] text-primary ease-in-out rounded-md bg-third text-[20px] py-[5px] duration-150
										cursor-pointer font-poppins hover:bg-[#037f85] items-center" 
							type="button">Add to chart</button>
				</div>
			</div>
			<div className='flex flex-col rounded-md shadow-xl h-auto w-[67%]'>
				<div className='flex h-[70vh] pt-[50px] w-full cursor-grabbing'>
					<Canvas>
						<OrbitControls enableZoom={false}/>
						<ambientLight intensity={2} />
						<directionalLight position={[-2, 8, 5]} intensity={2} />
						<Suspense fallback={null}>
							{
								{
									'M3' : <Bmwm3 />,
								}[vehicle?.Model] ||     
								<Html center>
									<div className='w-[610px] mb-16 font-poppins font-medium text-[30px] text-secondary'>
										<p>3D model of this vehicle is not available.</p>
									</div>
							  	</Html>
							}
						</Suspense>
					</Canvas>
				</div>
				<div className='flex bg-[#f5f6fa] rounded-md rounded-t-2xl shadow-2xl'>
					<hr className='border-[#c9c9c9] mx-4 mt-[20px]'/>
					<div className='flex flex-col h-[200px] mx-4 mt-2'>
						<div className='flex flex-row text-[24px] text-[#828282] items-center'>
							<GoNote/>
							<p className='ml-[5px]'>Description:</p>
						</div>
						<p className='text-[24px] font-regular text-[#828282]'>Good performance car</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default VehicleDetailsPage