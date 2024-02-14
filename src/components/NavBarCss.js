
import { Link, animateScroll as scroll } from "react-scroll";

export default function NavBar1 () {

    return (
        <div>
           
        <div className="header"></div>
   <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
   
   <label for="openSidebarMenu" className="sidebarIconToggle">
     <div className="spinner diagonal part-1"></div>
     <div className="spinner horizontal"></div>
     <div className="spinner diagonal part-2"></div>
   </label>
   <div id="sidebarMenu">
     <ul className="sidebarMenuInner">
            <li><Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                    >Dina Spencer</Link></li>
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
   </div>
   
   </div>
         
    ) 
}
