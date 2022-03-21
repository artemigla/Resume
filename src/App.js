import React from 'react';
import { Header } from './components/Header/Header';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from './components/ColorsThemes/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <Header title={'Resume'} />
      <AboutMe about={'About me'} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;