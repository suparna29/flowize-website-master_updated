import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo from './images/Flowize_logo.svg';
import i18next from './i18n'

function Nav() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleDropdownOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>


        <div onClick={handleOpen} className="top-header " >
           <Link to="/"><img src={logo} className="logo" alt='logo'/></Link> 
              
            {
              open 
              ? <div className="menu-button">X</div>
              : <div className="menu-button">N</div>
            }
            
        </div>
        <nav className={`banner ${open ? "navbar show" : "navbar"}`}>
        
          <Link className='dropdown' onClick={handleDropdownOpen}>{i18next.t('nav.solutions')}</Link>
          {
            dropdownOpen
            ? <div className='dropdown-content'>
                  <Link to="ccm">CCM</Link>
                  <Link to="integrasjoner">Integrasjoner</Link>
                  <Link to="automatisering">Automatisering</Link>
                  <Link to="kommunikasjon">Kommunikasjon</Link>
              </div>
            :""
          }
          
          <Link to="/kunder">{i18next.t('nav.customers')}</Link>
          <Link to="/partnere">{i18next.t('nav.partners')}</Link>
          <Link to="/blogg">{i18next.t('nav.blog')}</Link>
          
          <Link className='right' to="/om-flowize">{i18next.t('nav.about')}</Link>
          <Link  className='right' to="/kontakt-oss">{i18next.t('nav.contact')}</Link> 
        
        
      </nav>

    </div>
  );
}

export default Nav;
