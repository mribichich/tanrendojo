import React from 'react';

import ContactoHeader from './images/headers/ContactoHeader.png';
import ShureiNoMon from './images/ShureiNoMon.jpg';
import Vilo from './images/Vilo.png';
import Lasalle from './images/Lasalle.png';
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
          src={Vilo}
          alt="Vilo"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 10,
            height: 80
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
        frameborder="0"
        style={{ border: 0 }}
        scrolling="yes"
        marginheight="0"
        marginwidth="0"
        src="http://maps.google.com.ar/maps?f=q&amp;source=s_q&amp;hl=es&amp;geocode=&amp;q=Bartolome+Cruz+1175&amp;sll=-38.341656,-63.28125&amp;sspn=47.741104,87.714844&amp;ie=UTF8&amp;hq=&amp;hnear=Bartolom%C3%A9+Cruz+1175,+Vicente+L%C3%B3pez,+Buenos+Aires&amp;ll=-34.523813,-58.474774&amp;spn=0.015911,0.025749&amp;z=15&amp;output=embed"
      />
      <br />
      <small>
        <a
          href="http://maps.google.com.ar/maps?f=q&amp;source=embed&amp;hl=es&amp;geocode=&amp;q=Bartolome+Cruz+1175&amp;sll=-38.341656,-63.28125&amp;sspn=47.741104,87.714844&amp;ie=UTF8&amp;hq=&amp;hnear=Bartolom%C3%A9+Cruz+1175,+Vicente+L%C3%B3pez,+Buenos+Aires&amp;ll=-34.523813,-58.474774&amp;spn=0.015911,0.025749&amp;z=15"
          target="_blank"
          style={{ color: '#0000FF', textAlign: 'left' }}
        >
          Ver mapa más grande
        </a>
      </small>
    </p>
    <br />

    <div style={{ textAlign: 'center' }}>
      <p>
        <span class="ttl_cont">DIRECCION</span>
        <br />
        <img
          src={Lasalle}
          alt="Lasalle Florida"
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 10,
            height: 80
          }}
        />
        <span class="txt">
          <strong>Colegio La Salle Florida</strong>
        </span>
        {/* <img src={Vilo} alt="Vilo" style={{ height: 25 }} /> */}
        <br />
        <span style={{ fontSize: 13 }}>
          Pres. Hipólito Yrigoyen 2599 - Florida - Buenos Aires - Argentina
          <br />
          A cinco cuadras de Au. Panamericana 1100
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
        <span style={{ fontSize: 13 }}>Miércoles y Viernes de 18 a 19hs.</span>
      </p>
      <p>
        <span class="txt">
          <strong>Juveniles y Adultos</strong>
        </span>
        <br />
        <span style={{ fontSize: 13 }}>Miércoles y Viernes de 19 a 20hs.</span>
      </p>
      <br />
      <p>
        <span class="ttl_cont">ACCESO</span>
        <br />
        <span class="txt">
          <strong>Colectivos</strong>
        </span>
        <br />
        <span style={{ fontSize: 13 }}> 130 - 203 - 161 </span>
      </p>
      <p>
        <span class="txt">
          <strong>Tren</strong>
        </span>
        <br />
        <span style={{ fontSize: 13 }}>
          Linea Mitre - Ramal Retiro-Mitre - Estación Florida
        </span>
      </p>
    </div>
    <br />
    <a name="Mapa" href />
    <p style={{ textAlign: 'center' }}>
      {/* <iframe
        width="600"
        height="450"
        frameborder="3"
        scrolling="yes"
        marginheight="0"
        marginwidth="0"
        src="https://www.google.com.ar/maps/place/Instituto+La+Salle+Florida/@-34.5272655,-58.5014043,17z/data=!4m12!1m6!3m5!1s0x95bcb12dbf43bacf:0xe4e3c3a52bf53ef2!2sInstituto+La+Salle+Florida!8m2!3d-34.5272699!4d-58.4992156!3m4!1s0x95bcb12dbf43bacf:0xe4e3c3a52bf53ef2!8m2!3d-34.5272699!4d-58.4992156?hl=en"
      /> */}
      <iframe
        width="600"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowfullscreen
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.0379900896523!2d-58.501404284215006!3d-34.52726546096496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb12dbf43bacf%3A0xe4e3c3a52bf53ef2!2sInstituto+La+Salle+Florida!5e0!3m2!1sen!2sar!4v1516664337023"
      />
      <br />
      <small>
        <a
          href="https://www.google.com.ar/maps/place/Instituto+La+Salle+Florida/@-34.5272655,-58.5014043,17z/data=!4m12!1m6!3m5!1s0x95bcb12dbf43bacf:0xe4e3c3a52bf53ef2!2sInstituto+La+Salle+Florida!8m2!3d-34.5272699!4d-58.4992156!3m4!1s0x95bcb12dbf43bacf:0xe4e3c3a52bf53ef2!8m2!3d-34.5272699!4d-58.4992156?hl=en"
          target="_blank"
          style={{ color: '#0000FF', textAlign: 'left' }}
        >
          Ver mapa más grande
        </a>
      </small>
    </p>
  </div>
);

export default Contact;
