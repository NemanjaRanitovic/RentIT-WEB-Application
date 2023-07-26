import './App.css';
import LogIn from './LogIn/LogIn';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import styles from "./style.js"
import { Navbar, HeroSection, Footer, Register} from './components';


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
					<Route path="/" Component = {HeroSection} exact/>
					<Route path="/register" Component={Register} exact/>
				</Routes>       
			</main>	
		
			<div className={`bg-secondary relative ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`}>
					<Footer />
				</div>
			</div>
		
		</div>
	</BrowserRouter>
  );
}


export default App;

