import './App.css';
import LogIn from './LogIn/LogIn';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import styles from "./style.js"
import { Navbar, HeroSection, Footer} from './components';


const App = () => {
  return (
	<BrowserRouter>
		<div className="bg-primary w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar/>
				</div>
			</div>
		
			<main>
				<Routes>
				<Route path="/login" Component = {LogIn} exact/>
				<Route path="/test" Component = {HeroSection} exact/>
				</Routes>       
			</main>	
		
			<div className={`bg-primary ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<HeroSection/>
				</div>
			</div>

			<div className={`bg-secondary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Footer />
				</div>
			</div>
		
		</div>
	</BrowserRouter>
  );
}


export default App;

