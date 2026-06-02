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
    {"id": 1, "front": "deep thinking and analysis", "back": "testing the viability of ideas"},  
    {"id": 2, "front": "asking tough questions through coaching", "back": "leading to insights and better communication"}, 
    {"id": 3, "front": "building teams and connections", "back": "improving retention, productivity, and collaboration"}, 
    {"id": 4, "front": "detailed planning and finance", "back": "making ideas a reality and making sure there's money in the bank"},
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
        <h3>here's what I do best:</h3>
                
                <ServicesList circles={circles} />
            
          

            <div className="english-buttons">
            <Button className="service-btn" href="mailto:hello@dinaspencer.net" target="_blank" rel="noreferrer">Get in touch</Button>
          
           </div>
        

  
    
            </div>

           

        </section>
        </>
    )
}