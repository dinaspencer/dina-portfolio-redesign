import { SiAbbvie } from "react-icons/si";
import { SiAbbott } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import MailchimpFormContainer from "./MailChimpForm";

export default function Services () {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <section id="services">
            <div className="container-main">
        <h2>english coaching for intermediate and advanced learners</h2>
        
        
        <ul>
            <li className="services-circle"><p>speak with more fluency</p><AiOutlineArrowRight className="arrow"/></li>
            <li className="services-circle"><p>develop leadership skills</p> <AiOutlineArrowRight className="arrow"/></li>
            <li className="services-circle"><p>feel confident in meetings</p><AiOutlineArrowRight className="arrow"/></li>
            <li className="services-circle"><p>give outstanding presentations</p><AiOutlineArrowRight className="arrow"/></li>
        </ul>

            <div className="english-buttons">
            <Button  className="service-btn" href="#contact" >Work with me</Button>
            <Button  className="service-btn" onClick={handleShow}>Want a free English newsletter?</Button>
           </div>
           
            <Offcanvas show={show} onHide={handleClose} placement="end" className="services-modal">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* <MailchimpFormContainer /> */}
                    {/* <iframe id="services-signup" src="https://0760bbe7.sibforms.com/serve/MUIFAHpNi48laHpCItUT63_H4NfbHd1wYm_OIantG-ifCsBKe08uWFguis9tMucyT5OD-ekrdqpyiipfg8CGgENcseCQqc8LUUgiGXob2Ym7yYqsy4TkVIfy5fMz09o1GgwK4xtqA6ujt-921sR9J0hKnRTHdXgnmeVznlpmB-66zynXu4eC55lgL9tUN5EnZjDnJhDimstQhYQy"  scrolling="auto" title="Subscribe" allowFullScreen height="500" styles={{padding: 12}}  ></iframe> */}

                    <iframe title="newsletter" id="services-signup" src="https://0760bbe7.sibforms.com/serve/MUIFAJopn2TPn1zjyzZYtw6fQIGFjijfTrZ_exkL-_Xk79WDn8BIBF7kMeRNBMYs7d1bRU68nqMriHm9WmCze3mapCn2pm7KSHsmZ0IE_t2d0FgWZXkxKKk-yf5Svi6M70pksbevI2526-fsJT5BiE71Bcko9z_E9hV8HFgHserroMKs2zKFMG_3jn41QBVcu19BZ03ZG-5MMGC4"  scrolling="auto" allowFullScreen ></iframe>
                </Offcanvas.Body>
            </Offcanvas>
        
            </div>

            <div className="student-companies">
               <h4> I've worked with students from these companies and more.</h4>
                <div className="icons-student">
                    <p><SiAbbvie size={120} style={{opacity: 0.6}} /></p>
                    <p><SiAbbott size={80} style={{opacity: 0.6}} /></p>
                    <p><SiLinkedin size={80} style={{opacity: 0.6}} /></p>
                    <p><SiTwitter size={80} style={{opacity: 0.6}} /></p>
                    <p><SiFacebook size={80} style={{opacity: 0.6}} /></p>
                </div>
            </div>

        </section>
        </>
    )
}