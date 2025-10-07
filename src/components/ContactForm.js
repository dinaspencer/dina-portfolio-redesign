

import React, { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';


const FORM_ENDPOINT = "https://public.herotofu.com/30991180-d7be-11ee-bfc7-632ec9bb1aaa"; 


export default function ContactForm() {

  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }
    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }
        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };
  if (submitted) {
    return (
      <>
        <h2>Thanks for your message!</h2>
        <div>I'll get back to you as soon as I can.</div>
      </>
    );
  }


    return (
      <>
      <form name="contact"  id="contact-form"  action="https://public.herotofu.com/v1/30991180-d7be-11ee-bfc7-632ec9bb1aaa" accept-charset="UTF-8"
      onSubmit={handleSubmit}
      method="POST">
       
        <p>
          <label htmlFor="name">Name</label> <br />
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="email">Email</label> <br />
          <input type="email" id="email" name="email" required />
        </p>
        <p>
          <label htmlFor="message">Message</label> <br />
          <textarea id="message" name="message" required></textarea>
        </p>
        <p>
          <input id="submit-btn" type="submit" value="Submit message" />
        </p>
        <div id="gotcha" aria-hidden="true">
      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" />
    </div>
    {/* <p>
          <Button  className="newsl-btn" onClick={handleShow}>Subscribe to my newsletter</Button>
    </p> */}
      </form>

      {/* <Offcanvas show={show} onHide={handleClose} placement="end" className="services-modal">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   

                    <iframe title="newsletter" id="services-signup" src="https://0760bbe7.sibforms.com/serve/MUIFAB3Cl4IkiBvZLAfRkqhSw3pAul-UdAfENUIdIVKtG03yyjsQvi3meNa90ARXYW2pwM5XQ0-2EsTwqFRSRQoRumjM_n0oyg8Kzn7Os1l1K8Pke5VLK8sn0WOOWs8K5O8s8aZQuRzZbn7_rSg28sbMgFUVjjLj2JwDmsiz01_-pI8x98Jl8WL9YojtTvNQda0XU-qCjLRT_cF9"  scrolling="auto" allowFullScreen ></iframe>
                    
                </Offcanvas.Body>
            </Offcanvas> */}
      </>
    );
  }