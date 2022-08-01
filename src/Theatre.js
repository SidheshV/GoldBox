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
import { act } from 'react-dom/test-utils';


function TheatreAndSeats(){
      const url = window.location.href;
      var tid = url.substring(url.lastIndexOf("/")-1);
      var timeId = url.substring(url.lastIndexOf("/")-3);
      var timeid = parseInt(timeId);
      var cinemaName = url.substring(url.lastIndexOf("/")-6 ,59);
      var cardData = detailInfo;
      var item = cardData.find(items=>items.id===parseInt(tid));
      

      const [userinfo, setUserInfo] = useState({
        seats: [],
        selectedSeats: [],
      });
      const [price,setPrice] = useState({
        res : 0
      });
   
      const handleChange = (e) => {
      
        const { value, checked } = e.target;
        const { seats } = userinfo;
        const found = seat.find(obj => {
          if(obj.name.includes(value)){
              return obj;
          }    
        });
        console.log(found.price);
        var c = found.price;
      
       
        console.log(`${value} is ${checked}`);
        
        if (checked) {
          setUserInfo({
            seats: [...seats, value],
            selectedSeats: [...seats, value],
          });
          setPrice({
            res : found.price + price.res    
          });
        }
       
        else {
          setUserInfo({
            seats: seats.filter((e) => e !== value),
            selectedSeats: seats.filter((e) => e !== value),
          });
          setPrice({
            res :  price.res - found.price 
          });
        }
        console.log(price);
      };
    return(
        
        <>
            <div className="container-fluid" class='screentf'>
                <div className="container" class='screent' >
                  <h3 className="Seat-arrangement" class='mvdetail'>
                   <span>{item.title}</span> <span>| {timeid} PM |</span>  <span>{cinemaName}</span> 
                  </h3>
                </div>  
            <form>
                <div className="row" class='seatContainer'>
                  <div className="col-md-3">
                    <div className="form-check m-3">
                    <input  type="checkbox" class='check_box1' name="seats" value="A1" id='checkbox1' onChange={handleChange}/>
                    <label  for='check_box1' htmlFor="checkbox1"><span style={{marginLeft:'40px'}}></span>A1</label>
                    </div>
                    <div className="form-check m-3">
                    <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="A2" id="checkbox2" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="checkbox2"><span style={{marginLeft:'40px'}}></span>A2</label>
                    </div>
                    <div className="form-check m-3">
                    <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="A3" id="checkbox3" onChange={handleChange}/>
                    <label className="form-check-label" htmlFor="checkbox3"><span style={{marginLeft:'40px'}}></span>A3</label>
                    </div>
                    <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="A4" id="checkbox12" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox12"><span style={{marginLeft:'40px'}}></span>A4</label>
                    </div>
                    <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="A5" id="checkbox13" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox13"><span style={{marginLeft:'40px'}}></span>A5</label>
                    </div>
                  </div>
                  <div className="col-md-3">
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="B1" id="checkbox4" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox4"><span style={{marginLeft:'40px'}}></span>B1</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="B2" id="checkbox5" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox5"><span style={{marginLeft:'40px'}}></span>B2</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input"  class='check_box1' type="checkbox" name="seats" value="B3" id="checkbox6" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox6"><span style={{marginLeft:'40px'}}></span>B3</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="B4" id="checkbox14" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox14"><span style={{marginLeft:'40px'}}></span>B4</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="B5" id="checkbox15" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox15"><span style={{marginLeft:'40px'}}></span>B5</label>
                        </div>
                        
                  </div>
                  <div className="col-md-3">
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="C1" id="checkbox7" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox7"><span style={{marginLeft:'40px'}}></span>C1</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="C2" id="checkbox8" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox8"><span style={{marginLeft:'40px'}}></span>C2</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="C3" id="checkbox9" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox9"><span style={{marginLeft:'40px'}}></span>C3</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="C4" id="checkbox16" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox16"><span style={{marginLeft:'40px'}}></span>C4</label>
                        </div>
                        <div className="form-check m-3">
                        <input className="form-check-input" class='check_box1' type="checkbox" name="seats" value="C5" id="checkbox17" onChange={handleChange}/>
                        <label className="form-check-label" htmlFor="checkbox17"><span style={{marginLeft:'40px'}}></span>C5</label>
                        </div>         
                  </div>
                  <div className="col-md-3" class='ticketInfo'>
                    <br/>
                     {/* <h2 name="selectedSeats" style={{color:'gold'}} id="floatingTextarea2" onChange={handleChange}>{userinfo.selectedSeats+" "+price.res}</h2> */}
                     <h2 class='mvTitle'>&nbsp; {item.title}</h2>
                     <br/>
                     <h4 class='mvTitle'> &nbsp; Time :<span> {timeid} PM</span></h4>
                     <br/>
                     <h4 class='mvTitle'>&nbsp; Seats :<span> {userinfo.selectedSeats+" "}</span></h4>
                     <br/>
                     <h4 class='mvTitle'> &nbsp; Total Cost :<span> {price.res}</span></h4>
                     
                     <br/>
                     {/* <button class='btrun'>Print</button> */}
                     <input type='submit' class='btrun'></input>
                  </div>
                
                </div>
              <span class='screentag'>----------Screen is here------------</span>
                
            </form>
            </div>
           
    </>
    );
}

export default TheatreAndSeats;