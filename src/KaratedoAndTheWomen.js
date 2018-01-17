import React from 'react';

import KarateYLaMujerHeader from './images/headers/KarateYLaMujerHeader.png';
import Belen101 from './images/karatedoAndTheWomen/Belen101.jpg';
import CinthiaBelen from './images/karatedoAndTheWomen/CinthiaBelen.jpg';
import Onna_Kanji from './images/karatedoAndTheWomen/Onna_Kanji.png';

const KaratedoAndTheWomen = () => (
  <div>
    <div id="pageImageHeader">
      <img alt="" src={KarateYLaMujerHeader} />
    </div>

    <br />

    <p style={{ textAlign: 'center' }}>
      Algunas mujeres piensan que practicar Karate-Do es sinónimo de brutalidad
      y pérdida de feminidad.
    </p>

    <table style={{ width: '100%' }}>
      <tr>
        <td colspan="2">
          <p style={{ marginRight: 10, marginLeft: 10 }}>
            Esto es totalmente erróneo. En la cultura Oriental y la propia de
            Japón, existe algo llamado "Yin-Yan" esto se interpreta como "La ley
            de los opuestos que coexisten y se complementan entre sí", esta es
            una ley natural con la cual convivimos toda nuestra vida: el día y
            la noche, lo dulce y lo amargo algunos son algunos ejemplos de esto.
          </p>
          <p style={{ marginRight: 10, marginLeft: 10 }}>
            El Karate-Do fue concebido respetando "las leyes naturales", por lo
            tanto no se puede ser siempre duro (como se cree que es este Arte),
            también es necesario ser blando, a lo fuerte corresponde lo suave y
            viceversa.
          </p>
        </td>
        <td width="28%" align="center" rowspan="2">
          <img alt="" src={Belen101} class="Loading" style={{ height: 280 }} />
        </td>
      </tr>
      <tr>
        <td width="28%" align="center" rowspan="2">
          <img
            alt=""
            src={CinthiaBelen}
            class="Loading"
            style={{ height: 280 }}
          />
        </td>
        <td align="center">
          <img alt="" src={Onna_Kanji} style={{ height: 150 }} />
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <p style={{ marginRight: 10, marginLeft: 10 }}>
            La mujer que practica Karate-Do desarrolla, entre muchas otras
            cosas, una mayor fuerza física sin que signifique perder los
            atributos naturales femeninos, por el contrario los potencia, como
            la delicadeza o hasta la misma y famosa intuición femenina.
          </p>
          <p style={{ marginRight: 10, marginLeft: 10 }}>
            Volviendo un poco atrás el hombre y la mujer son "Yin-Yan"
            básicamente opuestos pero a su vez se necesitan el uno al otro, los
            dos pueden equilibrarse entre si, practicando Karate-Do y así lograr
            armonía.
          </p>
        </td>
      </tr>
    </table>

    <p style={{ textAlign: 'center' }}>
      Con un entrenamiento básico de dos a tres veces por semana y en un período
      de aproximadamente seis meses la mujer que practica Karate-Do experimenta
      cambios importantes a nivel físico, obteniendo un cuerpo más estilizado,
      fuerte y saludable, además de afianzar una personalidad íntegra y segura
      delante de cualquier posible eventualidad.
    </p>
    <br />

    <h3>
      Transformando Los Temores En Confianza,
      <br />
      Estaremos Cambiando La Agresividad En Tolerancia
    </h3>
  </div>
);

export default KaratedoAndTheWomen;
