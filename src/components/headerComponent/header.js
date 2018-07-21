import React, { Component } from 'react';
//import ReactDom from 'react-dom';


class Header extends Component {
  render() {
    return (
      <header className="header">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="https://www.rv-designs.nl/">RvReact Boilerplate</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active"><a className="nav-link" href="https://www.rv-designs.nl/">Home <span className="sr-only">(current)</span></a></li>
            <li className="nav-item"><a className="nav-link" href="https://www.rv-designs.nl/">Link</a></li>
            <li className="nav-item"><a className="nav-link disabled" href="https://www.rv-designs.nl/">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      </header>
    );
  }
}

export default Header;