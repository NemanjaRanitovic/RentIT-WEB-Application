import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import styles from "./style.js"
import { Navbar, HeroSection, Footer, Objects, Search, Register} from './components';
import { useEffect, useState } from 'react';
import ProfilePage from './pages/ProfilePage';
import EditProfile from './components/EditProfile'
import CreateRentObject from './components/CreateRentObject'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AddVehicle from './components/AddVehicle';
import LandingPage from './pages/LandingPage';
import RentACarObjectPage from './pages/RentACarObjectPage';
import VehicleDetailsPage from './pages/VehicleDetailsPage';

const App = () => {
   
   const [loggedUserName, setLoggedUserName] = useState(()=>{
		/*if(JSON.parse(localStorage.getItem('userInfo')).Name){
			return JSON.parse(localStorage.getItem('userInfo')).Name;
		}else{
			return "Log in";
		}
		*/
   });

	const userAuthentication = () => {
		setLoggedUserName(JSON.parse(localStorage.getItem('userInfo')).Name);
	}
	const userLogout = () => {
		setLoggedUserName("Log in");
	}
	
  return (
	<BrowserRouter>
		<div className="bg-primary w-full overflow-hidden">
			
			<div className={`${styles.paddingX} ${styles.flexCenter}`}>
				<div className={`${styles.boxWidth}`}>
					<Navbar loggedUserName = {loggedUserName} logUser = {userAuthentication} logOutUser = {userLogout}/>
				</div>
			</div>

			<main>
				<Routes>
					<Route path="/login" Component = {()=><LoginPage authenticate = {userAuthentication}/>}  exact/>
					<Route path="/" Component = {LandingPage} exact/>
					<Route path="/register" Component={RegisterPage} exact/>
					<Route path="/profile" Component={ProfilePage} exact/>
					<Route path="/EditProfile" Component={EditProfile} exact />
					<Route path="/CreateRentObject" Component={CreateRentObject} exact/>
					<Route path="/AddVehicle" Component={AddVehicle} exact />
					<Route path='/Object/:objectId' Component={RentACarObjectPage} exact />
					<Route path="/Object/vehicle/:vehicleId" Component={VehicleDetailsPage} exact />
				</Routes>       
			</main>	
		
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

