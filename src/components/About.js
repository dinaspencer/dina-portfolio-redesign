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
                <p>I'm a strategy and operations consultant with an MBA and a psychology background, specializing in helping organizations grow through data-driven decision-making, process optimization, and high-performing teams. Based in Zaragoza, I work with clients across Europe and the Americas.</p>
                <p>What makes my approach different is the intersection of <strong>psychology, technology, and business strategy.</strong> I understand how people think, how systems work, and how to bridge the gap between the two. </p>
                <p>My career has taken me from corporate America to startup operations, from managing remote teams of 50+ to scaling digital marketing initiatives that reached 100,000+ monthly visitors. Along the way, I've led growth strategies, built operational systems, and coached professionals to career advancement. In 2025, I completed my Executive MBA to enhance my strategic toolkit.</p>
                <p>Today, I'm focused on tackling challenges in digital strategy, operations, business growth, and organizational communication. My clients range from startups and small businesses to established companies in pharma and tech.</p>
                <p>Originally from North Carolina, I've lived in Spain for over a decade and hold long-term residency as Autónoma. When I'm not solving business problems, you'll find me practicing photography, swing dancing, percussion, and singing.</p>  
            </div>
            <div className="image-half-page">
            <img src="/img/spainmap.png" alt="spain-map" className="background-map"/>
             <img src="/img/profile.jpg" alt="profile" className="profile-overlay" height="180" />
                
            </div>
        </section>
        </>
    )
}