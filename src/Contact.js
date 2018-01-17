import React from 'react';

import ContactoHeader from './images/headers/ContactoHeader.png';
import ShureiNoMon from './images/ShureiNoMon.jpg';
import Vilo_100px from './images/Vilo_100px.png';
// import Vilo from './images/Vilo.png';

const Contact = () => (
  <div>
    <div id="pageImageHeader">
      <img alt="" src={ContactoHeader} />
    </div>

    <br />

    <div style={{ textAlign: 'center' }}>
      <img alt="" src={ShureiNoMon} class="Loading" style={{ height: 200 }} />
    </div>

    <br />
    <br />

    <div style={{ textAlign: 'center' }}>
      <p>
        <span class="ttl_cont">DIRECCION</span>
        <br />
        <img
          src={Vilo_100px}
          alt="Vilo"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 10,
            height: 50
          }}
        />
        <span class="txt">
          <strong>Club Municipalidad de Vicente López</strong>
        </span>
        {/* <img src={Vilo} alt="Vilo" style={{ height: 25 }} /> */}
        <br />
        <span style={{ fontSize: 13 }}>
          Bartolomé Cruz 1175 - Vicente Lopez - Buenos Aires - Argentina
          <br />
          A una cuadra de Av. Del Libertador 1100
          <br />
          Tel.: +54 9 11-5386-8322
          <br />
          <a href="mailto:info@tanrendojo.com.ar">info@tanrendojo.com.ar</a>
        </span>
      </p>

      <a name="DiasYHorarios" href />

      <br />
      <p>
        <span class="ttl_cont">DIAS Y HORARIOS DE CLASE</span>
        <br />
        <span class="txt">
          <strong>Infantiles</strong>
        </span>
        <br />
        <span style={{ fontSize: 13 }}>
          Martes y Jueves de 18.30 a 19.30hs.
        </span>
      </p>
      <p>
        <span class="txt">
          <strong>Juveniles y Adultos</strong>
        </span>
        <br />
        <span style={{ fontSize: 13 }}>Martes y Jueves de 19.30 a 21hs.</span>
      </p>
      <p>
        <span class="txt">
          <strong>General</strong>
        </span>
        <br />
        <span style={{ fontSize: 13 }}>Sábados de 11.30 a 13hs.</span>
      </p>
      <br />
      <p>
        <span class="ttl_cont">ACCESO</span>
        <br />
        <span class="txt">
          <strong>Colectivos</strong>
        </span>
        <br />
        <span style={{ fontSize: 13 }}>21 - 29 - 161 - 168</span>
        <br />
        <span style={{ fontSize: 13 }}>
          Cualquier colectivo por Av. Maipú 1200 (Gral. Roca)<br />
          quedando a 10 cuadras del Club <a href="#Mapa">(Ver Mapa)</a>
        </span>
      </p>
      <p>
        <span class="txt">
          <strong>Tren</strong>
        </span>
        <br />
        <span style={{ fontSize: 13 }}>
          Linea Mitre - Ramal Retiro-Tigre - Estación Vicente López
        </span>
      </p>
    </div>
    <br />
    <a name="Mapa" href />
    <p style={{ textAlign: 'center' }}>
      <iframe
        width="600"
        height="450"
        frameborder="3"
        scrolling="yes"
        marginheight="0"
        marginwidth="0"
        src="http://maps.google.com.ar/maps?f=q&amp;source=s_q&amp;hl=es&amp;geocode=&amp;q=Bartolome+Cruz+1175&amp;sll=-38.341656,-63.28125&amp;sspn=47.741104,87.714844&amp;ie=UTF8&amp;hq=&amp;hnear=Bartolom%C3%A9+Cruz+1175,+Vicente+L%C3%B3pez,+Buenos+Aires&amp;ll=-34.523813,-58.474774&amp;spn=0.015911,0.025749&amp;z=15&amp;output=embed"
      />
      <br />
      <small>
        <a
          href="http://maps.google.com.ar/maps?f=q&amp;source=embed&amp;hl=es&amp;geocode=&amp;q=Bartolome+Cruz+1175&amp;sll=-38.341656,-63.28125&amp;sspn=47.741104,87.714844&amp;ie=UTF8&amp;hq=&amp;hnear=Bartolom%C3%A9+Cruz+1175,+Vicente+L%C3%B3pez,+Buenos+Aires&amp;ll=-34.523813,-58.474774&amp;spn=0.015911,0.025749&amp;z=15"
          style={{ color: '#0000FF', textAlign: 'left' }}
        >
          Ver mapa más grande
        </a>
      </small>
    </p>
  </div>
);

export default Contact;
