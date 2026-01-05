// import { SiAbbvie } from "react-icons/si";
// import { SiAbbott } from "react-icons/si";
// import { SiLinkedin } from "react-icons/si";
// import { SiMercedes } from "react-icons/si";
// import { SiFacebook } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Carousel from 'react-bootstrap/Carousel';
// import carouselImage from './ExampleCarouselImage.png';
// import { AiFillStar } from "react-icons/ai";
// import { Accordion } from "react-bootstrap";



const content = [
    {"id": 1, "front": "optimize operations", "back": "so you can scale efficiently and reduce operational friction"},  
    {"id": 2, "front": "drive digital growth", "back": "so you can increase traffic, conversions, and customer engagement"}, 
    {"id": 3, "front": "build high-performing teams", "back": "so you can improve retention, productivity, and remote collaboration"}, 
    {"id": 4, "front": "leverage data for decisions", "back": "so you can move from intuition to insight-driven strategy"},
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
        <h3>strategic solutions that drive measurable impact:</h3>
                
                <ServicesList circles={circles} />
            
          

            <div className="english-buttons">
            <Button className="service-btn" href="mailto:hello@dinaspencer.net" target="_blank" rel="noreferrer">Get in touch</Button>
          
           </div>
        

  
    
            </div>

           

        </section>
        </>
    )
}