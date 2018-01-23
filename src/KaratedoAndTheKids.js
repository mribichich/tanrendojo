import React from 'react';

import KarateYElNiñoHeader from './images/headers/KarateYElNiñoHeader.png';
import JereSicoDachi from './images/karatedoAndTheKids/JereSicoDachi.jpg';
import DSC05322 from './images/karatedoAndTheKids/DSC05322.jpg';
import DojoChiquitos from './images/karatedoAndTheKids/DojoChiquitos.png';

const KaratedoAndTheKids = () => (
  <div>
    <div id="pageImageHeader">
      <img alt="" src={KarateYElNiñoHeader} />
    </div>

    <br />

    <p style={{ textAlign: 'center' }}>
      Aún hoy en día algunas personas suponen que la práctica del Karate-Do,
      tanto en niños como en adultos, provoca e incita en ellos violencia.
      <br />
      Esto definitivamente no es así. El niño aprende desde sus primeras clases
      a controlar su faz agresiva y a mejorar su aspecto técnico muscular, de
      esta forma las clases se desarrollan en un marco de sano compañerismo y
      respeto mutuo. La práctica de esta disciplina actúa en el niño como un
      eficaz y natural método de afianzar una sana personalidad.
    </p>

    <div>
      <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <img
          alt=""
          src={JereSicoDachi}
          class="Loading"
          style={{ height: 350 }}
        />
      </div>

      <div
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          width: '100%'
        }}
      >
        <p style={{ textAlign: 'center' }}>
          El Karate-Do le brindará al niño:<br />
          <br />
          • Destreza •<br />
          • Disciplina •<br />
          • Recreación •<br />
          • Desinhibición •<br />
          • Responsabilidad •<br />
          • Concentración •<br />
          • Desarrollo Intuitivo •<br />
          • Fuerza de Voluntad •<br />
          • Dominio de sí mismo •<br />
          • Descarga Energética •<br />
          • Humildad y Tolerancia •<br />
          • Coordinación Psicomotriz •<br />
          • Acondicionamiento Físico •<br />
          • Reflejos y Capacidad de Reacción •<br />
          • Un efectivo sistema de defensa personal •
        </p>
      </div>

      <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        <img alt="" src={DSC05322} class="Loading" style={{ height: 350 }} />
      </div>
    </div>

    <p style={{ textAlign: 'center' }}>
      La disciplina es uno de los aspectos más importantes del Karate-Do porque
      sin ella no hay objetivo que pueda complementarse como corresponde, dado
      que esta hace que el instructor imparta su clase en orden, que todos
      comprendan sus enseñanzas, que exista el respeto mutuo y la observación de
      todas las reglas de comportamiento y que el grupo se sienta parte de la
      unidad.
    </p>
    <p style={{ textAlign: 'center' }}>
      Poniendo como máxima principal el sentido de camaradería y respeto por sus
      compañeros, su Sensei y por extensión, a sus semejantes <br />
      y hacia la sociedad en su totalidad.
    </p>

    <p style={{ textAlign: 'center' }}>
      <img
        alt=""
        src={DojoChiquitos}
        class="Loading"
        style={{ height: 200, textAlign: 'center' }}
      />
    </p>
    <br />

    <h3>
      Un Niño Apto Física, Psíquica Y Espiritualmente Es Un Niño Feliz,
      <br />
      Preparado Para Enfrentar La Vida Y Triunfar En Ella
    </h3>
  </div>
);

export default KaratedoAndTheKids;
