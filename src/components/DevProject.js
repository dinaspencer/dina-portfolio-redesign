import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { data } from '../data';

export default function DevProject (props) {

  console.log(props);

    return (
        <>
        
        <section id="dev-project">    
        
        <ul>
        {props.projects.map(project => {
                        return <li key={project.id} className="project-item" >
                            <Offcanvas show={props.show} onHide={props.close}  placement="end" className="dev-modal" >
                        <Offcanvas.Header closeButton onHide={props.close}>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
                <h2>{project.title}</h2>
                {/* <img src={project.thumbnail}></img>
                <p>{project.description}</p> */}
                <Button variant="primary">See more</Button>
          
        </Offcanvas.Body>
      </Offcanvas>
         
                            
                        </li>
                    })}
        
            </ul>
                
        
        </section>
        </>
    )
}