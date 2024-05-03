import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiteRouter from './router/intex';
import Header from './components/header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <div className='wrapper'>
      <div className='contentWrapper'>
        <Header/>
        <SiteRouter/>
      </div>
      {/* footer */}
    </div>
    </>
  );
}

export default App;
