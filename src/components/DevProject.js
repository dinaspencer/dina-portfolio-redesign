import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function DevProject (props) {



    return (
        <>
        
        <section id="dev-project">    
            <Offcanvas show={props.show} onHide={props.handleClose} {...props} placement="end" className="dev-modal" >
            <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
                {/* <h2>{props.title}</h2>
                <img src={project.thumbnail}></img>
                <p>{project.description}</p> */}
                <Button variant="primary">See more</Button>
          
        </Offcanvas.Body>
      </Offcanvas>
        
                
        
        </section>
        </>
    )
}