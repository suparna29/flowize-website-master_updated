import React from 'react';
import '../App.css';


const companiy_logos = [
  require("../images/partners/klp-logo.png"),
  require("../images/partners/DNB_ASA_logo 1.png"),
  require("../images/partners/equinor-logo-rgb-16-9 1.png"),
  require("../images/partners/last ned 1.png"),
  require("../images/partners/logo-full-color-rgb 1.png"),
  require("../images/partners/nav-logo-hvit 1.png")
]

function Customers() {
  return (
    <div className="App">
    <div className='customers'>
        <header className="header">
          <h1>Kunder</h1>
          
        </header>
        <div className='partners'>
            {
              companiy_logos.map(image => (
                <div>
                 <img src={image} />
                </div>
              ))
            }
          </div>
        
      </div>
    </div>
  );
}

export default Customers;
