import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiPinterest } from "react-icons/si";
import { SiUnsplash } from "react-icons/si";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import MailchimpFormContainer from "./MailChimpForm";

export default function Footer () {

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return (
        <>
        <section id="footer">
            <div className="footer-container">

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="footer-modal"></Modal.Header>
        <Modal.Body className="footer-modal modal-body">
            <MailchimpFormContainer />
        </Modal.Body>
      </Modal>
       
            <div className="footer-links">
                <p>©Dina Spencer 2024</p>
            <a href="#contact" id="english-contact"><p >Work with me</p></a>
            <p id="newsletter" onClick={handleShow}>English newsletter signup</p>
           </div>
           
   
        <div className="social-icons-container">
                
                <ul className="social-icons">
                    <li><SiLinkedin size={30} style={{opacity: 0.6}} /></li>
                    <li><SiInstagram size={30} style={{opacity: 0.6}}/></li>
                    <li><SiGithub size={30} style={{opacity: 0.6}}/></li>
                    <li><SiUnsplash size={30} style={{opacity: 0.6}}/></li>
                    <li><SiPinterest size={30} style={{opacity: 0.6}}/></li>
                    
                </ul>
            </div>
        
            </div>

        </section>
        </>
    )
}