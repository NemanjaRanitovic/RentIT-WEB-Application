import React from 'react';
import styles from '../style';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';
import images from './images';
import percent from '../images/percent.png';
import Objects from './Objects';
import gsap from 'gsap';

const HeroSection = () => {

	const [currentIndex, setCurrentIndex] = useState(0);
	const carousel = useRef();
	const[selected, setSelected] = useState("");
  
	
	const nextSlide = () => {
	  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};
  
	useEffect(() => {
		const interval = setInterval(nextSlide, 2500);
		return () => clearInterval(interval);
	  }, [currentIndex]);
	
	const parallaxElements = document.querySelectorAll(".parallax");
	let xValue = 0;
	let yValue = 0;

	window.addEventListener("mousemove", (e) => {
		xValue = e.clientX - window.innerWidth/2;
		yValue = e.clientY - window.innerHeight/2;

		parallaxElements.forEach((element) => {
			let speedx = element.dataset.speedx;
			let speedy = element.dataset.speedy;
			element.style.transform = `translateX(calc(-50% + ${xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
		})
	})

	useEffect(() => {
		// Function to animate the elements
		const animateElements = () => {
		  const parallaxElements = document.querySelectorAll('.parallax');
	
		  const timeline = gsap.timeline();
	
		  Array.from(parallaxElements)
		  	.filter(el => !el.classList.contains("text"))
			.forEach((el) => {
				timeline.from(
				el,
				{
					top: `${el.offsetHeight / 2 - +el.dataset.distance}px`,
					duration: 2,
					ease: "power3.out",
				},
				'start'
				);
		  	});
			const header2 = document.querySelectorAll('.p');

			gsap.fromTo(
				header2,
				{
				opacity: 0,
				y: 50,
				},
				{
					opacity: 1,
					y: 0,
					duration: 1.5,
					delay: 2, 
					ease: 'power3.out',
				}
			);

			const header1 = document.querySelectorAll('.h');

			gsap.fromTo(
				header1,
				{
				opacity: 0,
				y: -50, 
				},
				{
					opacity: 1,
					y: 0,
					duration: 1.5,
					delay: 2,
					ease: 'power3.out',
				}
			);
		};

		window.onload = animateElements;
	
	  }, []);

 	return (
		<>
			<div className='h-[100vh] w-[100vw] overflow-hidden relative'>
				<img src='/bg3-background.png' className='top-0 mx-[1px] z-[1]'/>
				<img src='/bg3v3.png' data-speedx="0.005" data-speedy="0.13" data-distance="-260" className='bg-img parallax'/>
				<img src='/merc.png' data-speedx="0.1" data-speedy="0.09" data-distance="-2000" className='merc parallax'/>
				<img src='/nissan.png' data-speedx="0.1" data-speedy="0.09" data-distance="-2000" className='nissan parallax'/>
				<img src='/volvo.png' data-speedx="0.075" data-speedy="0.04" data-distance="-3000" className='volvo parallax'/>
				<h2 data-speedx="0.115" data-speedy="0.025" data-distance="-200" className='h font-poppins absolute z-[4] text-primary drop-shadow-2xl font-bold top-[35%] left-[50%] parallax'>Rent<span className='text-third'>IT</span></h2>
				<img src='/gclas.png' data-speedx="0.065" data-speedy="0.02" data-distance="-3000" className='gclass parallax'/>
				<img src='/toyota.png' data-speedx="0.045" data-speedy="0.014" data-distance="-3000" className='toyota parallax'/>
				<p data-speedx="0.115" data-speedy="0.025" data-distance="-200" className='p font-poppins z-[6] absolute text-primary font-normal uppercase left-[50%] top-[45%] parallax'>Find a car <span className='text-third font-medium'>ANYWHERE</span> in the world</p>
				<img src='/audi.png' data-speedx="0.045" data-speedy="0.007" data-distance="-3000" className='audi parallax'/>
				<img src='/alfa.png' data-speedx="0.035" data-speedy="0.004" data-distance="-3600" className='alfa parallax'/>
				<img src='/bmw.png' data-speedx="0.02" data-speedy="0.0025" data-distance="-4400" className='bmw parallax'/>
			</div>
		</>
  	)
}

export default HeroSection