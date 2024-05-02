import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiteRouter from './router/intex';
import Header from './components/header';

function App() {
  return (
    <>
      <Header/>
      <div>is root here</div>
      <SiteRouter/>
    </>
  );
}

export default App;
