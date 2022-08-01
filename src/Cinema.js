import React from 'react';
import ReactDOM from 'react-dom/client';
import './Cinema.css';
import { useNavigate } from 'react-router-dom';
import { movieData } from './MovieData';
import { Accordion,Button, Breadcrumb, BreadcrumbItem, ButtonGroup ,ButtonToolbar,
Card, Carousel, CarouselItem,CloseButton,Navbar,NavDropdown,DropdownButton,Table,Tabs,Tab,ProgressBar,Spinner,Overlay,Tooltip,Placeholder,OverlayTrigger,Offcanvas,Container,Dropdown, Figure, Form, Image, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Pagination, Popover, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useRef } from 'react';
// import { movieData } from './MovieData';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { detailInfo } from './DataInfo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CinemaSelect(){
    const navigate  = useNavigate();
    const url = window.location.href;
    var tid = url.substring(url.lastIndexOf("/")-1);
    var cardData = detailInfo;
    var item = cardData.find(items=>items.id===parseInt(tid));
    const getInitialState = () => {
        const value = "PVR";
        return value;
      };
    const [value, setValue] = useState(getInitialState);
    
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return(
        <>
        <div class="bImg">
            <div class="box2">
            
            <iframe width="880" height="525" src={`${item.ytLink}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture allowfullscreen"></iframe>
            {/* <iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <div className='me-auto' class="grid-container">
                <div class="flexmv">
                    <div class="lh"><img src={process.env.PUBLIC_URL + `${item.image}`} alt="" width="300px" height="350px"></img></div>
                        <div class="lh1"> 
                        <h1>{item.title}</h1>
                        <br/>
                        <br/>
                        <h2 class='th1'>Select Your Nearest Theatre</h2>
                        <br/>
                        <select class='sl1' value={value} onChange={handleChange}>
                            <option value="PVR">PVR</option>
                            <option value="Cinepolis">3DM</option>
                            <option value="IMAX">4DZ</option>
                        </select>
                        <br/>
                        <br/>
                        {/* <span id='ageRate2'>Age :{item.age}+</span>
                        <span id='starRating2'>{item.rating} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span> */}
                    </div>
                </div>
                <div class='btnfelx'>
                    <Button class="btntime3" onClick={() => navigate(`/Movies/${value}/3/${item.id}/seats`)}>3:00PM</Button> &nbsp; &nbsp; 
                    &nbsp; &nbsp; &nbsp; &nbsp;<Button class="btntime6" onClick={() => navigate(`/Movies/${value}/6/${item.id}/seats`)}>6:00PM</Button> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button class="btntime9" onClick={() => navigate(`/Movies/${value}/9/${item.id}/seats`)}>9:00PM</Button>   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>
                

                
                {/* <button class="btnbook" onClick={() => navigate(`/Movies/${item.id}/${value}/seats`)}>Book Now !</button> */}
                {/* <a href=""><button type="submit" name="bookticket">Book now</button></a> */}
            </div>

            

            </div>
        </div>
        </>
    );
}

export default CinemaSelect;