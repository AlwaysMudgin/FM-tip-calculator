import React from 'react';
import './App.css';
import LogoHeader from './components/LogoHeader/LogoHeader';
import MainCard from './components/MainCard/MainCard';

function App() {
  return (
    <>
      <LogoHeader />
      <MainCard />
      <footer>
        <p>
          Challenge by&nbsp;
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          .
        </p>
        <p>
          Coded by&nbsp;
          <a href="https://github.com/AlwaysMudgin/FM-tip-calculator">
            AlwaysMudgin
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
