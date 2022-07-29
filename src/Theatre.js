import React from 'react';
import ReactDOM from 'react-dom/client';
import './Theatre.css';
import { Accordion,Button, Breadcrumb, BreadcrumbItem, ButtonGroup ,ButtonToolbar,
Card, Carousel, CarouselItem,CloseButton,Navbar,NavDropdown,DropdownButton,Table,Tabs,Tab,ProgressBar,Spinner,Overlay,Tooltip,Placeholder,OverlayTrigger,Offcanvas,Container,Dropdown, Figure, Form, Image, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Pagination, Popover, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useRef } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { detailInfo } from './DataInfo';
import { seat } from './Seats';
import { useNavigate } from 'react-router-dom';


function TheatreAndSeats(){
    
    const [userinfo, setUserInfo] = useState({
        seats: [],
        selectedSeats: [],
      });
      
      const handleChange = (e) => {
      
        const { value, checked } = e.target;
        const { seats } = userinfo;
          
        console.log(`${value} is ${checked}`);
        
        if (checked) {
          setUserInfo({
            seats: [...seats, value],
            selectedSeats: [...seats, value],
          }
          );
        }
      
        else {
          setUserInfo({
            seats: seats.filter((e) => e !== value),
            selectedSeats: seats.filter((e) => e !== value),
          });
        }
      };
    return(
        
        <>
            <div className="container-fluid">
                <div className="container">
                <h3 className="Seat-arrangement">
                    Seats 
                </h3>
        
            <form>
                <div className="row">
                <div className="col-md-4">
                    <div className="form-check m-3">
                    <input className="form-check-input" type="checkbox" name="seats" value="A1" id="flexCheckDefault" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">A1</label>
                    </div>
                    <div className="form-check m-3">
                    <input className="form-check-input" type="checkbox" name="seats" value="A2" id="flexCheckDefault" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">A2</label>
                    </div>
                    <div className="form-check m-3">
                    <input className="form-check-input" type="checkbox" name="seats" value="A3" id="flexCheckDefault" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">A3</label>
                    </div>
                    
                </div>
                <div className="col-md-4">
                        <div className="form-check m-3">
                        <input className="form-check-input" type="checkbox" name="seats" value="B1" id="flexCheckDefault" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">B1</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" type="checkbox" name="seats" value="B2" id="flexCheckDefault" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">B2</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" type="checkbox" name="seats" value="B3" id="flexCheckDefault" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">B3</label>
                        </div>
                        
                </div>
                <div className="col-md-4">
                        <div className="form-check m-3">
                        <input className="form-check-input" type="checkbox" name="seats" value="C1" id="flexCheckDefault" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">C1</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" type="checkbox" name="seats" value="C2" id="flexCheckDefault" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">C2</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" type="checkbox" name="seats" value="C3" id="flexCheckDefault" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">C3</label>
                        </div>
                        
                </div>
                </div>
    
                <div className="form-floating mt-3 mb-3 text-center">
                
                <h2 name="selectedSeats" id="floatingTextarea2" onChange={handleChange}>{userinfo.selectedSeats}</h2>
                </div>

                <Button>Print</Button>
            </form>
            </div>
        </div>    
    </>
    );
}

export default TheatreAndSeats;