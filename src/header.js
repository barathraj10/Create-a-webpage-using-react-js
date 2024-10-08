import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function Nav(){
    return(
      <div id='nav'>
        <img src="data:image/png;base64,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"></img>
        <a href='#'>Home</a>
        <a href='#'>About Us</a>
        <a href='#'>Contact Us</a>
        <a href='#'>Products</a>
        <a href='#' >Services</a>
      </div>
    );
  }

  export default Nav;