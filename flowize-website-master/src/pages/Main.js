import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

import Slider from "react-slick";



const companiy_logos = [
  require("../images/partners/klp-logo.png"),
  require("../images/partners/DNB_ASA_logo 1.png"),
  require("../images/partners/equinor-logo-rgb-16-9 1.png"),
  require("../images/partners/last ned 1.png"),
  require("../images/partners/logo-full-color-rgb 1.png"),
  require("../images/partners/nav-logo-hvit 1.png")
]

const integration_img = require("../images/image 6.png")
const auomation_img = require("../images/image 7.png")
const communication_img = require("../images/image 8.png")
const ccm_img = require("../images/image 11.png")

const workflow_img = require("../images/workflow.png")


function Main() {


  const { t, i18n } = useTranslation();

  var settings = {
    dots: true,
    arrows: false,
    autoplay: false,
    infinite: true,
    dotsClass: 'slick-dots-fw slick-dots',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

 

  return (
    
    
    <div className="App">
         <div className='main'>
         <Slider {...settings} className='slider'>
            <div className='slide processautomation'>
                <div className="slide-header">Prosessautomasjon (Workflow)</div>
                <div className='slide-images'>
                  <div className='slide-image bottom'>
                    <img src={integration_img}/>
                    <div className="slide-title">Integrasjon</div>
                  </div>
                  <div className='slide-image'>
                    <img src={auomation_img}/>
                    <div className="slide-title">Automatisering</div>
                  </div>
                  <div className='slide-image bottom'>
                    <img src={communication_img}/>
                    <div className="slide-title">Kommunikasjon</div>
                  </div>
                </div>
            </div>
            <div className='slide'>
            <div className="slide-header">Customer Communication Management (CCM)</div>
                <div className='slide-images'>
                  <div className='slide-image'>
                    <img src={ccm_img}/>
                  </div>
                  </div>

            </div>
          
          </Slider>
          
          <div className='partners-wrapper'>
             
          <div className='partners-scroll'>
            
          <div className='partners'>
            {
              companiy_logos.map(image => (
                <img src={image} />
              ))
            }
          </div>
          </div>
          </div>
          

          <p className="qoute">“ Den mest komplette og brukervennlige plattformen for digital transformasjon “</p>
          
          <img className='workflow' src={workflow_img} />
        </div>  
    </div>
  );
}

export default Main;
