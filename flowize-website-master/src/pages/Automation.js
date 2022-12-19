import React from 'react';
import '../App.css';


const header_image = require("../images/image 7.png")
const devider_image = require("../images/image 26.png")


function Automation() {
  return (
    <div className="App">
    <div className='autmation'>
        <header className="header">
          <h1>Automatisering</h1>
          
          <img src={header_image} />
        </header>
        <h3 className='undertitle'>Automatiser arbeidsflyt og kundekommunikasjon.</h3>
        <div className='content'>
          <h3>Effektivisering av arbeidsflyt og kundekommunikasjon med automatisering</h3>
          <div>
            Med Flowize kan du enkelt sette opp nye automatiserte prosesser i løpet av få  timer. Det er så enkelt som å “dra og slippe” komponenter inn i flytdiagrammet gjennom plattformen. Du er designer, og det er svært enkelt!
            <br/>
            <h3>Spar tid, øk produktiviteten og øk lønnsomheten.</h3>
            <div className='devider'>
               <ul>
                <li>Manuelle prosesser er kostbare og kan medføre høy risiko. Automatisering av arbeidsflyt og kundekommunikasjon kan redusere denne risikoen.</li>
                <li>Forenkle dine tungvinte og tidkrevende arbeidsprosesser med automatisering. Det gir kort “time to market” og produktivitet og lønnsomhet vil øke.</li>
                <li>Sanntidsbehandling av</li>
                <li>Webhook listeners</li>
                <li>Planlagt prosessering (Scheduling)</li>
                <li>Handlingsbaserte hendelser</li>
                <li>Tilrettelegge for manuell behandling, hvis nødvendig</li>
              </ul>
              <img src={devider_image}/>
            </div>

            <h3>En fleksibel og allsidig IT plattform</h3>
              Flowize lar deg på en enkel måte integrere alle dine interne systemer og databaser med eksterne løsninger og datakilder. Tungvinte og tidkrevende operasjoner kan automatiseres og dermed spare tid og forbedre produktiviteten. Flowize er et uavhengig verktøy som gir deg muligheten til å håndtere dataene dine i henhold til gitte preferanser og under full kontroll.
            <h3>Ingen koding eller spesielle kompetansekrav</h3>
            Den lave kodetilnærmingen i Flowize gjør det mulig for bedriften din å teste nye prosesser, sjekke resultatet, og dermed redusere tiden til markedet betydelig. Det gir bedriften mulighet til å optimalisere design, administrasjon og levering av fysisk, digital og online kommunikasjon, for eksempel fakturaer, brev, webskjemaer og annonser, på tvers av alle moderne kanaler.
            
            
            
        </div>
        <button className='button'>Trykk her</button>
      </div>
    </div>
  </div>
  );
}

export default Automation;
