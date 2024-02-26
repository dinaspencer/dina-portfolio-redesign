// import { Button } from "react-bootstrap";

export default function Blog () {

    return (
        <>
        <section id="blog">
        <div className="container-main">
            <h3>i've been freelancing in Spain since before the digital nomad visa was a thing.</h3>
            <div className="blog-main">
                    <a className="blog-square" href="https://blog.dinaspencer.net/how-to-become-autonomo-in-spain/" target="_blank" rel="noreferrer">
                        <img className="blog-img" src="/img/blog1.jpg" alt="statue"></img>
                        <p>Here’s How to Become Autónomo in Spain After Auxiliaring.</p>
                    </a>
                    <a className="blog-square" href="https://blog.dinaspencer.net/hidden-corners-of-spain-orbaneja-del-castillo/" target="_blank" rel="noreferrer">
                        <img className="blog-img" src="/img/blog2.jpg" alt="waterfall"></img>
                        <p>Hidden Corners of Spain: Orbaneja del Castillo</p>
                    </a>
                    <a className="blog-square" href="https://blog.dinaspencer.net/life-after-auxiliaring/" target="_blank" rel="noreferrer">
                        <img className="blog-img" src="/img/blog3.jpg" alt="park"></img> 
                        <p>Life After Auxiliaring</p>
                    </a>
                    </div>
                    <a id="blog-open" className="blog-btn" href="https://blog.dinaspencer.net" target="_blank" rel="noreferrer">Read more about life in Spain</a>
        </div>
        </section>
        </>
    )
}