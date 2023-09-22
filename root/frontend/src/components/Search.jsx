import React from 'react';
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';

const Search = () => {

	const[input, setInput] = useState("");

  	return (
		<div className='input-wrapper flex items-center bg-white
						px-[15px] py-[15px] rounded-md h-[45px] w-[385px]
						shadow-[3px_3px_10px_6px_rgba(0,0,0,0.2)]'>
			<input placeholder='Type to search...' 
					className='w-[320px] ml-2.5 border-none 
								text-[20px] focus:outline-none'
					value={input} 
					onChange={(i) => setInput(i.target.value)}/>
			<button className='w-[20px] items-center '>
				<FaSearch className='text-[20px] hover:text-[23px] text-secondary hover:text-third ease-in-out duration-150'/>
			</button>
		</div>
  	)
}

export default Search