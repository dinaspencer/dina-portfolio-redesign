import { Link, animateScroll as scroll } from "react-scroll";


export default function NavBar () {

    return (
        <>
        <section id="navbar-sticky">
            <h1 id="header-name">DINA SPENCER</h1>
        <ul className="navbar">
            <li><Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                    >Services</Link></li>
            <li><Link
                activeClass="active"
                to="dev-section"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                    >Projects</Link></li>
            <li><Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                    >About</Link></li>
            <li><Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                    >Contact</Link></li>
            <li><Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                    >Blog</Link></li>
            
        </ul>


        
        </section>
        </>
    )
}