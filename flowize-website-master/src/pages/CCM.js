import React from 'react';
import '../App.css';


const ccm_image = require("../images/image 9.png")
const devider_image = require("../images/image 13.png")



function CCM() {
  return (
    <div className="App">
    <div className='ccm'>
        <header className="header">
          <h1>CCM</h1>
        </header>
        <img className='image' src={ccm_image}/>
        <br></br>
        <button className='button'>Trykk her</button>
        <hr/>
        <div className='content'>
          
            <div className='devider'>
               <div>
                <h3>Lorem Ipsum</h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                <br/>
                <br/>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

               </div>
              <img src={devider_image}/>
            </div>
        </div>
        <hr />
    </div>
  </div>
  );
}

export default CCM;
