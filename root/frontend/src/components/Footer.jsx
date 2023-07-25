import React from 'react'
import styles from '../style'
import logo from '../images/rentitLogoWhite.png'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
		<div className={`${styles.flexStart} md:flex-col flex-row mb-8 w-full`}>
			<div className="flex-1 flex flex-col justify-start mr-10">
				<img src={logo}
					 className="w-[206px] h-[62px] object-contain"/>
			</div>

			<p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
				A new way to rent a vehicle anytime, anywhere.
			</p>

			<div className='flex-[1.5] w-full flex flex-row 
							justify-between flex-wrap md:mt-0 mt-10'>

			</div>

		</div>
    </section>
  )
}

export default Footer