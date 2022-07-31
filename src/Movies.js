import React from 'react';
import ReactDOM from 'react-dom/client';
import './Movies.css';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Accordion,Button, Breadcrumb, BreadcrumbItem, ButtonGroup ,ButtonToolbar,
Card, Carousel, CarouselItem,CloseButton,Navbar,NavDropdown,DropdownButton,Table,Tabs,Tab,ProgressBar,Spinner,Overlay,Tooltip,Placeholder,OverlayTrigger,Offcanvas,Container,Dropdown, Figure, Form, Image, InputGroup, ListGroup, ListGroupItem, Modal, Nav, Pagination, Popover, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useRef } from 'react';
import { movieData } from './MovieData';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faInstagram,faLinkedin,faTelegram } from '@fortawesome/free-brands-svg-icons';
// import { faTwitter,faInstagram,faLinkedin,faTelegram } from '@fortawesome/free-brands-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AllMovies()
{
    const navigate  = useNavigate();
    const [query,setQuery] = useState("");
    console.log(query);
    
    const found = movieData.filter(obj => {
        if(obj.title.toLowerCase().includes(query)){
            return obj;
        }
          
    });
    console.log(found);


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
            <div class="movie-container">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand id="searchText">Search Your Favourite Movies/Shows Here !</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Enter the Movie Here" className="me-1" onChange={e=>setQuery(e.target.value.toLowerCase())}
                             style={{width:'500px', height:'35px', background:'white',color:'black',border:'1px solid gold',opacity: '0.7'}}/>
                            {/* <Button variant="outline-light" style={{border:'none'}}>Search</Button> */}
                        </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div class="line"></div>
                <br/>
            
                <Row lg={4}>
                    {found.map((product) => {  
                        const { id, title, content, image, rating, age } =
                            product;
                        return (
                            // {process.env.PUBLIC_URL + `${item.image}`}
                            <Col className="d-flex">
                                <Card key={id} style={{marginTop:'20px',backgroundColor:'black',width:'250px',border:'1px solid gold',marginLeft:'40px'}}>
                                <Card.Img variant="top" src={process.env.PUBLIC_URL + `${image}`} style={{width:'248px' ,height:'300px'}}/>
                                    <Card.Body>   
                                    <Card.Title style={{color:'gold',fontSize:'28px'}}>{title}</Card.Title>
                                    <div class="line2"></div> 
                                    <br/>
                                    <Card.Text style={{color:'white'}}>{content}</Card.Text>
                                    <br/>

                                    <span id='ageRate'>Age :{age}+</span>
                                    <span id='starRating'>{rating} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                    <br/>
                                    {/* <Card.Text>{image}</Card.Text> */}
                                    <Card.Link class='btcard' onClick={() => navigate(`/Movies/${id}`)}>View More</Card.Link>
                                    </Card.Body>
                                    <br/>
                                </Card>
                            </Col>
                            
                        );
                    })}
                    
                </Row>
            </div>
        </>
    );
}

export default AllMovies;