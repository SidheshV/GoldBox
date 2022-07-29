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
        <div id="box">
            <br/>
            <h2 id="l1">Register Form</h2>
            <br/>
            <form onSubmit={handleRegis}>
              <label name="uname" ><strong>&nbsp;User Name</strong></label><br />
              <input type="text" id="uname" name="uname" onChange={(e)=>setUserName(e.target.value)}></input> <br/> <br/>
              <label name="uemail"><strong>&nbsp;Email</strong></label><br />
              <input type="email" id="uemail" name="uemail"></input> <br/> <br/>
              <label name="uphone"><strong>&nbsp;Phone number</strong></label><br />
              <input type="tel" id="uphone" name="uphone" placeholder='Enter a 10 digit Number' required></input><br/> <br/>
              <label name="upass" ><strong>&nbsp;Password</strong></label><br />
              <input type="password" id="upass" name="upass" onChange={(e)=>setUserPass(e.target.value)}></input> 
              <label name="cpass" ><strong>&nbsp; Confirm Password</strong></label><br />
              <input type="password" id="cpass" name="cpass" onChange={(e)=>setCPass(e.target.value)}></input> 
              <Button type='submit' id="btsub">Register</Button>
            </form>
          </div>
      </>
    );
  }
  
  export default RegisUser;