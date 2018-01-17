import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Title16 from './images/Title16.png';
import MainMenu from './MainMenu';
import Home from './Home';
import Karatedo from './Karatedo';
import Dojo from './Dojo';
import KaratedoAndTheKids from './KaratedoAndTheKids';
import KaratedoAndTheWomen from './KaratedoAndTheWomen';
import Gallery from './Gallery';
import News from './News';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="page">
        <header>
          <div id="mainTitle">
            <img alt="" src={Title16} />
          </div>

          <MainMenu />
        </header>

        <section id="main">
          <Route exact path="/" component={Home} />
          <Route path="/Home" component={Home} />
          <Route path="/Karatedo" component={Karatedo} />
          <Route path="/Dojo" component={Dojo} />
          <Route path="/KaratedoAndTheKids" component={KaratedoAndTheKids} />
          <Route path="/KaratedoAndTheWomen" component={KaratedoAndTheWomen} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/News" component={News} />
          <Route path="/Contact" component={Contact} />
        </section>

        <Footer isAuthenticated={false} />
      </div>
    );
  }
}

export default App;
