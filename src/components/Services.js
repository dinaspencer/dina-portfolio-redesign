import { SiAbbvie } from "react-icons/si";
import { SiAbbott } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Carousel from 'react-bootstrap/Carousel';
import carouselImage from './ExampleCarouselImage.png';
import { AiFillStar } from "react-icons/ai";



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


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
   const [circles] = useState(shuffleCards);

    return (
        <>
        <section id="services">
            <div className="container-main">
        <h3>english coaching for intermediate and advanced learners</h3>
        <h3>who want to...</h3>
        
        
       
                <ServicesList circles={circles} />
            
            {/* <li className= {`services-circle ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}><p>develop leadership skills</p></li>
            <li className="services-circle"><p>feel confident in meetings</p></li>
            <li className="services-circle"><p>give outstanding presentations</p></li>
            <li className="services-circle"><p>improve your fluency</p></li> */}
      

            <div className="english-buttons">
            {/* <Button  className="service-btn" href="#contact" >Work with me</Button> */}
            <Button className="service-btn" href="#english">Download my free fluency guide</Button>
            <Button  className="service-btn" onClick={handleShow}>Get my weekly English newsletter</Button>
           </div>
           
            <Offcanvas show={show} onHide={handleClose} placement="end" className="services-modal">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   

                    <iframe title="newsletter" id="services-signup" src="https://0760bbe7.sibforms.com/serve/MUIFAJopn2TPn1zjyzZYtw6fQIGFjijfTrZ_exkL-_Xk79WDn8BIBF7kMeRNBMYs7d1bRU68nqMriHm9WmCze3mapCn2pm7KSHsmZ0IE_t2d0FgWZXkxKKk-yf5Svi6M70pksbevI2526-fsJT5BiE71Bcko9z_E9hV8HFgHserroMKs2zKFMG_3jn41QBVcu19BZ03ZG-5MMGC4"  scrolling="auto" allowFullScreen ></iframe>
                </Offcanvas.Body>
            </Offcanvas>
        
            </div>

            <div className="student-companies" id="students">
               <h4> I've worked with students from these companies and more.</h4>
                <div className="icons-student">
                    <p><SiAbbvie size={100} style={{opacity: 0.6}} /></p>
                    <p><SiAbbott size={70} style={{opacity: 0.6}} /></p>
                    <p><SiLinkedin size={70} style={{opacity: 0.6}} /></p>
                    <p><SiTwitter size={70} style={{opacity: 0.6}} /></p>
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