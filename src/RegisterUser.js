import React from 'react';
import ReactDOM from 'react-dom/client';
import { Accordion,Button, Breadcrumb, BreadcrumbItem, ButtonGroup ,ButtonToolbar,
    Card, Carousel, CarouselItem,CloseButton,Navbar,NavDropdown,DropdownButton,Table,Tabs,Tab,ProgressBar,Spinner,Overlay,Tooltip,Placeholder,OverlayTrigger,Offcanvas,Container,Dropdown, Figure, Form, Image, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Pagination, Popover, Toast } from 'react-bootstrap';
import './RegisterUser.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useRef } from 'react';

import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';

function RegisUser(){
    const [userName,setUserName] = useState('');
    const [userPass,setUserPass] = useState('');
    const [cpass,setCPass] = useState('');
    
    function handleRegis(){
      alert("Account Created successfully");
    }
    return(
      <>
        <div id="rbox">
            <br/>
            <h2 id="rl1">Register Form</h2>
            <br/>
            <form onSubmit={handleRegis}>
            &nbsp;&nbsp;<label name="runame" ><strong>&nbsp;User Name</strong></label><br />
              <input type="text" id="runame" name="runame" onChange={(e)=>setUserName(e.target.value)}></input> <br/> <br/>
              &nbsp;&nbsp;<label name="ruemail"><strong>&nbsp;Email</strong></label><br />
              <input type="email" id="ruemail" name="ruemail"></input> <br/> <br/>
              &nbsp;&nbsp;<label name="ruphone"><strong>&nbsp;Phone number</strong></label><br />
              <input type="tel" id="ruphone" name="ruphone" placeholder='Enter a 10 digit Number' required></input><br/> <br/>
              &nbsp;&nbsp;<label name="rupass" ><strong>&nbsp;Password</strong></label><br />
              <input type="password" id="rupass" name="rupass" onChange={(e)=>setUserPass(e.target.value)}></input> <br /><br />
              &nbsp;&nbsp;<label name="rcpass" ><strong>&nbsp; Confirm Password</strong></label><br />
              <input type="password" id="rcpass" name="rcpass" onChange={(e)=>setCPass(e.target.value)}></input> 
              <Button type='submit' id="rbtsub">Register</Button>
            </form>
            &nbsp;&nbsp;<NavLink to='/Login' class='nvreg'>Already Have an Account? Click here</NavLink>
          </div>
      </>
    );
  }
  
  export default RegisUser;