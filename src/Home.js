import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import { Link } from 'react-router-dom';

import HomeHeader from './images/headers/HomeHeader.png';
import SeminarioMinoruHiga2010_16 from './images/home/SeminarioMinoruHiga2010_16.jpg';
import Campamento2010_06 from './images/home/Campamento2010_06.jpg';
import SeminarioMinoruHiga2010_15 from './images/home/SeminarioMinoruHiga2010_15.jpg';
import Campamento2010_07 from './images/home/Campamento2010_07.jpg';
import Home01 from './images/home/Home01.jpg';
import Home02 from './images/home/Home02.jpg';
import Home03 from './images/home/Home03.jpg';
import Home04 from './images/home/Home04.jpg';
import Home05 from './images/home/Home05.jpg';
import Home06 from './images/home/Home06.jpg';
import Home07 from './images/home/Home07.jpg';
import Home08 from './images/home/Home08.jpg';
import Home09 from './images/home/Home09.jpg';

const Home = () => (
  <div>
    <div id="pageImageHeader">
      <img alt="" src={HomeHeader} />
    </div>

    <br />

    <p style={{ textAlign: 'center' }}>
      Practicamos <strong>Karate-Do Kobayashi-Ryu Kyudokan</strong> creado por{' '}
      <strong>O'Sensei Yuchoku Higa</strong> - 10mo Dan -. Actualmente nuestro
      estilo se encuenta liderado a nivel Mundial por{' '}
      <strong>Sensei Minoru Higa</strong> - 10mo Dan - Presidente de la World
      Okinawa Karate-Do Kobayashi-Ryu Kyudokan Rengokai. El{' '}
      <strong>Tanren Dojo</strong> se encuentra ubicado en ciudad de{' '}
      <strong>Vicente López</strong>, Provincia de Buenos Aires.<br />
      El trabajo que realizamos está basado en la práctica y enseñanza de
      Karate-Do, orientado a niños, jóvenes y adultos de ambos sexos.<br />
      En el <strong>Tanren Dojo</strong> desde siempre nos han inculcado que el
      Karate-Do es una <strong>"Forma de Vida"</strong> y no un "Arte Marcial"
      solamente.
    </p>

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Carousel>
        <Carousel.Item>
          <img alt="" src={SeminarioMinoruHiga2010_16} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src={Campamento2010_06} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src={SeminarioMinoruHiga2010_15} />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img alt="" src={Campamento2010_07} />
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img alt="" src={Home01} />
        </Carousel.Item> */}
        <Carousel.Item>
          <img alt="" src={Home02} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src={Home03} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src={Home04} />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img alt="" src={Home05} />
        </Carousel.Item> */}
        <Carousel.Item>
          <img alt="" src={Home06} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src={Home07} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src={Home08} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" src={Home09} />
        </Carousel.Item>
      </Carousel>
    </div>

    <br />

    <h2 style={{ textAlign: 'center' }}>NUESTRA MISIÓN</h2>

    <div
      style={{
        textAlign: 'center',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}
    >
      <p>
        El Tanren Dojo busca difundir el Karate-Do como tradicionalmente lo
        enseñaban los antiguos Maestros Okinawenses, resaltando además los
        valores principales como Honestidad, Lealtad y Respeto, como así también
        Idioma Japonés y aspectos culturales de Okinawa y Japón. Las clases
        están dirigidas a cualquier tipo de persona, a fin que puedan por medio
        del aprendizaje elevar su nivel de autoestima, desarrollar al máximo sus
        habilidades y superar sus propias limitaciones. Todo esto se desarrola
        en un marco de absoluto respeto.
      </p>
      <p style={{ textAlign: 'center' }}>
        <Link to="/Contact#DiasYHorarios" style={{ textDecoration: 'none' }}>
          DÍAS Y HORARIOS DE PRÁCTICA
        </Link>
      </p>
    </div>
  </div>
);

export default Home;
