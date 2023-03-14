import React from 'react';
import './About.css';
import Aboutus from './About-img/Aboutus-img.jpg';
import github from './About-img/github.png';
import insta from './About-img/instagram.png';
import linkedin from './About-img/linkedin.png';
import twitter from './About-img/twitter.png';


const About = () => {
  return (
    <>
      <div className="container-fluid">
        <div id='row-5' className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text-center">
            <div className="about_img">
              <img id='Aboutus' src={Aboutus} alt="Aboutus" />
            </div>
          </div>
          <div id='about' className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <div id="about_page">
              <div id='about_title' className='about_title'>
                <h1>Be a part of our community <br /><span>TenTechnologies</span></h1>
                <p>What are you waiting for, You are just one click away to Join Us,<br />Follow us on our <span>Social Nework.</span></p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-2 col-sm-3 col-4" id='social_media'>
                <a href="https://www.linkedin.com/in/shubhjeet-chakraborty-25a0821b6/?originalSubdomain=in" target="_blank"><img id='linkedin' src={linkedin} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/shubxcode/" target="_blank"><img id='insta' src={insta} alt="Instagram" /></a>
                <a href="https://github.com/ShubXcode" target="_blank"><img id='github' src={github} alt="Github" /></a>
                <a href="https://twitter.com/ShubXcode" target="_blank"><img id='twitter' src={twitter} alt="Twitter" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About