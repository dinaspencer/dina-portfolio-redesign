import Accordion from "react-bootstrap/Accordion";

export default function Cv () {

    return (

        <section id="cv" className="cv-accordion">    
        <div className="container-main-cv cv-accordion">
           
        <Accordion flush className="cv-accordion">
      <Accordion.Item eventKey="0" className="cv-accordion">
        <Accordion.Header className="cv-accordion"><h1>curious about my professional experience? </h1></Accordion.Header>
        <Accordion.Body className="cv-accordion">
        <div className="cv-show">
        <div className="cv-wide">
            <div className="cv-wrapper">
            <div className="cv-individual">
            <p><strong>freelance english coach <span className="year">2020-2024</span></strong></p>
            <p>coach business English in the pharmaceutical industry.</p>
            <p><em>results: students promoted, increased confidence and fluency.</em></p>
            </div>
            <div className="cv-individual">
            <p><strong>freelance web developer <span className="year">2022-2024</span></strong></p>
            <p>build projects and websites using HTML, CSS, JavaScript and React.</p>
            <p><em>results: higher visibility, improved UX</em></p>
            </div>
            <div className="cv-individual">
            <p><strong>ynab <span className="year">2020-2021</span></strong></p>
            <p>customer support for a popular finance app.</p>
            <p><em>results: customer issues resolved, increased customer financial awareness.</em></p>
            </div>
            
            </div>
            <div className="cv-wrapper">
            <div className="cv-individual">
            <p><strong>pharmaboardroom <span className="year">2019-2020</span></strong></p>
            <p>engaging article writing, email marketing, social media.</p>
            <p><em>results: increased digital product sales and social followers.</em></p>
            </div>
            <div className="cv-individual">
            <p><strong>lingo live <span className="year">2015-2018</span></strong></p>
            <p>manage coaches, coach ESL learners in tech industry.</p>
            <p><em>results: increased coach engagement and learner fluency.</em></p>
            </div>
            <div className="cv-individual">
            <p><strong>spain ministry of education <span className="year">2013-2019</span></strong></p>
            <p>plan engaging conversation lessons in public schools.</p>
            <p><em>results: greater connection with students, improved public speaking skills.</em></p>
            </div>
            </div>
        </div>
        <h1>EDUCATION </h1>
        <div className="cv-wide">
            <div className="cv-wrapper-ed">
            <div className="cv-individual">
            <p>unc wilmington 2005</p>
            <p>bachelor of arts, psychology and spanish</p>
            </div>
            <div className="cv-individual">
            <p>international TEFL academy 2017</p>
            <p>TEFL certificate</p>
            </div>
            </div>
            </div>
        </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>           
</section>
    )

    
}


