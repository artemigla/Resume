import React from 'react';
import { Header } from './components/Header/Header';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Footer } from './components/Footer/Footer';
const App = () => {
  return (
    <div>
      <Header title={'Resume'} />
      <AboutMe about={'About me'} />
      <Footer />
    </div>
  );
}

export default App;