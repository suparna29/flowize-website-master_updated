import '../App.css';
import React from 'react';
import TeamMember from './components/TeamMember';

const handshake_image = require("../images/handshake.png")



function About() {
  return (
    <div className="App">
      <div className='about'>
        <div className='header'>
         <h1>Om Flowize</h1>
        </div>
        <div className='content'>
          <p>Vi hjelper deg med din digitale transformasjon: Integrerer systemer, automatiserer prosesser og kommuniserer med dine omgivelser (kunder, partnere og ansatte).</p>
          <div>
            <h2>Historien om oss</h2>
            <p>
            Flowize Nordic AS startet sin virksomhet i januar 2019 med formål om å tilføre gode verktøy og kompetanse til norske virksomheter i deres arbeid med digitalisering og automatisering av sine operasjoner. <br /><br />Gjennom erfaring opparbeidet over mange år hadde gründerne et solid faglig grunnlag, godt kjennskap til det norske markedet, og ved oppstart hadde de klare visjoner om hvordan Flowize Nordic skulle oppnå sine målsettinger. <br /><br />Flowize Nordic innledet tidlig et samarbeid med Flowize BV i Nederland. Deres produkt FLOWIZE er en av grunnpilarene i Flowize Nordic sin forretningsvirksomhet. Produktet gir en enkel og unik mulighet for å kople sammen ulike systemer og informasjonskilder som danner grunnlag for automatiserte beslutninger. I de tilfeller det kreves menneskelig inngrep i beslutningsprosessen, er det også en del av hva produktet tilbyr. FLOWIZE er i utgangspunktet ikke ment å skulle erstatte allerede eksisterende produkter, men skal derimot være et verktøy som knytter sammen og orkestrerer eksisterende produkter for å oppnå bedre utnyttelse av disse produktene.<br /><br />Store og små IT-firmaer leverer i dag skytjenester til sine kunder. Ettersom FLOWIZE også er en skytjeneste, har Flowize Nordic derfor inngått samarbeid med andre skytjeneste leverandører for å kunne levere denne type tjenester til en fornuftig kostnad. Eksempler kan være i) digital kundekommunikasjon, hvor vi har samarbeid med leverandøren OpenText, eller ii) bruk av tjenester basert på kunstig intelligens (AI), hvor vi har et samarbeid med IBM.
            </p>
          </div>
          <hr />
          <div >
            <img src={handshake_image} />
            <div>Flowize Nordic besitter selvfølgelig dyp kompetanse innenfor sine spesialområder, slik som integrasjon mot ulike systemer, automatisering av prosesser, og ikke minst, hvordan digital kommunikasjon fungerer.</div> 
            <div>I tillegg har vi en bred generell IT-kompetanse  (Prosjektledelse, Arkitektur, Programmerings- og Database kunnskap, m.m.) som vi bruker i vårt daglige arbeid hos våre kunder.<br /><br />Store og små kunder har valgt våre løsninger og vår kompetanse. <br /><br />Planlegg gjerne en demo og opplev Flowize.</div>
            <button>Trykk her</button>
          </div>
        </div>
        <hr />
        <h2>Teamet</h2>
        <div className="team">
          {
            [...Array(10)].map((e, i) => <TeamMember />)
          
          }
        </div>
      </div>
    </div>
  );
}

export default About;
