import React from 'react';
import ReactDOM from 'react-dom/client';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faInstagram,faLinkedin,faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Accordion,Button, Breadcrumb, BreadcrumbItem, ButtonGroup ,ButtonToolbar,
Card, Carousel, CarouselItem,CloseButton,Navbar,NavbarBrand,NavDropdown,DropdownButton,Table,Tabs,Tab,ProgressBar,Spinner,Overlay,Tooltip,Placeholder,OverlayTrigger,Offcanvas,Container,Dropdown, Figure, Form, Image, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Pagination, Popover, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useRef } from 'react';

function BotNav(){
    return(
        <> 
            <Navbar variant="dark" bg="dark" fixed="bottom" >
                    {/* <NavbarBrand className='m-auto'>Follow us on !</NavbarBrand>     */}
                    <Nav className="m-auto" style={{fontSize:'18px'} }>
                        <Nav.Link href="/Twitter"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/Contacts"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/Contacts"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/Contacts"><FontAwesomeIcon icon={faTelegram}></FontAwesomeIcon></Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </Nav> 
            </Navbar>

           
        </>
    );
}

export default BotNav;