import { SiLinkedin } from "react-icons/si";
// import { SiGithub } from "react-icons/si";
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
            {/* <iframe  height="500" src="https://0760bbe7.sibforms.com/serve/MUIFAOd834xmh3YsRt8hU3xyKYTkNmtT4g4PWGm9NsgLFLuw4wK9ToTUwXe0difooHfXgUKDzFIfRn8NzIYrtEllhunC3fAMjyxZc3wozQYy226YM5qVCg8-jxf2RpWIhSPiVFi4Ka6OskBTBVMWb5162pOMVZ04TdoIPxuZaP3NxIibgKrfZPSx52nMnl6du0RTiKzaw05q_khs" frameBorder="0" scrolling="auto" allowFullScreen ></iframe> */}
            {/* <iframe  id="footer-signup" height="500" src="https://0760bbe7.sibforms.com/serve/MUIFAMwWrzhZG_8avPFBlXl_6u3-JgiXcopXlt0Wons8m8_DkZwEVbxnlcIqU3_GKVOgRdtGw8Zvg2TklYwOVE5nea7gVt7TtezQQdbsK-ucKu4MfIfBZPMxBoBRk4IAgkspixJdfhXUSLiZoEmDZ4tcDsUEHCLBotfU45ORbBUMvRzqogxpwGLnChUbhLVqnW7dOrJDdusjIU_K" frameborder="0" scrolling="auto" allowfullscreen ></iframe>
             */}
            <iframe title="footer-signup" id="footer-signup" height="450" src="https://0760bbe7.sibforms.com/serve/MUIFAEuQEojg7Q6TumnEkxlQNz8f4lZWS8pYM-EVlQJusjs9hiPEnrTcD-i9AfWxYC0PjKdN6LdNKcm8G95WamYZnGgyc_6dKKiPiQRAkRspb_WaD-DntOVdX2Szq8E7EdAGR6sLqMoMZqGcf56BHHy1GZk1AcLYQQC_A8UF2VcmE-opa4cPptGFqrVtDoZ0kQ4HivStMpRlisMm" frameborder="0" scrolling="auto" allowfullscreen ></iframe>
           
    
       

            <div className="footer-links">
                <p>©Dina Spencer 2025</p>
            
               <p><a className="english-contact" href="mailto:hello@dinaspencer.net?Subject=Contact from dinaspencer.net">Contact</a></p> 
               {/* <p><a href="#english" className="english-contact">Fluency guide</a></p>  */}
               {/* <p><a href="https://forms.gle/C91qTGD4j1kYSs1X6" className="english-contact">Book a class</a></p>  */}
            {/* <p id="newsletter" onClick={handleShow}>English newsletter signup</p> */}

            
           </div>
           
   
        <div className="social-icons-container">
                
                <ul className="social-icons">
                    <li><a href="https://www.linkedin.com/in/dinakspencer/" target="_blank" rel="noreferrer"><SiLinkedin size={30} style={{opacity: 0.6}} /></a></li>
                    {/* <li><a href="https://www.instagram.com/dina.spencer.photo/" target="_blank" rel="noreferrer"><SiInstagram size={30} style={{opacity: 0.6}}/></a></li> */}
                    {/* <li><a href="https://github.com/dinaspencer/" target="_blank" rel="noreferrer"><SiGithub size={30} style={{opacity: 0.6}}/></a></li> */}
                    {/* <li><a href="https://unsplash.com/@dinaspencer" target="_blank" rel="noreferrer"><SiUnsplash size={30} style={{opacity: 0.6}}/></a></li> */}
                    
                    
                </ul>
            </div>
        
            </div>

        </section>
        </>
    )
}