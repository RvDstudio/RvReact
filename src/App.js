import React, { Component } from 'react';

//Components
import Header from './components/headerComponent/header';
import Navbar from './components/navbarComponent/navbar'
import Homepage from './components/pages/homepage'
import Footer from './components/footerComponent/footer';

//Default css
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

          <Navbar />

          <Homepage />

          <Footer />
      </div>
    );
  }
}

export default App;