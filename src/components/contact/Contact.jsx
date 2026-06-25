import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent (demo form).");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        
        {/* === Left Option Cards === */}
        <div className="contact__options">
          
          <article className="contact__option">
            <i className="fas fa-envelope"></i>
            <h4>Email</h4>
            <h5>vaseegaran.n@gmail.com</h5>
            <a href="mailto:vaseegaran.n@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <i className="fab fa-linkedin-in"></i>
            <h4>LinkedIn</h4>
            <h5>Vaseegaran N</h5>
            <a href="https://www.linkedin.com/in/vaseegaran-nandakumar-53b573216/" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
          </article>

          <article className="contact__option">
            <i className="fas fa-phone-alt"></i>
            <h4>Phone / Call</h4>
            <h5>+91 9345537338</h5>
            <a href="tel:+919345537338">Call Mobile</a>
          </article>

        </div>

        {/* === Right Message Form === */}
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Full Name" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email Address" 
            required 
          />
          <textarea 
            name="message" 
            rows="7" 
            placeholder="Your Message" 
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
