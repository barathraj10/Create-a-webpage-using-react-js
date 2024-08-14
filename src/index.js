import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './footer'
import Nav from './header'
import Content from './content';
// import App from './App';
// import reportWebVitals from './reportWebVitals';



function Final(){
  return (
    <div>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  )
}
ReactDOM.render(<Final/>,document.getElementById('root'));
