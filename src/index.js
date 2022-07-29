import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import Home from './Home.js'
import AuthUser from './Login.js';
import RegisUser from './RegisterUser';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const routing = (
//   <BrowserRouter>
//     <NavLink to='/'>Home</NavLink>
//     <NavLink to='/Movies'>Movies</NavLink>
//     {/* <NavLink to='/Contact'>Contact Us</NavLink> */}
//     <Routes>
//       <Route path='/' element={<Home/>}></Route>
//       {/* <Route path='Movies' element={<Movies/>}></Route> */}
//       <Route path='Login' element={<AuthUser/>}></Route>
//       <Route path='Register' element={<RegisUser/>}></Route>
//     </Routes>
//   </BrowserRouter>
// )
// ReactDOM.render(routing,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
