import React from 'react';
import './Contact.css';
import Contactimg from './Contact-img/contact-us.jpg';

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div id='row-6' className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center">
            <div className="contact-img">
              <img id='contact_image' src={Contactimg} alt="contact-image" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div id='contact_title'>
              <h1>Drop your <span>Message</span> here !</h1>
              <p>Your message is Important, Feel free to contact us,<br /><span>We are here to help you out.</span></p>
              <input id='input' type="nane" placeholder='Enter your Name...' /><br />
              <input id='input' type="text" placeholder='Your number...' /><br />
              <input id='input' type="email" placeholder='E-Mail adderss...' /><br />
              <textarea id='textarea' placeholder='Your massage...' cols="48" rows="5"></textarea><br />
              <div className="col-xxl-7 col-xl-9 col-lg-10 col-md-8 col-sm-9 col-10 text-center">
                <button id='send'>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact