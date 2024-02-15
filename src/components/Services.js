import { SiAbbvie } from "react-icons/si";
import { SiAbbott } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import Button from 'react-bootstrap/Button';


export default function Services () {

    return (
        <>
        <section id="services">
            <div className="container-main">
        <h2>english coaching</h2>
        
        
        <ul>
            <li>speak with more fluency</li>
            <li>develop leadership skills</li>
            <li>feel confident in meetings</li>
            <li>give outstanding presentations</li>
        </ul>

            <div className="english-buttons">
            <Button id="english-contact" className="service-btn" >Work with me</Button>
            <Button id="newsletter" className="service-btn">Want a free English newsletter?</Button>
           </div>
           
        
        
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