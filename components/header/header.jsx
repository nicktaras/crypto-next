import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <div className={'wrapper'}>
            <img src='./../static/logo.svg' />
            <h1>Crypto-Watch</h1>
          </div>
        </header>
        <style jsx>{`
          header {
            background: url("./../static/header.jpg");
            height: 200px;
            padding: 20px;
            color: white;
            display: flex;
            justify-content: center;
          }
          .wrapper {
            width: 200px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          h1 {
            font-weight: 400;
          }
          img {
            height: 80px;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Header;
