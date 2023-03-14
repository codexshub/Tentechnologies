import React from 'react';
import './Service.css';
import service from './Service-Img/servicemain.jpg';
import webdev from './Service-Img/webdev.jpg';
import seo from './Service-Img/seo.jpg';
import data from './Service-Img/data.jpg';
import youtube from './Service-Img/youtube.jpg';
import growth from './Service-Img/growth.jpg';
import stock from './Service-Img/stock.jpg';
import { Link } from 'react-scroll';

const Service = () => {
  return (
    <>
      <div className="container-fluid">
        <div id='row-1' className="row">
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="service_img text-center">
              <img className='servicemain text-center' src={service} alt="service" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
            <div id='service_title' className='service_title'>
              <h1>We provide you the best <br /><span>Services</span></h1>
              <p>Just one click away to grow your Business and Network,<br />Give us a chance to Help you. </p>
              <Link smooth={true} duration={1000} id="letgo" to="our_service">Let's Go</Link>
            </div>
          </div>
          </div>
      </div>

      {/* Service Menu Start */}

          <div className="container">
          <div id='row2' className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h1 className='text-center' id='our_service'>Explore Our <span>Services</span></h1>
          </div>
            <div id='card-1' class="card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-5">
              <img src={webdev} className="card-img-top" alt="Web-development" />
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Create your own Website that will help you to grow your Network.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div id='card-2' class="card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-5">
              <img src={seo} className="card-img-top" alt="SEO Analytics" />
              <div className="card-body">
                <h5 className="card-title">SEO Analytics</h5>
                <p className="card-text">Rank your Website on Top in the search result to have more users.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div id='card-3' class="card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-5">
              <img src={data} className="card-img-top" id='Data_Analytics' alt="Data Analytics" />
              <div className="card-body">
                <h5 className="card-title">Data Analytics</h5>
                <p className="card-text">Some quick example text to build on the card Lorem ipsum dolor sit amet.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div id='card-4' class="card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-5">
              <img src={youtube} className="card-img-top" alt="Youtube" />
              <div className="card-body">
                <h5 className="card-title">Growth YouTube</h5>
                <p className="card-text">Grow your Youtube channel to get more Engagement and Reach.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div id='card-5' class="card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-5">
              <img src={growth} id="growth" className="card-img-top" alt="Growth" />
              <div className="card-body">
                <h5 className="card-title">Business Growth</h5>
                <p className="card-text">Make your Business more profitable and Scalable bhai kya kar raha tu.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            <div id='card-6' class="card col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 mt-5">
              <img src={stock} className="card-img-top" id='stock' alt="stock" />
              <div className="card-body">
                <h5 className="card-title">Manage SIP</h5>
                <p className="card-text">Let your money work for you, Manage your Systematic Investment Plan.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
            </div>
 
    </>
  )
}

export default Service