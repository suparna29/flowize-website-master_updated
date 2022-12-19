import React from 'react';
import '../App.css';

const header_image = require("../images/image 6.png")
const devider_image = require("../images/image 12.png")


function Integrations() {
  return (
    <div className="App">
      <div className='integrations'>
          <header className="header">
            <h1>Integrasjoner</h1>
            
            <img src={header_image} />
          </header>
          <h3 className='undertitle'>En plattformen som muliggjør raske integrasjoner mellom <br />forskjellige systemer og datakilder.</h3>
          <div className='content'>
            <h2>En plattform med komplett oversikt</h2>
            <div>
            Med en åpen API løsning får vi de fleste systemer til “å snakke sammen”.
            <br/>
            <br/>
            Dette muliggjør integrasjoner med egne systemer, gamle og nye, samt integrasjoner med eksterne datakilder fra kunder, leverandører eller partnere, eller hvilken som helst database. I alle tilfeller vil man alltid ha full kontroll over egne data.
            
              <div className='devider'>
                  <ul>
                    <li>JSON/Rest</li>
                    <li>Soap</li>
                    <li>XML</li>
                    <li>RAW</li>
                    <li>sFTP</li>
                    <li>Innkommende e-post</li>
                    <li>ODBC-databaser</li>
                    <li>SQL</li> 
                    <li>Ikke behov for å konvertere data</li>
                    <li>(Batch) datafiler</li>
                  </ul>
                  <img src={devider_image}/>
              </div>

              En fleksibel og allsidig IT plattform for integrasjon av dine datakilder Flowize lar deg på en enkel måte integrere alle dine interne systemer og databaser med eksterne løsninger og datakilder. Tungvinte og tidkrevende operasjoner blir enkle, sparer tid og forbedrer produktiviteten. Flowize er et uavhengig verktøy som gir deg muligheten til å håndtere dataene dine i henhold til gitte preferanser og under full kontroll.
              <br/>
              <br/>
              Ingen koding eller spesielle kompetansekrav. Den lave kodetilnærmingen i Flowize gjør det mulig for bedriften din å teste nye prosesser, sjekke resultatet, og dermed redusere tiden til markedet betydelig. Det gir bedriften mulighet til å optimalisere design, administrasjon og levering av fysisk, digital og online kommunikasjon, for eksempel fakturaer, brev, webskjemaer og annonser, på tvers av alle moderne kanaler.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integrations;
