import { MdAutoGraph } from "react-icons/md";


export default function Main () {
    
    return (
        <>
        <section id="main">
            <div className="container-main">
            <h1 className="heading">Strategy & Operations Consultant | MBA | Helping Organizations Optimize Operations & Drive Growth</h1>
                <p>Combining psychology, data analytics, and cross-cultural expertise to solve complex business challenges.</p> 
                <p>Based in Zaragoza, working with clients globally.</p>
                {/* <div className="profile-round" style={{backgroundImage:"url(/img/business-photo-square.jpg)",  backgroundSize: "contain"}}></div> */}
                <h1 className="strategy-icon"><MdAutoGraph /></h1>
                
            </div>
        </section>
        </>
    )
}