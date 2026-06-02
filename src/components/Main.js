import { MdAutoGraph } from "react-icons/md";


export default function Main () {
    
    return (
        <>
        <section id="main">
            <div className="container-main">
            <h1 className="heading">Growing confidence. Building connections. Investing in community.</h1>
            <p className="strategy-icon"><MdAutoGraph /></p>
                <p>Zaragoza, Spain</p> 
                {/* <p>Based in Zaragoza, working with clients globally.</p> */}
                <div className="profile-round" style={{backgroundImage:"url(/img/pilar-image.jpg)",  backgroundSize: "contain"}}></div>
                
                
            </div>
        </section>
        </>
    )
}