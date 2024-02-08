import React from 'react';
/* - Bootstrap _________________________ */
import 'bootstrap/dist/css/bootstrap.min.css';
/* - Components ____________________________ */
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AddProduct from './components/Product/AddProduct/AddProduct';
import ProductDetail from './components/Product/ProductDetail/ProductDetail';
import ProductViews from './pages/ProductViews/ProductViews';
/* - React-router-dom ______________________ */
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
        <Route path="/view-products" element={<ProductViews />} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;