import React, { Component } from 'react';

//Components
import Header from './components/headerComponent/header';
import Test from './components/reusableComponent/test'
import Homepage from './components/pages/homepage'
import Footer from './components/footerComponent/footer';

//Default css
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />

          <Test />
        
          <Homepage />

          <Footer />
      </div>
    );
  }
}

export default App;