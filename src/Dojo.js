import React from 'react';

import DojoHeader from './images/headers/DojoHeader.png';
import HombuDojo2 from './images/HombuDojo2.png';

const Dojo = () => (
  <div>
    <div id="pageImageHeader">
      <img alt="" src={DojoHeader} />
    </div>

    <br />

    <p style={{ textAlign: 'center' }}>
      La palabra <strong>DOJO</strong> se traduce como{' '}
      <strong>"el lugar donde se busca el camino"</strong> en donde (DO)
      significa camino o senda y (JO) lugar de aprendizaje o estudio. La{' '}
      <strong>cortesía</strong> debe ser observada en el Dojo todo el tiempo, el
      saludo al principio y al final es un símbolo de respeto hacia sus
      compañeros, su Sensei, los antiguos Maestros, el Dojo en donde practica,
      al Arte que realiza y por último pero no menos importante para uno mismo.
    </p>

    <p style={{ textAlign: 'center' }}>
      <img src={HombuDojo2} alt="" class="Loading" style={{ width: 600 }} />
      <br />
      <span class="ImageLabel">Okinawa Hombu Dojo - Tsuboya-Cho, Naha-Shi</span>
    </p>

    <p style={{ textAlign: 'center' }}>
      Para el <strong>Karate-Ka</strong> el Dojo debe ser el sitio donde se
      aprende y se pone en práctica la importancia de una disciplina que nos
      enseña a vivir, mirar la vida de un modo diferente y actuar de forma
      correcta ante cualquier situación. Esto nos permite llenarnos de energía
      positiva y relajar nuestras tensiones cotidianas. Entrenando en el Dojo,
      se entra en un mundo diferente, un mundo de guerreros, un mundo de
      energía, un mundo de respeto.
    </p>

    <p style={{ textAlign: 'center' }}>
      Un Dojo no es un salón de recreación ni un gimnasio. Es el lugar donde se
      estudia y se vive las enseñanzas de los antiguos Maestros Okinawenses. No
      deben existir malas intenciones, sino estar abierto a educarse, a educar.
      Este es el espacio ideal para purificar el cuerpo y el alma. Una actitud
      de respeto, sinceridad y modestia es esencial para la serenidad, el
      perfeccionamiento y la mejora personal constante.
    </p>

    <br />

    <h3>
      En La Monotonía De La Practica,
      <br />
      Se Observa El Buen Practicante
    </h3>
  </div>
);

export default Dojo;
