import React from 'react';
import { Link } from 'react-router-dom';

import PhoneIcon from './images/footer/PhoneIcon.png';
import mail2 from './images/footer/mail2.svg';
import facebook2 from './images/footer/facebook2.svg';
import instagram from './images/footer/instagram.svg';
import youtube_v2 from './images/footer/youtube_v2.svg';
import HidariMitsudomoe from './images/footer/HidariMitsudomoe.png';

const Footer = ({ isAuthenticated }) => (
  <footer>
    <div style={{ display: 'table', margin: '40px auto 10px auto' }}>
      <div className="footerImgCell">
        <img alt="" src={PhoneIcon} />
      </div>
      <div className="footerTextCell">
        <label>+54 9 11-5386-8322</label>
      </div>
      <div className="footerImgCell">
        <img alt="" src={mail2} />
      </div>
      <div className="footerTextCell">
        <a href="mailto:info@tanrendojo.com.ar">info@tanrendojo.com.ar</a>
      </div>
      <div className="footerImgCell">
        <img alt="" src={facebook2} />
      </div>
      <div className="footerTextCell">
        <a href="http://www.facebook.com/TanrenDojo">TanrenDojo</a>
      </div>
      <div className="footerImgCell">
        <img alt="" src={instagram} />
      </div>
      <div className="footerTextCell">
        <a href="https://www.instagram.com/tanren_dojo">TanrenDojo</a>
      </div>
      <div className="footerImgCell">
        <img alt="" src={youtube_v2} />
      </div>
      <div className="footerTextCell">
        <a href="https://www.youtube.com/channel/UCVF1KYoaLLKPKbLTWx3kbdg">
          TanrenDojo
        </a>
      </div>
      <div className="footerImgCell">
        <img alt="" src={HidariMitsudomoe} />
      </div>
      <div className="footerTextCell">
        {isAuthenticated ? (
          <Link to="/LogOff">Salir</Link>
        ) : (
          <Link to="/LogOn">Acceso</Link>
        )}
      </div>
    </div>
  </footer>
);

export default Footer;
