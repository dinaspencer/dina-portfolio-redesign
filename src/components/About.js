import { MdLocationPin } from "react-icons/md";
import { MdHome } from "react-icons/md";


export default function About () {
    
    return (
        <>
        <section id="about">
            <div className="container-main mid-width-left">
                <h1>who am I?</h1>
                <h5><MdLocationPin />  Zaragoza, Spain</h5>
                <h5><MdHome /> Winston-Salem, North Carolina</h5>
                <p>I decided to leave the US and have lived in Spain for over ten years. In Spain I've worked as an auxiliar de conversación in high schools, a community manager in a startup, a digital editor, and a business English communication coach. After much experience navigating the Spanish visa system, I'm now Autónoma with long-term residency.</p>
                <p>With a psychology degree and years of teaching experience under my belt, I coach and support business English learners to speak more fluently and feel more confident. I also create speaking games using the React framework to practice coding on a real-world project.</p>
                <p>Hobbies: personal finance and budgeting, photography, singing in choirs, running, cycling, writing, reading, and learning to code.</p>  
            </div>
            <div class="image-half-page" style={{ height: 100, backgroundImage: "url(/img/profile.jpg)" }}>
             {/* <img src="url(/img/profile.jpg)" height="200" /> */}
            </div>
        </section>
        </>
    )
}