import React from 'react';
/* - CDN Bootstrap _________________________ */
import 'bootstrap/dist/css/bootstrap.min.css';
/* - Components ____________________________ */
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
/*__________________________________________ */

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Footer />
    </div>
  )
}

export default App;