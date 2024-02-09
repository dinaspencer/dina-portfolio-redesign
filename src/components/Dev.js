import { useState } from 'react';
import DevProject from './DevProject';
import { data } from '../data';


export default function Dev () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  const projects = data.projects;

    return (
        <>

        <section id="dev-section">
            <div className="container">
                <h1>PROJECTS </h1>
                <ul className="project-list">

                    {projects.map(project => {
                        return <li key={project.id} className="project-item" onClick={handleShow}>
                            <p>{project.title}</p>
                        </li>
                    })}
                    
                  
                </ul>
                <DevProject work={projects} handleClose={handleClose} show={show} />
              
            </div>
        </section>
        </>
    )
}