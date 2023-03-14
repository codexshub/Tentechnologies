import React from 'react';
import './Home.css';
import sky from './Home-img/sky.png';
import rocket from './Home-img/Rocket.png';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container">
        <div id='row' className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className="home_img">
              <img src={sky} alt="sky" id='sky' />
              <img src={rocket} alt="rocket" id='rocket' />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
            <div className='home_title'>
              <h1>Grow your business with <br /><span>TenTechnologies</span></h1>
              <p>You Create Dreams We will make that Happn.<br />Business and Network.</p>
              <NavLink className='getstart' to="/service">Get Start</NavLink>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home