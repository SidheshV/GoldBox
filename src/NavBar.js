import React from 'react';
import ReactDOM from 'react-dom/client';
import './Home.css';

import { Accordion,Button, Breadcrumb, BreadcrumbItem, ButtonGroup ,ButtonToolbar,
Card, Carousel, CarouselItem,CloseButton,Navbar,NavDropdown,DropdownButton,Table,Tabs,Tab,ProgressBar,Spinner,Overlay,Tooltip,Placeholder,OverlayTrigger,Offcanvas,Container,Dropdown, Figure, Form, Image, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Pagination, Popover, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useRef } from 'react';
function CommonNavBar(){
    return(  
        <>
           <Navbar bg="dark">
                <Container fluid>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Navbar.Brand href="/Home"><span className='headnav'>GoldBox</span></Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                        className="me-auto my-1"
                        style={{ maxHeight: '100px',fontSize:'18px',marginLeft:'40px' } }
                        navbarScroll
                        >
                        <Nav.Link className='textnav' href="/Movies"><span className='textnav'>Movies</span></Nav.Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav.Link href="/Contacts"><span className='textnav'>Contact Us</span></Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        {/* <DropdownButton variant='dark' title="Options">
                            <NavDropdown.Item className='textnav' href="/jump"><span className='textnav'>Live Show</span></NavDropdown.Item>
                            <NavDropdown.Item className='textnav' href="/hide"><span className='textnav'>Cricket Match tickets</span></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item className='textnav' href="/shield"><span className='textnav'>Others</span></NavDropdown.Item>
                        </DropdownButton> */}
                        </Nav>
                        <Nav>
                        
                            <Nav.Link href="/Login"><span className='rightnav'>Login</span></Nav.Link>
                            <Nav.Link eventKey={2} href="/Register"><span className='rightnav'>Register</span></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </>
    );
}

export default CommonNavBar;