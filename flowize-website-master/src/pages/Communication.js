import React from 'react';
import '../App.css';


const header_image = require("../images/image 8.png")

function Communication() {
  return (
   
    <div className="App">
      <div className='communication'>
          <header className="header">
            <h1>Kommunikasjon</h1>
            
            <img src={header_image} />
          </header>
          <h3 className='undertitle'>Automatiser og personifiser dine kommunikasjonsløsninger med presisjon.</h3>
          <div className='content'>
            <h3>Bygg unike kundereiser med automatisert og personifisert digital kommunikasjon</h3>
            Ha kontroll på når og hvordan du kommuniserer med dine kunder på tvers av ulike kommunikasjonsløsninger.
            <br/>
            Med Flowize er det mulig å bygge HTML-basert innhold, PDF eller meldinger (SMS, Facebook Messenger, Twitter, etc.).
            <h3>En personifisert innholdsskaper</h3>
            <h3>En fleksibel og allsidig IT plattform</h3>
            <h3>Ingen koding eller spesielle kompetansekrav</h3>
            <br/>
            <button className='button'>Trykk her</button>
          </div>
      </div>
    </div>
  );
}

export default Communication;
