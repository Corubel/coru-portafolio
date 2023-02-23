import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import  '../estilos/contactform.css'

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m03okli",
        "template_9dkrjuv",
        form.current,
        "zV9P7foTSgVjf6Per"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="form">
      <form  ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="user_name" placeholder="Nombre completo"/>

        <label>Email</label>
        <input type="email" name="user_email" placeholder="ejemplo@gmail.com" />
        
        <label>Mensaje</label>

        <textarea name="message" placeholder="Mensaje..." />
        <input className="btn" type="submit" value="Send"  />
      </form>
    </div>
  );
}

export default ContactForm;
