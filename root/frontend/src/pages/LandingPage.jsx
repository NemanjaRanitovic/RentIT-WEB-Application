import React from 'react'
import { HeroSection, Objects } from '../components'
import styles from '../style';

const LandingPage = () => {
  return (
    <>
        <HeroSection/>
        <div className={`bg-primary ${styles.flexCenter}`}>
			<Objects/>
		</div>
    </>
  )
}

export default LandingPage