import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from 'react-router-dom';
import { Accordion,Button, Breadcrumb, BreadcrumbItem, ButtonGroup ,ButtonToolbar,
    Card, Carousel, CarouselItem,CloseButton,Navbar,NavDropdown,DropdownButton,Table,Tabs,Tab,ProgressBar,Spinner,Overlay,Tooltip,Placeholder,OverlayTrigger,Offcanvas,Container,Dropdown, Figure, Form, Image, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Pagination, Popover, Toast } from 'react-bootstrap';
import './Login.css';
import {BrowserRouter,NavLink,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useRef } from 'react';


function AuthUser(){
    const navigate  = useNavigate();
    const [userName,setUserName] = useState('');
    const [userPass,setUserPass] = useState('');
  
    function handleForm(event){
      let strData =  `User name : ${userName} And Password : ${userPass}`;
      alert(strData);
      event.preventDefault();
    }
  
    return(
        <>
          <div id="box">
            <br/>
            <h2 id="l1">Login</h2><br/>
            <form onSubmit={handleForm}>
              &nbsp;&nbsp;&nbsp;<label name="uname"><strong style={{color:'gold'}}>User Name</strong></label><br />
              <input type="text" id="uname" name="uname" value={userName} onChange={(e)=>setUserName(e.target.value)}></input> <br/> <br/>
              &nbsp;&nbsp;&nbsp;<label name="upass"><strong style={{color:'gold'}}>Password</strong></label><br />
              <input type="password" id="upass" name="upass" value={userPass} onChange={(e)=>setUserPass(e.target.value)}></input> <br/><br/>
              <Button type='submit' id="btsub" onClick={() => navigate('/home')}>Login</Button>
              <NavLink to='/Register' class='nvreg'>New User? Click on this link to Create a Account</NavLink>
            </form>
            
          </div>
        </>
    );
  }
  export default AuthUser;
  
  