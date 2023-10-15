import React, { createContext, useContext, useEffect} from 'react'
import { useState } from 'react'
import logo from "../images/rentitLogo.png"
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaCaretDown } from "react-icons/fa";
import Dropdown from './Dropdown'

const Navbar = (props) => {
	const {loggedUserName , logUser,logOutUser} = props;
	const[toggle, setToggle] = useState(false);
	const[render, setrender] = useState(0);
	const [ime, setime] = useState(loggedUserName);	
	useEffect(() => {

		if(!loggedUserName){
			
		
		setime("Log in");
		
		}else{
			setime(loggedUserName);						
		}
		
	  }); //render
	
	function clearLocalStorage () {
		localStorage.clear();
		logOutUser();
		setime("Log in");  		    
	}
	
	return (
		
		<nav className='w-full flex py-6 px-16 absolute left-0 top-0 z-[9999]
						justify-between items-center navbar'>
			<a href="/">
				<Link to = "/">
				<img src={logo} alt="logo" 
					className='w-[130px] h-[35px]' />
				</Link>
			</a>			
			<ul className='list-none sm:flex hidden justify-end 
							items-center flex-1'>
				<Link to = "/">
					<li className='font-poppins hover:text-primary
									font-normal cursor-pointer
									text-[16px] text-black mr-10'
									>
						<a href='/' onClick={clearLocalStorage}>Home</a>
					
					</li>
				</Link>
				<li className='font-poppins hover:text-primary
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/objects'>Objects</a>
				</li>
				<li className='font-poppins hover:text-primary
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/'>Contact</a>
				</li>
				<li className='font-poppins hover:text-primary
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/'>Chart</a>
				</li>
				<li>
				{
					ime === "Log in" ?
					<li className='font-poppins hover:text-primary
							font-normal cursor-pointer
							text-[16px] text-black'>
						<Link to = "/login">
						{ime} 
						</Link>						
					</li>	
					
					:
					<li className='font-poppins hover:text-primary
							font-normal cursor-pointer
							text-[16px] text-black'>
						<Link to = "/profile">
						{ime} 
						</Link>						
					</li>
					
         			
				}
				</li>									
			</ul>			
		</nav>
		
  	)
}


export default Navbar;
