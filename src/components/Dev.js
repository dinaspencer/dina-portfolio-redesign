import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { projects } from '../data';
import { AiOutlineArrowRight } from "react-icons/ai";




function OffCanvasExample({ name, description, skills, image, link, ...props }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <p onClick={handleShow} className="project-item">
          {name + " "}  <AiOutlineArrowRight />
        </p>

      
        <Offcanvas show={show} onHide={handleClose} {...props} placement="end" className="dev-modal">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{name} </Offcanvas.Title>
            
          </Offcanvas.Header>
          <Offcanvas.Body className="dev-modal-body">

            <img src={`${image}`} width="200" alt="project" className="dev-project-item dev-img"></img>
            <p className="dev-project-item">{description}</p>
            <p className="dev-project-item"><strong>Skills: {skills}</strong></p>
           
            <Button variant="primary" href={link} target="blank">See live project</Button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default function Dev() {

    
    
    return (
      <>
       <section id="dev-section">
             <div className="container-main">
                 <h1>PROJECTS </h1>
                 <div className="dev-section-container">
                 
       

      {projects.map((project) => (
          <OffCanvasExample key={project.id}  name={project.title} description={project.description} skills={project.skills} image={project.thumbnail} link={project.link}   />
        ))}
        </div>
         </div>
    </section>
      </>
     
    );

  }
  