import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiPinterest } from "react-icons/si";
import { SiUnsplash } from "react-icons/si";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import MailchimpFormContainer from "./MailChimpForm";

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
            {/* <MailchimpFormContainer /> */}
            {/* <iframe id="footer-signup" src="https://0760bbe7.sibforms.com/serve/MUIFAHpNi48laHpCItUT63_H4NfbHd1wYm_OIantG-ifCsBKe08uWFguis9tMucyT5OD-ekrdqpyiipfg8CGgENcseCQqc8LUUgiGXob2Ym7yYqsy4TkVIfy5fMz09o1GgwK4xtqA6ujt-921sR9J0hKnRTHdXgnmeVznlpmB-66zynXu4eC55lgL9tUN5EnZjDnJhDimstQhYQy"  scrolling="auto" title="Subscribe" allowFullScreen height="400"  ></iframe> */}
            <iframe title="newsletter footer" id="footer-signup" src="https://0760bbe7.sibforms.com/serve/MUIFAJopn2TPn1zjyzZYtw6fQIGFjijfTrZ_exkL-_Xk79WDn8BIBF7kMeRNBMYs7d1bRU68nqMriHm9WmCze3mapCn2pm7KSHsmZ0IE_t2d0FgWZXkxKKk-yf5Svi6M70pksbevI2526-fsJT5BiE71Bcko9z_E9hV8HFgHserroMKs2zKFMG_3jn41QBVcu19BZ03ZG-5MMGC4"  scrolling="auto" allowFullScreen height="550" ></iframe>
        </Modal.Body>
      </Modal>
       

            <div className="footer-links">
                <p>©Dina Spencer 2024</p>
            
               <p><a href="#contact" id="english-contact">Work with me</a></p> 
                
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