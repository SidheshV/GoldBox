import React from 'react';
import './Home.css';
import { Accordion,Button, Breadcrumb, BreadcrumbItem, ButtonGroup ,ButtonToolbar,
    Card, Carousel, CarouselItem,CloseButton,Navbar,NavDropdown,DropdownButton,Table,Tabs,Tab,ProgressBar,Spinner,Overlay,Tooltip,Placeholder,OverlayTrigger,Offcanvas,Container,Dropdown, Figure, Form, Image, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Pagination, Popover, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useRef } from 'react';
function Home(){
    const [index,setIndex] = useState(0);
    const handleIndex = (selectedIndex,a) =>{
        setIndex(selectedIndex);
    };
    function dispCarou(){
        var x = document.getElementById('carou');
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
      return(
        <>
            <div class="carousel-container" id="carou">
                
                <Carousel activeIndex={index} onSelect={handleIndex} fade={true}>
                <CarouselItem>
                    <img className='mx-auto d-block' src={process.env.PUBLIC_URL + '/deadpool.jpg'} width={'980'} height={'490'}></img>
                    <Carousel.Caption>
                    <h1>Deadpool</h1>
                    <p>A New adventure awaits</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img className='mx-auto d-block' src={process.env.PUBLIC_URL + '/spiderman.jpg'} width={'980'} height={'490'}></img>
                    <Carousel.Caption>
                    <h1>Spiderman</h1>
                    <p>A new Journey Awaits !!</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img className='mx-auto d-block' src={process.env.PUBLIC_URL + '/hobbit.jpg'} width={'980'} height={'490'}></img>
                    <Carousel.Caption>
                    <h1>Hobbit</h1>
                    <p>A Mythical Journey to protect the ring.</p>
                    </Carousel.Caption>
                </CarouselItem>
                </Carousel>
                
            </div>
                    
                <div class="info-box">

                    <div class="infob2">
                        <p class="t2b">Customer Service</p>
                        <p class="f22b">24x7</p><strong class="f2b">Online Customer Service available for any Queries regarding our website, Click on contact us below. </strong>


                    </div>


                    <div class="infob1">
                        <p class="t1b">Easy to refund</p>
                        <img class="monimg"src={process.env.PUBLIC_URL + '/money1.png'} alt="" width="260px" height="140px"></img>
                        <strong class="f1b">You can easily apply for refund on Selected Services if applied in between the Required Time Period.</strong>
                    </div>

                    <div class="infob3">
                        <p class="t3b">Special Offers and Coupons</p>
                        <img class="twoimg"src={process.env.PUBLIC_URL + '/paylogos1.png'} alt="" width="460px" height="240px"></img>
                        <strong class="f3b">Weekly discounts And Coupons will be available on Selected Services . Cashbacks and rewards<br/> will also be provided accordingly.</strong>
                    </div>
                </div>

             {/* <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"> */}
             
        </>
      );
    
}

export default Home;


// // <Form className="d-flex">
// <Form.Control type="search" placeholder="Item Search" className="me-2"/>
// <Button className='textnav' variant="outline-info">Search</Button>
// </Form>