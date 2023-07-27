import React, { createContext, useContext, useEffect} from 'react'
import { useState } from 'react'
import logo from "../images/rentitLogo.png"
import menu from "../images/menu.png"
import close from "../images/close.png"
import {Link} from "react-router-dom"

const Navbar = (props) => {
	const {loggedUserName , logUser,logOutUser} = props;
	const[toggle, setToggle] = useState(false);
	const[render, setrender] = useState(0);
	const [ime, setime] = useState("Log in");	
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
		
		<nav className='w-full flex py-6 relative
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
					<li className='font-poppins hover:text-third
									font-normal cursor-pointer
									text-[16px] text-black mr-10'
									>
						<a href='/' onClick={clearLocalStorage}>Home</a>
					
					</li>
				</Link>
				<li className='font-poppins hover:text-third
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/objects'>Objects</a>
				</li>
				<li className='font-poppins hover:text-third
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/'>Contact</a>
				</li>
				<li className='font-poppins hover:text-third
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/'>Chart</a>
				</li>	
				<li className='font-poppins hover:text-third
							font-normal cursor-pointer
							text-[16px] text-black'>
						<Link to = "/login">
						{ime}
						</Link>						
					</li>											
			</ul>			
		</nav>
		
  	)
}


export default Navbar;
