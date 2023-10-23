import React from 'react'
import { Link } from 'react-router-dom'

const VehicleCard = ({Image, Name, Price}) => {
	return (
		<div className='bg-[#f5f6fa] rounded-md hover:translate-y-[-0.5rem] ease-in-out duration-300 mt-[20px]
						hover:shadow-[3px_3px_10px_6px_rgba(0,0,0,0.2)] h-[430px] shadow-xl w-[370px] cursor-pointer'>
			<div className='flex flex-col relative'>
				<Link to={'/Object/vehicle'}>
					<div className="container z-[0] absolute bg-[#f5f6fa] rounded-md">
						<img src={Image}/>
						<p className='absolute align-center mb-[5px] ml-[89px]'>Show model and details</p>
					</div>
				</Link>
				<div className='z-[1] px-3 rounded-t-xl absolute top-[190px] bg-[#f5f6fa] w-full'>
					<p className='md:text-[2rem] text-[35px] font-semibold font-poppins text-secondary'>{Name}</p>  
					<div className='flex flex-row justify-between mt-[10px]'>
						<p className='text-[18px] font-regular text-[#828282]'>Horsepower:</p> 
						<p className='text-[18px] font-regular text-[#828282]'>144</p> 
					</div>  
					<div className='flex flex-row justify-between'>
						<p className='text-[18px] font-regular text-[#828282]'>Transmition:</p> 
						<p className='text-[18px] font-regular text-[#828282]'>Manuel</p> 
					</div>
					<div className='flex flex-row justify-between'>
						<p className='text-[18px] font-regular text-[#828282]'>Consumption:</p> 
						<p className='text-[18px] font-regular text-[#828282]'>6.2l/100km</p> 
					</div>
					<div className='flex flex-row justify-between items-center mt-[30px] mb-[30px]'>
						<p className='md:text-[1.5rem] text-[35px] font-semibold font-poppins text-secondary'>{Price}</p> 
						<button className="w-[120px] text-primary ease-in-out rounded-md bg-third text-[20px] py-[5px] duration-150
											cursor-pointer font-poppins hover:bg-[#037f85]" 
								type="button">Rent now</button>
					</div>
				</div>              
			</div>
		</div>
	)
}

export default VehicleCard