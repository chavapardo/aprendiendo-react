import React from 'react';
import Header from './components/header.js';
import Main, { libreria } from './components/main.js';
import Footer from './components/footer.js';


function App() {
  return (
    <>
      <Header />
      <Main />
      <p>Estamos usando la librería de {libreria}</p>
      <Footer />
    </>
  );
}

export default App;
