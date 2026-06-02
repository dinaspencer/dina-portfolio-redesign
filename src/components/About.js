import { MdLocationPin } from "react-icons/md";
import { MdHome } from "react-icons/md";
// import { Link, animateScroll as scroll } from "react-scroll";



export default function About () {
    
    return (
        <>
        <section id="about">
            <div className="container-main mid-width-left">
                <h1>who am I?</h1>
                <h5><MdLocationPin />  Zaragoza, Spain</h5>
                <h5 className="about-header"><MdHome /> Winston-Salem, North Carolina</h5>
                <p>I've spent 15+ years working across education, digital media, and operations — from corporate America to startups to freelancing in Spain. I have an MBA, a Project Management certification, and a habit of ending up wherever people, systems, and communication intersect. Current status: coaching professionals on English fluency and confidence.</p>
                <p>Originally from North Carolina, I came to Spain over a decade ago and never left. Right now I'm building something new at the intersection of language, business and community. When I'm not doing that, I'm usually behind a camera, on a dance floor, stretching on a yoga mat or making music.</p>

            </div>
            <div className="image-half-page">
            <img src="/img/spainmap.png" alt="spain-map" className="background-map"/>
             <img src="/img/zgz-image.jpg" alt="profile" className="profile-overlay" height="180" />
                
            </div>
        </section>
        </>
    )
}