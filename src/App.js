import React from 'react';
import { Header } from './components/Header/Header';
import { AboutMe } from './components/AboutMe/AboutMe';
const App = () => {
  return (
    <div>
      <Header title={'Resume'} />
      <AboutMe about={'About me'} />
    </div>
  );
}

export default App;