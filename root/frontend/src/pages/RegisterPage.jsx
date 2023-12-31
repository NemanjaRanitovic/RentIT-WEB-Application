import React, { useState } from 'react'
import { useNavigate, Link} from "react-router-dom";
import axios from 'axios';


const Register = () => {
	const navigate = useNavigate()
	const [Username, setUsername] = useState("")
	const [Password, setPassword] = useState("")
	const [Email, setEmail] = useState("")
	const [Name, setName] = useState("")
	const [Lastname, setLastName] = useState("")
	const [BirthDate, setBirthDate] = useState("")
	const [Sex, setSex] = useState("")
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)


	const register = async (event)=> {
		event.preventDefault();
		try{
			const config = {
				headers:{
				"Content-type":"application/json"
				}
			}
			setLoading(true);
			const { data} = await axios.post('/users/register',{Name,Lastname,Sex,Email,Username,Password,BirthDate},config); //user routes, user controllers
			navigate("/");
			setLoading(false);
		}catch(error){
			setError(error.response.data.message);
		}
	}

	return (
		<>
			<div className='w-[850px] h-[750px] bg-[#f5f6fa] justify-center shadow-2xl relative
							items-center m-auto my-[50px] rounded-[20px] overflow-hidden'>
				<div className='flex flex-col h-full'>
					<div className='h-[600px] absolute bg-third w-[160%]
									rounded-[50%]  flex flex-col top-[-360px] left-[-400px]'>
						<h1 className='text-[36px] font-poppins text-primary 
										mt-[420px] z-10 ml-[450px] font-semibold'>Create</h1>
						<h1 className='text-[36px] font-poppins text-primary 
										z-10 ml-[450px] font-semibold leading-[25px]'>Account</h1>
						<p className='text-[16px] font-poppins text-primary 
										z-10 ml-[450px] font-medium leading-[75px]'>Please sign up to contiune</p>					
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
									value={Lastname}
									type='text'
									onChange={(LN)=>setLastName(LN.target.value)}/>
							<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
											w-[130%] border-[0px] rounded-[10px] mt-[30px] ml-[50px]'
									type='date'
									value={BirthDate}
									onChange={(D)=>setBirthDate(D.target.value)}/>
							<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
											w-[130%] border-[0px] rounded-[10px] mt-[30px] ml-[50px]'
									placeholder='Gender'
									value={Sex}
									type='email'
									onChange={(S)=>setSex(S.target.value)}/>
						</div>
						<div className='flex flex-col ml-[150px]'>
							<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
												w-[130%] border-[0px] rounded-[10px] mt-[10px] ml-[50px]'
									placeholder='Username'
									value={Username}
									type='text'
									onChange={(U)=>setUsername(U.target.value)}/>
							<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
												w-[130%] border-[0px] rounded-[10px] mt-[30px] ml-[50px]'
									placeholder='Password'
									value={Password}
									type='password'
									onChange={(P)=>setPassword(P.target.value)}/>
							<input className='bg-primary text-[#000000] h-[40px] font-poppins pl-[10px]
												w-[130%] border-[0px] rounded-[10px] mt-[30px] ml-[50px]'
									placeholder='E-mail'
									value={Email}
									type='email'
									onChange={(E)=>setEmail(E.target.value)}/>
						</div>
					</div>
					<div className='absolute top-[650px] right-[0] justify-center items-center mr-[115px]'>
						<button className="h-[40px] font-poppins duration-150 cursor-pointer hover:bg-[#037f85]
											w-[130%] border-[0px] rounded-[10px] mt-[30px] mr-[150px]
											text-primary ease-in-out rounded-[10px] bg-third text-[20px]" 
								onClick={register}
								type="button" >
							Register
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Register