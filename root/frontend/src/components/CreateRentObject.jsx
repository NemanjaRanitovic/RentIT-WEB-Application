import React, { useEffect, useState } from 'react'
import { useNavigate, Link} from "react-router-dom";
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'
import LCG from 'leaflet-control-geocoder'
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const icon = L.icon({ 
    iconRetinaUrl:iconRetina, 
    iconUrl: iconMarker, 
    shadowUrl: iconShadow, 
	iconSize: [25,41], 
	iconAnchor: [12,41]
});


const CreateRentObject = () => {
	const navigate = useNavigate()
	const [Manager, setManagerUsername] = useState("")
	const [Name, setName] = useState("")
	const [Latitude, setLatitude] = useState(45.2396)
	const [Longitude, setLongitude] = useState(19.8227)
	const [FullAddress, setFullAddress] = useState("")
	const [Street, setStreetName] = useState("")
	const [Number,setStreetNumber] = useState("")
	const [City, setCityName] = useState("")
	const [PostalCode, setPostalCode] = useState("")
	const [Managers, setManagers] = useState([])
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)	
	const geocoder = L.Control.Geocoder.nominatim();

	useEffect(() => {
		GetAllManagers();
	}, [])

	const handleSelectChange = (event) => {
		setManagerUsername(event.target.value);				
	}
	const temporary = async(Location)=>{
		const {data} = await axios.post('/rentObjects/newRentACarObject',{Name,Location,Manager,Street,City,Number,Latitude,Longitude})
		const ObjectId = data._id;
		const Username = Manager;		
		const {data2} = await axios.post('/users/assignManager',{Username,ObjectId});
		console.log(data);
	}

	const CreateRentACarObject = async (event) => {
		event.preventDefault();
        try{
          const config = {
            headers:{
              "Content-type":"application/json"
            }
          }
          setLoading(true);
            const {data} = await axios.post('/locations/newLocation',{Street,Number,City,PostalCode,Latitude,Longitude,},config); //prvo kreiranje lokacije   
			//Ovde izmedju izvuci id od napravljene lokacije RADNO VREME ME MRZI SADA TO CEMO NEKAD			
			const Location = data._id;
			temporary(Location);
			//const {objectData} = await axios.post('/rentObjects/newRentACarObject',{Name,Location,Manager,Street,City,Number,Latitude,Longitude})                                                                                                        //MENJAJU PODACI A NE DA JE REGISTRACIJA OD 0 
          setLoading(false);
        }catch(error){
          setError(error.response.data.message);
        }
	}

	const MapClick = () => {

		const map = useMapEvent({
			click(e){
				const{lat,lng} = e.latlng;
				setLatitude(lat);
				setLongitude(lng);
				let marker;
				geocoder.reverse(e.latlng, map.options.crs.scale(map.getZoom()), results => {
					var r = results[0];
					console.log(r);
					if(r.properties.address.city){
						setCityName(r.properties.address.city);
					}else{
						setCityName(r.properties.address.city_district);
					}
					setStreetName(r.properties.address.road);
					setPostalCode(r.properties.address.postcode);
					setStreetNumber(r.properties.address.house_number);
					setFullAddress(Street+" "+Number+" "+City+" "+PostalCode);					
				})
			},
		});
		return null;	
	};

	const GetAllManagers = async (event)=> {
		
		try{
			const config = {
				headers:{
				"Content-type":"application/json"
				}
			}
			setLoading(true);
			const { data } = await axios.get('/users/getAllUnasignedManagers',config); 
			setManagers(data);					                                                                                                   
			setLoading(false);
		}catch(error){
			setError(error.response.data.message);
		}
	}	

	return (

			<div className='h-[900px] flex'>
				<div className='w-[850px] h-[750px] bg-white shadow-2xl relative
								items-center m-auto my-[50px] rounded-[20px] overflow-hidden'>
					<div className='flex flex-col h-full'>
						<div className='h-[600px] absolute bg-blue-gradient w-[160%]
										rounded-[50%]  flex flex-col top-[-360px] left-[-400px]'>
							<h1 className='text-[36px] font-poppins text-primary 
											mt-[420px] z-10 ml-[450px] font-semibold'>Create</h1>
							<h1 className='text-[36px] font-poppins text-primary 
											z-10 ml-[450px] font-semibold leading-[25px]'>Rent object</h1>										
						</div>
					</div>
					<div className='flex flex-col'>
						<div className='h-[60%] absolute flex flex-row top-[300px]'>
							<div className='flex flex-col'>
								<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
												w-[130%] border-[0px] rounded-[10px] mt-[10px] ml-[50px]'
										placeholder='Name'
										value={Name}
										type='text'
										onChange={(N)=>setName(N.target.value)}/>
								<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
												w-[130%] border-[0px] rounded-[10px] mt-[30px] ml-[50px]'
										placeholder='Last name'
										value={Latitude}
										type='float'
										onChange={(LN)=>setLatitude(LN.target.value)}/>
								<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
												w-[130%] border-[0px] rounded-[10px] mt-[30px] ml-[50px]'
										type='float'
										value={Longitude}
										onChange={(D)=>setLongitude(D.target.value)}/>
								<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
												w-[130%] border-[0px] rounded-[10px] mt-[30px] ml-[50px]'
										placeholder='Address'
										value={FullAddress}	
										contentEditable={false}								
										onChange={(S)=>setFullAddress(S.target.value)}/>
							</div>



							<div className='flex flex-col ml-[150px]'>
								<FormControl className='bg-primary text-[#000000] h-[40px] top-[10px] w-[150px] font-poppins'>
									<InputLabel className='h-[40px] w-[150px] mt-[-10px] ml-[20px] border-[0px]' variant="standard" htmlFor="uncontrolled-native">
										Manager
									</InputLabel>
									<NativeSelect className='h-[40px] w-[150px] border-[0px]'												 
												 onChange={handleSelectChange}>										
										{Managers.map((manager)=>(
											<MenuItem value={manager.Username}>
												{manager.Username}												
											</MenuItem>
										))}										
									</NativeSelect>
								</FormControl>																
							</div>

						</div>
						<div className='absolute top-[650px] right-[0] justify-center items-center mr-[115px]'>
							<button className="h-[40px] font-poppins duration-150 cursor-pointer hover:bg-[#037f85]
												w-[130%] border-[0px] rounded-[10px] mt-[30px] mr-[150px]
												text-primary ease-in-out rounded-[10px] bg-third text-[20px]" 
									onClick={ CreateRentACarObject }
									type="button" >
								Register
							</button>
						</div>
					</div>				
				</div>
				<div className='w-[700px] h-[800px] mr-[150px] mt-[50px]'>
				<MapContainer   className='w-[700px] h-[750px]' 
								center={[45.2396, 19.8227]} 
								zoom={13}
								maxZoom={20}
								attributionControl={true}
								zoomControl={true}
								doubleClickZoom={true}
								scrollWheelZoom={true}
								dragging={true}
								animate={true}
								easeLinearity={0.35}>
								<MapClick />
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>				
				</MapContainer>
				</div>
			</div>

	)
}

export default CreateRentObject