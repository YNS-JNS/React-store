import React from 'react';
/* - CDN Bootstrap _________________________ */
import 'bootstrap/dist/css/bootstrap.min.css';
/* - Components ____________________________ */
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddProduct from './components/Product/AddProduct/AddProduct';
import ProductDetail from './components/Product/ProductDetail/ProductDetail';
/* - React-router-dom ____________________________ */
import { Route, Routes } from 'react-router-dom';
/*__________________________________________ */

const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;