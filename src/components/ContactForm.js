

import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/30991180-d7be-11ee-bfc7-632ec9bb1aaa"; 


export default function ContactForm() {

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
      </form>
    );
  }