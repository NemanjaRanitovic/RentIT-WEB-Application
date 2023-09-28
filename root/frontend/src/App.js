import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import styles from "./style.js"
import { Navbar, HeroSection, Footer, Objects, Search, Register} from './components';
import { useEffect, useState } from 'react';
import Profile from './components/Profile';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

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
					<Route path="/" Component = {HeroSection} exact/>
					<Route path="/register" Component={RegisterPage} exact/>
					<Route path="/profile" Component={Profile} exact/>
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

