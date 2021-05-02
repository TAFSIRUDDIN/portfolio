import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import emailjs from 'emailjs-com';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEnvelope, faMobileAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_2ggkkfs', 'template_n5i9rjh', e.target, 'user_vbx0via6kjNpugGuu2UWK')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <Container id="contact" fluid style={{backgroundColor: '#fff'}}>
            <div className="contact-head">
                <h1>Get In Touch</h1>
            </div>
            <div className="contact-items row">
                <div className="contact-item col-md-3">
                    <h5>Address</h5>
                    <p>4th Floor, Plot No.22,<br/>145 Murphy Canyon Rd.<br/>San Diego CA 2028</p><br></br>
                    <p><FontAwesomeIcon icon={faPhone} size="2x" color={'#20c997'} /> (060) 444 434 444</p>
                    <p><FontAwesomeIcon icon={faMobileAlt} size="2x" color={'#20c997'} />   (060) 555 545 555</p>
                    <p><FontAwesomeIcon icon={faEnvelope} size="2x" color={'#20c997'} />  chat@simone.com</p>
                </div>
                <div className="contact-item col-md-7">
                <form className="contact-form" onSubmit={sendEmail}>
                    <input type="hidden" name="contact_number" />
                    
                    <input type="text" name="user_name" placeholder="Name"/>
                    
                    <input type="email" name="user_email" placeholder="Email"/><br/>
                    
                    <textarea name="message" placeholder="Message"/><br/>
                    <input className="submit-btn" type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;