import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Title16 from './images/Title16.png';
import MainMenu from './MainMenu';
import Home from './Home';
import Karatedo from './Karatedo';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header>
          <div id="mainTitle">
            <img alt="" src={Title16} />{' '}
          </div>

          <MainMenu />
        </header>
        <section id="main">
          <Route exact path="/" component={Home} />{' '}
          <Route path="/home" component={Home} />{' '}
          <Route path="/karatedo" component={Karatedo} />{' '}
        </section>
        <Footer isAuthenticated={false} />{' '}
      </div>
    );
  }
}

export default App;
