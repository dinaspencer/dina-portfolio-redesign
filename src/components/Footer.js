import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiPinterest } from "react-icons/si";
import { SiUnsplash } from "react-icons/si";



export default function Footer () {

    return (
        <>
        <section id="footer">
            <div className="footer-container">
       
        
        
            <div className="footer-links">
                <p>©Dina Spencer 2024</p>
            <p id="english-contact">Work with me</p>
            <p id="newsletter">English newsletter signup</p>
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