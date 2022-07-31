import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.js'
import AuthUser from './Login.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisUser from './RegisterUser';
import ContactInfo from './Contact'
import CommonNavBar from './NavBar';
import BotNav from './BottomNav';
import AllMovies from './Movies';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import MovDetails from './MovieDetails';
import TheatreAndSeats from './Theatre';
import CinemaSelect from './Cinema';
class App extends React.Component{
  render()
  {
    return(
      <>
        {/* <h2>here from app!!</h2> */}
        <CommonNavBar/>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path='/Movies' element={<AllMovies/>}></Route>
            <Route path='Contacts' element={<ContactInfo/>}></Route>
            <Route path='Login' element={<AuthUser/>}></Route>
            <Route path='Register' element={<RegisUser/>}></Route>
            <Route path='/Movies/:id' element={<MovDetails/>}></Route>
            <Route path='/Movies/:id/cinema' element={<CinemaSelect/>}></Route>
            <Route path='/Movies/:id/:cinema/:val/seats' element={<TheatreAndSeats/>}></Route>

            {/* <Route path="/cars/:id" component={InfoCard} exact></Route> */}
          </Routes>
        </BrowserRouter>
        <BotNav/>

      </>
    );
  }
}



export default App;
