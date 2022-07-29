import React from 'react';
import ReactDOM from 'react-dom/client';
import './MovieDetails.css';
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


function MovDetails(){
    const navigate  = useNavigate();
    const url = window.location.href;
    var tid = url.substring(url.lastIndexOf("/")+1);
    var cardData = detailInfo;
    var item = cardData.find(items=>items.id===parseInt(tid));
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
                        <h4>{item.summary}</h4>
                        <br/>
                        <br/>
                        <span id='ageRate2'>Age :{item.age}+</span>
                        <span id='starRating2'>{item.rating} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                    </div>
                </div>
                <div class="genretag">Genres : <span style={{fontSize:'16px'}}>{item.genre}</span></div>
                <div class="actortag">Actors/Actress : <span style={{fontSize:'16px' }}>{item.actors}</span></div>
                <button class="btnbook" onClick={() => navigate(`/Movies/${item.id}/seats`)}>Book Now !</button>
                {/* <a href=""><button type="submit" name="bookticket">Book now</button></a> */}
            </div>

            

            </div>
        </div>
        </>
    );
}

export default MovDetails;