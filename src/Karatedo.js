import React from 'react';

import KaratedoHeader from './images/headers/KaratedoHeader.png';
// import MinoruSikoDachi from './images/karatedo/MinoruSikoDachi.jpg';
import Minoru from './images/karatedo/Minoru.jpg';
import YuchokuHigaEntrenando from './images/karatedo/YuchokuHigaEntrenando.jpg';
import YuchokuHigaSicoDachi from './images/karatedo/YuchokuHigaSicoDachi.jpg';

const Karatedo = () => (
  <div>
    <div id="pageImageHeader">
      <img alt="" src={KaratedoHeader} />
    </div>

    <br />

    <p style={{ textAlign: 'center' }}>
      El <strong> Karate-Do </strong> es el <strong>Arte Marcial</strong> que
      tuvo su origen en <strong> Okinawa </strong>, una pequeña isla situada al
      sur de Japón.La filosofía de este arte está basada en los preceptos que
      dieron lugar a la creación del BUSHIDO, el{' '}
      <strong> Camino del Samurai </strong>
      .
    </p>

    <div>
      <div
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'right',
          width: '40%'
        }}
      >
        Estos preceptos pueden resumir en: <br /> • Rectitud de Pensamiento y de
        Acción. <br /> • Valor <br /> • Audacia para afrontar adversidades.{' '}
        <br /> • Tolerancia ante los defectos de lo demás y los propios. <br />{' '}
        • Humildad. <br /> • Lealtad. <br /> • Autodominio. <br /> • Control.{' '}
        <br /> • Generosidad. <br /> • Ética <br /> • Responsabilidad y
        compromiso con sus obligaciones.
      </div>

      <div
        style={{
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center'
        }}
      >
        <img
          // src={MinoruSikoDachi}
          src={Minoru}
          className="Loading"
          style={{
            height: '330px',
            margin: '0px 10px'
          }}
          alt=""
        />

        <br />

        <span className="ImageLabel">
          Sensei Higa Minoru - 10 mo Dan Hanshi -
        </span>
      </div>

      <div
        style={{ display: 'table-cell', verticalAlign: 'middle', width: '40%' }}
      >
        Para que el Practicante pueda alcanzar la plenitud de estos valores,
        basa su aprendizaje en los siguientes puntos: <br /> • La Sinceridad
        Total. <br /> • La preparación del Físico más allá del cansancio y el
        dolor. <br /> • El desarrollo de la Técnica a través de la Habilidad, la
        Destreza y la Constancia. <br /> • El ejercicio de la Paciencia. <br />{' '}
        • La preparación de la Mente y el Espíritu.<br /> • La amabilidad, como
        valor para un mejor carácter y una correcta actitud.
      </div>
    </div>

    <br />

    <p style={{ textAlign: 'center' }}>
      El ejercicio de estas pautas nos llevan de un modo directo al{' '}
      <strong> "Conócete a ti mismo"</strong>, permitiéndonos llegar a la
      instancia <br />
      final del combate: <strong> "Vencerse a uno mismo" </strong>
      . <br />
      En esto último, está la real fortaleza del Karate-Ka, quien practicando un{' '}
      <strong> Arte Tradicional</strong>, con pautas dirigidas hacia el
      crecimiento del ser humano, muchas veces encuentra obstaculizado su
      desarrollo por el entorno y las circunstancias que lo rodean y ahí, es
      donde debe <strong> aflorar su temple </strong> para constantemente
      modelarse dentro del DO, del Camino.
    </p>

    <p style={{ textAlign: 'center' }}>
      Por todo esto - aunque muchos tengan una idea tergiversada - el
      prácticante de Karate-Do pone en manifiesto y entrena el sentido de <br />la{' '}
      <strong> no violencia </strong>, siendo este uno de los requisitos
      imprescindibles para su crecimiento y su práctica cotidiana. <br />Es el
      camino directo que conduce a su esencia, forjando en su trayecto una mente
      limpia, un cuerpo sano y un espíritu perseverante.
    </p>

    <p style={{ textAlign: 'center' }}>
      <img
        src={YuchokuHigaEntrenando}
        className="Loading"
        style={{
          height: '400px'
        }}
        alt=""
      />

      <img
        src={YuchokuHigaSicoDachi}
        className="Loading"
        style={{
          height: '400px',
          marginLeft: '20px'
        }}
        alt=""
      />
    </p>

    <div style={{ textAlign: 'center' }}>
      <span className="ImageLabel">
        O 'Sensei Higa Yuchoku - 10mo Dan Hanshi - creador del Kobayashi-Ryu
        Kyudokan
      </span>
    </div>

    <br />

    <p style={{ textAlign: 'center' }}>
      O 'Sensei Higa Yuchoku decía: Cuando yo era joven solía pensar, el ataque
      es la mejor defensa,<br />
      luego comprendí lo que significaba tener un corazón fuerte.En la
      actualidad me he dado cuenta de lo siguiente:
    </p>

    <br />

    <h3>
      KYUDO MUGEN <br />
      La Búsqueda Del Estudio No Tiene Fin...
    </h3>
  </div>
);

export default Karatedo;
