import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LogIn from './LogIn/LogIn';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import LandingPage  from './LandingPage/LandingPage';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <main>
        <Routes>
          <Route path="/login" Component = {LogIn} exact/>
          <Route path="/test" Component = {LandingPage} exact/>
        </Routes>       
        </main>
      <Footer />
    </BrowserRouter>
  );
}


export default App;

