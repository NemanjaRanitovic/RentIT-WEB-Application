import React from 'react';
import styles from '../style';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import images from './images';
import percent from '../images/percent.png'

const HeroSection = () => {

	const [currentIndex, setCurrentIndex] = useState(0);
	const carousel = useRef();
  
	const nextSlide = () => {
	  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};
  
	useEffect(() => {
		const interval = setInterval(nextSlide, 2500);
		return () => clearInterval(interval);
	  }, [currentIndex]);
	

 	return (
		<section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
			<div className='flex flex-col pb-[120px]'>
				<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
					<div className='flex flex-row items-center py-[4px] px-6 bg-discount-gradient rounded-[10px] mb-10'>
						<img src={percent} alt="discount" className='w-[24px] h-[24px] '/>
						<p className={`${styles.paragraph} ml-2 text-white`}>
							<span className='text-gradient'>20%</span> Discount for {" "}
							<span className='text-gradient'>First</span> Registration
						</p>
					</div>
				</div>
				
				<div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
					<div className='flex flex-row justify-between
									items-center w-full'>
						<h1 className='flex-1 font-poppins font-semibold ss:text-[86px] 
										text-[52px] text-secondary 
										ss:leading-[80px] leading-[75px] w-[520px]'>
							Find a car <br className='sm:block hidden'/>{" "}
							<span className='text-gradient'>ANYWHERE</span>{" "} 
							<br/>In the world
						</h1>
					</div>	
				</div>
			</div>
			
			<motion.div animate={{y:-20}}>
				<motion.div ref={carousel} 
							whileTap={{cursor:"grabbing"}} className='cursor-grab overflow-hidden'>
					<motion.div drag="x" dragConstraints={{right:0, left:-2000}}
								initial={{ x: 0 }}
								animate={{ x: -currentIndex * 1000 }}
								transition={{duration: 0.7, type: "spring" }} 
								className='flex relative w-[100%] h-[100%] z-[5] mr-[20px]'>
						{images.map(image =>{
							return(
								<motion.div className='w-[800px] h-[400px] z-[5] 
														p-[40px] mr-[100px] ml-[100px] pointer-events-none' key={image}>
									<img src={image} alt=""/>
								</motion.div>
							);
						})}
					</motion.div>
				</motion.div>
			</motion.div>	

    	</section>
  	)
}

export default HeroSection