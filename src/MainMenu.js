import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => (
  <nav>
    <ul id="menu">
      <li>
        <Link to="/Home">HOME</Link>{' '}
      </li>
      <li>
        <Link to="/Karatedo">KARATE-DO TRADICIONAL</Link>{' '}
      </li>
      <li>
        <Link to="/Dojo">DOJO</Link>{' '}
      </li>
      <li>
        <Link to="/KaratedoAndTheKids">KARATE Y EL NIÑO</Link>{' '}
      </li>
      <li>
        <Link to="/KaratedoAndTheWomen">KARATE-DO Y LA MUJER</Link>{' '}
      </li>
      <li>
        <Link to="/Gallery">FOTOS</Link>{' '}
      </li>
      <li>
        <Link to="/News">NOVEDADES</Link>{' '}
      </li>
      <li>
        <Link to="/Contact">CONTACTO</Link>{' '}
      </li>
    </ul>
  </nav>
);

export default MainMenu;
