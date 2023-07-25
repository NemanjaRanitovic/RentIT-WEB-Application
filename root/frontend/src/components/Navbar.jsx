import React from 'react'
import { useState } from 'react'
import logo from "../images/rentitLogo.png"
import menu from "../images/menu.png"
import close from "../images/close.png"


const Navbar = () => {

	const[toggle, setToggle] = useState(false);

	return (
		<nav className='w-full flex py-6 
						justify-between items-center navbar'>
			<a href='/'>
				<img src={logo} alt="logo" 
					className='w-[130px] h-[35px]' />
			</a>			
			<ul className='list-none sm:flex hidden justify-end 
							items-center flex-1'>
				<li className='font-poppins
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/'>Home</a>
				</li>
				<li className='font-poppins
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/'>Objects</a>
				</li>
				<li className='font-poppins
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/'>Contact</a>
				</li>
				<li className='font-poppins
								font-normal cursor-pointer
								text-[16px] text-black mr-10'>
					<a href='/'>Chart</a>
				</li>
				<li className='font-poppins
								font-normal cursor-pointer
								text-[16px] text-black'>
					<a href='/login'>Login</a>
				</li>
			</ul>

			<div className='sm:hidden flex flex-1 
							justify-end items-center'>
				<img src={toggle ? close : menu}
						alt="menu" className='w-[28px] h-[28px]
												object-contain'
						onClick={() => setToggle((prev) => !(prev))}/>
				<div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
								absolute top-20 right-0 mx-4 my-2 min-w-[140px]
								rounded-xl sidebar`}>
					<ul className='list-none flex flex-col justify-end 
									items-center flex-1'>
						<li className='font-poppins
										font-normal cursor-pointer
										text-[16px] text-white mb-10'>
							<a href='/'>Home</a>
						</li>
						<li className='font-poppins
										font-normal cursor-pointer
										text-[16px] text-white mb-10'>
							<a href='/'>Objects</a>
						</li>
						<li className='font-poppins
										font-normal cursor-pointer
										text-[16px] text-white mb-10'>
							<a href='/'>Contact</a>
						</li>
						<li className='font-poppins
										font-normal cursor-pointer
										text-[16px] text-white mb-10'>
							<a href='/'>Chart</a>
						</li>
						<li className='font-poppins 
										font-normal cursor-pointer
										text-[16px] text-white'>
							<a href='/login'>Login</a>
						</li>
					</ul>

				</div>

			</div>
		</nav>
  	)
}

export default Navbar