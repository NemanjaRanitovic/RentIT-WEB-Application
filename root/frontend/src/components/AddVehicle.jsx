import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import backgroundImage from '../images/rentitLogo.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const AddVehicle = () => {

	const [items, setItems] = useState([]);
	const [Manager, setManager] = useState('');
	const [CarBrand, setCarBrand] = React.useState('');
	const [DisplayArray, setDisplayArray] = useState([])
	const [CarModel,setCarModel] = React.useState('');
	const [numberOfDoors, setnumberOfDoors] = useState('');
	const [FuelType, setFuelType] = useState(''); 
	const [FuelConsumption, setFuelConsumption] = useState('')
	const [BodyworkType, setBodyworkType] = useState('')
	const [Valute, setValute] = useState('')
	const [Price, setPrice] = useState('')
	const [PriceDisplay, setPriceDisplay] = useState('');
	const [error, setError] = useState(false);



	const handleChange = (event) => {
		setCarBrand(event.target.value);
		setCarModel('');
		if(event.target.value === `BMW`){
			setDisplayArray(BMWTypes);
		}else if(event.target.value === `MERCEDES BENZ`){
			setDisplayArray(MERCTypes);
		};
	};

	const updateModel = (event) => {
		setCarModel(event.target.value);    
	}
	
	const updateFuelType = (event) =>{
		setFuelType(event.target.value);
	}

	const updateDoorNumber = (event) => {
		setnumberOfDoors(event.target.value);
	}
	
	const updateValute = (event) =>{
		setValute(event.target.value);    
	}
	
	const updateFuelConsumption = (event) => {
		setFuelConsumption(event.target.value);    
	}

	const updateBodyworkType = (event) => {
		setBodyworkType(event.target.value);
	}
	const updatePrice = (event) =>{
		const inputPrice = parseFloat(event.target.value);
		setPrice(inputPrice);
	};

	const AddVehicle = async(event) => {
		try{
			const config = {
				headers:{
					"Content-type":"application/json"
				}
			}
			const Brand = CarBrand;
			const Model = CarModel;
			const Type = BodyworkType;
			const Consumption = FuelConsumption;
			const {data} = await axios.put('/vehicles/addVehicle',{Brand,Model,Price,Type,FuelType,Consumption,Manager,numberOfDoors},config); //user routes, user controllers           
		}catch(error){
			setError(error.response.data.message);
		}
	}

	useEffect(()=>{
		priceDisplay(Price);
	},[Price]);

	const priceDisplay = (price) =>{
		if(Valute === "EUR"){
		setPriceDisplay(Math.floor(price));
		}
		if(Valute ==="GBP"){
		setPriceDisplay(Math.floor(price*1.15));
		}
		if(Valute ==="RSD"){
		setPriceDisplay(Math.floor(price/117));
		}
		if(Valute ==="USD"){
		setPriceDisplay(Math.floor(price*0.94))
		}
	}

	const divStyle = {
		backgroundSize: 'auto',
		backgroundImage: `url(${backgroundImage})`,
		backgroundPosition: 'center', 
		backgroundRepeat: 'no-repeat',
		backgroundColor: 'rgba(255, 255, 255, 0.2)'
	}
	const CarBrands = [
		'BMW',
		'MERCEDES BENZ',
		'BENTLEY',
		'MUSTANG',
		'CHEVROLET',
		'TOYOTA',
		'HYUNDAI',
		'PEUGEOT',
		'CITROEN'
	]
	const BodyWorks = [
		'Car',
		'Truck',
		'Motorcycle',
		'Other'
	]
	const BMWTypes = [
		'M2','M3','M5','E36','E46','F10','E90'
	]
	const MERCTypes = [
		'A200','A220','C200','C220','E200','E220','S200', 'S400', 'C63 AMG', 'E63 AMG', 'G400', 'G63 AMG'
	]
	

	const currencies = [
		{
		value: 'USD',
		label: '$',
		},
		{
		value: 'EUR',
		label: '€',
		},
		{
		value: 'RSD',
		label: 'RSD',
		},
		{
		value: 'GBP',
		label: '£',
		},
	];

	const marks = [
		{
		value: 0,
		label: '0l/100km',
		},
		{
		value: 10,
		label: '10l/100km',
		}
	];
	

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('userInfo'));
		if (items) {
		setItems(items);
		setManager(items.Username);
		}
	}, []);

	return (
		<div className='w-[1980px] h-[800px] relative flex items-center justify-center'>
		<div className='w-3/4 h-3/4 flex bg-[#f4f5fa] rounded-3xl font-poppins text-[32px] text-black relative flex justify-center' 
		style={{
			backgroundColor: 'rgba(255, 255, 255, 0.2)'
		}}>
			Select properties of the vehicle
			<div style={divStyle} className="absolute inset-0 opacity-20">
				
			</div>  
		</div>

		<div className='w-3/4 h-2/3 left-64 top-44 absolute opacity-60'>
			<div className='top-6 left-6 relative'>
				<Box sx={{ minWidth: 120 }}>
					<FormControl className='w-1/6'>
						<InputLabel id="demo-simple-select-label">Car brand</InputLabel>
						<Select labelId="demo-simple-select-label"
								id="demo-simple-select"
								value={CarBrand}
								label="Car brand"
								onChange={handleChange}>          
							{CarBrands.map((brand)=>(
								<MenuItem value={brand}>
											{brand}												
								</MenuItem>
							))}      
						</Select>
					</FormControl>
				</Box>       
			</div> 
			<div className='relative top-10 left-6'>
			{
				CarBrand === "BMW"?   
						
				<Box sx={{ minWidth: 120 }}>
					<FormControl className='w-1/6'>
						<InputLabel id="demo-simple-select-label">Car model</InputLabel>
							<Select labelId="demo-simple-select-label1"
									id="demo-simple-select1"
									value={CarModel}
									label="Car Model"
									onChange={updateModel}>          
								{DisplayArray.map((marka)=>(
									<MenuItem value={marka}>
										{marka}												
									</MenuItem>
								))}      
							</Select>
					</FormControl>
				</Box> 
				
				//svakako imam nizove sa svim markama, postavim jedan display niz na vrednosti onog niza ciju marku sam izabrao
				:
				CarBrand ==="MERCEDES BENZ"?

				<Box sx={{ minWidth: 120 }}>
					<FormControl className='w-1/6'>
						<InputLabel id="demo-simple-select-label">Car model</InputLabel>
							<Select labelId="demo-simple-select-label1"
									id="demo-simple-select1"
									value={CarModel}
									label="Car Model"
									onChange={updateModel}>          
								{DisplayArray.map((marka)=>(
									<MenuItem value={marka}>
										{marka}												
									</MenuItem>
								))}      
							</Select>
					</FormControl>
				</Box> 
				:
				'NIJEDAN'
			}
			</div>
			<div className='absolute top-[23px] left-[300px] rounded-xl border-2 w-1/6 h-[100px] opacity-100'
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}>
			<FormControl>
				<FormLabel id="demo-controlled-radio-buttons-group">Number of doors</FormLabel>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					value={numberOfDoors}
					onChange={updateDoorNumber}
				>
					<FormControlLabel value="3 doors" control={<Radio />} label="3 Doors" />
					<FormControlLabel value="5 doors" control={<Radio />} label="5 Doors" />
				</RadioGroup>
			</FormControl>
			</div>

			<div className='absolute top-[23px] left-[550px] rounded-xl border-2 w-1/6 h-[100px] opacity-100'
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}>
			<FormControl>
				<FormLabel id="demo-controlled-radio-buttons-group">Fuel type</FormLabel>
				<RadioGroup
					aria-labelledby="demo-controlled-radio-buttons-group"
					name="controlled-radio-buttons-group"
					value={FuelType}
					onChange={updateFuelType}
				>
					<FormControlLabel value="Petrol" control={<Radio />} label="Petrol" />
					<FormControlLabel value="Diesel" control={<Radio />} label="Diesel" />
				</RadioGroup>
			</FormControl>
			</div>

			<div className='absolute top-[173px] left-[320px] w-1/6 h-1/6'>
				Fuel Consumption
				<Box sx={{ width: 300 }}>
					<Slider
						aria-label="Fuel consumption"
						defaultValue={5}
						step={0.1}
						valueLabelDisplay="auto"
						max ={30}
						marks={marks}
						onChange={updateFuelConsumption}
					/>
				</Box>
			</div>

			<div className='absolute top-[173px] left-[22px] w-[250px] h-1/6'>
				
				<Box sx={{ minWidth: 120 }}>
					<FormControl className='w-full'>
						<InputLabel id="demo-simple-select-label">Bodywork type</InputLabel>
						<Select
						labelId="demo-simple-select-label1"
						id="demo-simple-select1"
						value={BodyworkType}
						label="Bodywork type"
						onChange={updateBodyworkType}
						>          
						{BodyWorks.map((bodywork)=>(
						<MenuItem value={bodywork}>
							{bodywork}												
						</MenuItem>
						))}      
						</Select>
					</FormControl>
					</Box> 
			</div>
			<div className='absolute top-[243px] left-[14px]'>
				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': { m: 1, width: '10ch' },
					}}
					noValidate
					autoComplete="off"
					>
					<div>
						<TextField
						id="outlined-select-currency"
						select
						label="Select"
						defaultValue="EUR"
						helperText="Currency"
						value={Valute}
						onChange={updateValute}
						>
						{currencies.map((option) => (
							<MenuItem key={option.value} value={option.value}>
							{option.label}
							</MenuItem>
						))}
						</TextField>
					</div>
				</Box>              
			</div>

			<div className='absolute top-[243px] left-[105px] w-[200px] h-[100px]'>
					<Box
						component="form"
						sx={{
						'& > :not(style)': { m: 1, width: '18.5ch' },
						}}
						noValidate
						autoComplete="off"
					>
						<TextField id="outlined-basic" label="Price" variant="outlined" value={Price} onChange={updatePrice}/>
					</Box>
			</div>
			<div className='absolute top-[350px] left-[16px] rounded-xl flex border-2 w-[200px] h-[60px] opacity-100'
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignContent:'center'
			}}>
				{PriceDisplay}€
				<br />
				Price is converted to EUR
			</div>
			
			
			
		</div>
		<div className='absolute top-[570px] left-[1500px]'>
				<Button variant="contained" onClick={AddVehicle}>Add vehicle</Button>
			</div>
		</div>
	)
}

export default AddVehicle