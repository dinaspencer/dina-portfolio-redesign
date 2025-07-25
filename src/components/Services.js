import { SiAbbvie } from "react-icons/si";
import { SiAbbott } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
// import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import carouselImage from './ExampleCarouselImage.png';
import { AiFillStar } from "react-icons/ai";
// import { Accordion } from "react-bootstrap";



const content = [
    {"id": 1, "front": "strengthen communication skills", "back": "so you can be recognized as a candidate for better positions"},  
    {"id": 2, "front": "speak confidently in meetings", "back": "so you can be respected as a strong leader"}, 
    {"id": 3, "front": "give outstanding presentations", "back": "so you can gain the trust of stakeholders"}, 
    {"id": 4, "front": "improve fluency", "back": "so you can be yourself and connect with others"},
      ]

      const shuffleCards = content.sort(() => Math.random() - 0.5);
  
const ServicesCircle = ({circle}) => {
    const [flip, setFlip] = useState(false);
    return (
    <div>
        <li className= {`services-circle ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <p className="front">{circle.front} <AiOutlineArrowRight/></p>
            <p className="back">{circle.back}</p>
        </li>      
    </div>
    )
}

const ServicesList = ({circles}) => {
    return (
        <ul>
            {circles.map(circle => {
                return <ServicesCircle circle={circle} key={circle.id} />
            })}
        </ul>
    )
   
}

export default function Services () {


   /*  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); */

   
   const [circles] = useState(shuffleCards);

    return (
        <>
        <section id="services">
            <div className="container-main">
        <h3>business english coaching</h3>
        <h3>that will help you:</h3>
        
        
       
                <ServicesList circles={circles} />
            
            {/* <li className= {`services-circle ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}><p>develop leadership skills</p></li>
            <li className="services-circle"><p>feel confident in meetings</p></li>
            <li className="services-circle"><p>give outstanding presentations</p></li>
            <li className="services-circle"><p>improve your fluency</p></li> */}
      

            <div className="english-buttons">
            <Button className="service-btn" href="https://forms.gle/qAhzKApbAs45Rrab8" target="_blank" rel="noreferrer">Book a class</Button>
            <Button className="service-btn" href="#english">Download my free fluency guide</Button>
            {/* <Button  className="service-btn" onClick={handleShow}>Subscribe to my English newsletter</Button> */}
           </div>
           
           {/*  <Offcanvas show={show} onHide={handleClose} placement="end" className="services-modal">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   

                    <iframe title="newsletter" id="services-signup" src="https://0760bbe7.sibforms.com/serve/MUIFAB3Cl4IkiBvZLAfRkqhSw3pAul-UdAfENUIdIVKtG03yyjsQvi3meNa90ARXYW2pwM5XQ0-2EsTwqFRSRQoRumjM_n0oyg8Kzn7Os1l1K8Pke5VLK8sn0WOOWs8K5O8s8aZQuRzZbn7_rSg28sbMgFUVjjLj2JwDmsiz01_-pI8x98Jl8WL9YojtTvNQda0XU-qCjLRT_cF9"  scrolling="auto" allowFullScreen ></iframe>
                    
                </Offcanvas.Body>
            </Offcanvas> */}

   {/*  <Accordion flush className="newsletter-accordion-main">
      <Accordion.Item eventKey="0" className="newsletter-accordion-item">
        <Accordion.Header className="newsletter-accordion-header"><h3>previous newsletters</h3></Accordion.Header>
        <Accordion.Body className="newsletter-accordion-body">
            <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240717.html" target="_blank" rel="noreferrer">July 17, 2024: Gearing up for the summer</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240710.html" target="_blank" rel="noreferrer">July 10, 2024: How to deliver not-so-good news</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240703.html" target="_blank" rel="noreferrer">July 3, 2024: Hit me with your best shot</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240626.html" target="_blank" rel="noreferrer">June 26, 2024: Let's agree to disagree</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240619.html" target="_blank" rel="noreferrer">June 19, 2024: How budgeting pays off</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240612.html" target="_blank" rel="noreferrer">June 12, 2024: Fake it til you make it</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240605.html" target="_blank" rel="noreferrer">June 5, 2024: #sorrynotsorry</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240529.html" target="_blank" rel="noreferrer">May 29, 2024: Let's get together and feel alright</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240522.html" target="_blank" rel="noreferrer">May 22, 2024: Setting boundaries sets you up for success</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240515.html" target="_blank" rel="noreferrer">May 15, 2024: What are you getting rid of?</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240508.html" target="_blank" rel="noreferrer">May 8, 2024: Wishing and hoping</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240502.html" target="_blank" rel="noreferrer">May 2, 2024: You really crack me up</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240424.html" target="_blank" rel="noreferrer">April 24, 2024: Making time for yourself</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240417.html" target="_blank" rel="noreferrer">April 17, 2024: Cutting out the inessential</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240410.html" target="_blank" rel="noreferrer">April 10, 2024: Making up your mind</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240403.html" target="_blank" rel="noreferrer">April 3, 2024: Getting things done</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240320.html" target="_blank" rel="noreferrer">March 20, 2024: Where are you off to?</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240313.html" target="_blank" rel="noreferrer">March 13, 2024: What's holding you back?</a></h4>
           <h4><a className="nl-link" href="https://newsletter.dinaspencer.net/20240306.html" target="_blank" rel="noreferrer">March 6, 2024: Today's phrasal verb: leave out</a></h4>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion> */}
    
            </div>

            <div className="student-companies" id="students">
               <h4> I've worked with students from these companies and more.</h4>
                <div className="icons-student">
                    <p><SiAbbvie size={100} style={{opacity: 0.6}} /></p>
                    <p><SiAbbott size={70} style={{opacity: 0.6}} /></p>
                    <p><SiLinkedin size={70} style={{opacity: 0.6}} /></p>
                    {/* <p><SiTwitter size={70} style={{opacity: 0.6}} /></p> */}
                    <p><SiFacebook size={70} style={{opacity: 0.6}} /></p>
                </div>
                <div className="reviews">
                {/* <h2>reviews</h2> */}
                <Carousel id="review-carousel">
                    
                    <Carousel.Item>
                        <img src={carouselImage} alt="green" className="carousel-img" />
                        <Carousel.Caption>
                        <AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star" />
                        
                        <p className="review-text">I've been with Dina for a short time, but the experience has been very positive. I think she is very empathetic, she listens well, and corrects me continuously. She makes the class very easy and enjoyable.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carouselImage} alt="green" className="carousel-img"  />
                        <Carousel.Caption>
                        <AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star" />
                        
                        <p className="review-text">Excellent teacher. I like her way of teaching, she always adapts to my needs. She gives me many tips and advice to learn the language.</p>
                        </Carousel.Caption> 
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carouselImage} alt="green" className="carousel-img"  />
                        <Carousel.Caption>
                        <AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star" />
                        
                        <p className="review-text">Dina es una persona extraordinaria. Es una profesora de inglés atenta, simpática, buen profesional... sin duda la recomendaría a cualquier persona que me preguntase por ella. Una profesional de 10</p>
                        </Carousel.Caption> 
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carouselImage} alt="green" className="carousel-img"  />
                        <Carousel.Caption>
                        <AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star" />
                        
                        <p className="review-text">Starting as a teacher she will end as a good friend. English classes are always funny</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={carouselImage} alt="green" className="carousel-img"  />
                        <Carousel.Caption>
                        <AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star"/><AiFillStar className="star" /><AiFillStar className="star" />
                        
                        <p className="review-text">Es una magnifica profesora. Sus clases son intensas en el buen sentido. Trabaja todas las habilidades. Se implica, utiliza materiales atractivos. Hace un gran seguimiento de cada alumno.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>

        </section>
        </>
    )
}