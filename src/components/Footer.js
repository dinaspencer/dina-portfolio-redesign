import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
// import { SiInstagram } from "react-icons/si";
// import { SiUnsplash } from "react-icons/si";
// import { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';

export default function Footer () {

// const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);


    return (
        <>
        <section id="footer">
            <div className="footer-container">
            <iframe title="footer-signup" id="footer-signup" height="500" src="https://0760bbe7.sibforms.com/serve/MUIFAA-s3_ZXpsi96AbZyPas1NW3eNdiGDqUlPcDfxuwuir0AVoqDssN9iiuLfWTEw_QcAhRc3Hnu4efRfaCKMDc-5mv0mWGfjBf0jfgJlWQi9edC1IdNYXU3W9NjmfudilwrB4cMrTgo7euxpS2WNMH2sfgb7Wmgj6D0hdCBl23dKk-LjZktS2RWygMKhg_7Fi9Ze3hemZymYVx" frameBorder="0" scrolling="auto" allowFullScreen ></iframe>

        {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="footer-modal"></Modal.Header>
        <Modal.Body className="footer-modal modal-body">
           
            <iframe title="newsletter footer" id="footer-signup1" src="https://0760bbe7.sibforms.com/serve/MUIFAJopn2TPn1zjyzZYtw6fQIGFjijfTrZ_exkL-_Xk79WDn8BIBF7kMeRNBMYs7d1bRU68nqMriHm9WmCze3mapCn2pm7KSHsmZ0IE_t2d0FgWZXkxKKk-yf5Svi6M70pksbevI2526-fsJT5BiE71Bcko9z_E9hV8HFgHserroMKs2zKFMG_3jn41QBVcu19BZ03ZG-5MMGC4"  scrolling="auto" allowFullScreen height="550" ></iframe>
        </Modal.Body>
      </Modal> */}
       

            <div className="footer-links">
                <p>©Dina Spencer 2025</p>
            
               <p><a href="#contact" id="english-contact">Work with me</a></p> 
               <p><a href="#english" id="english-contact">Fluency guide</a></p> 
            {/* <p id="newsletter" onClick={handleShow}>English newsletter signup</p> */}

            
           </div>
           
   
        <div className="social-icons-container">
                
                <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/in/dinakspencer/" target="_blank" rel="noreferrer"><SiLinkedin size={30} style={{opacity: 0.6}} /></a></li>
                    {/* <li><a href="https://www.instagram.com/dina.spencer.photo/" target="_blank" rel="noreferrer"><SiInstagram size={30} style={{opacity: 0.6}}/></a></li> */}
                    <li><a href="https://github.com/dinaspencer/" target="_blank" rel="noreferrer"><SiGithub size={30} style={{opacity: 0.6}}/></a></li>
                    {/* <li><a href="https://unsplash.com/@dinaspencer" target="_blank" rel="noreferrer"><SiUnsplash size={30} style={{opacity: 0.6}}/></a></li> */}
                    
                    
                </ul>
            </div>
        
            </div>

        </section>
        </>
    )
}