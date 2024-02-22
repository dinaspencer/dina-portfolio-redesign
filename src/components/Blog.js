import { Button } from "react-bootstrap";

export default function Blog () {

    return (
        <>
        <section id="blog">
        <div className="container-main">
            <h2>i've been freelancing in Spain since before the digital nomad visa was a thing.</h2>
            <div className="blog-main">
                    <a className="blog-square" href="https://blog.dinaspencer.net/how-to-become-autonomo-in-spain/" target="_blank" rel="noreferrer">
                        <img className="blog-img" src="/img/blog1.jpg" alt="statue"></img>
                        <p>Don’t Want to Be an Auxiliar de Conversación Anymore? Here’s How to Become Autónomo in Spain.</p>
                    </a>
                    <a className="blog-square" href="https://blog.dinaspencer.net/hidden-corners-of-spain-orbaneja-del-castillo/" target="_blank" rel="noreferrer">
                        <img className="blog-img" src="/img/blog2.jpg" alt="waterfall"></img>
                        <p>Hidden Corners of Spain: Orbaneja del Castillo</p>
                    </a>
                    <div className="blog-square">
                        <div className="blog-img"></div> 
                        
                    </div>
                    </div>
                    <Button id="blog-open" className="blog-btn">Read more about life in Spain</Button>
        </div>
        </section>
        </>
    )
}