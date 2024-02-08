import React from 'react'
/* - Styles ________________________________ */
import './productDetail.css';
/*__________________________________________ */

const ProductDetail = () => {

  const product = {
    title: 'Example Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Example Category',
    price: 29.99,
    quantity: 5,
    stock: 10,
    brand: 'Example Brand',
    image: 'https://example.com/product.jpg'
  };

  return (
    <div className="product-detail">
      <h1>{product.title}</h1>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Count in Stock:</strong> {product.stock}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <img src={product.image} alt="Product" className="product-image" />
    </div>
  );
};

export default ProductDetail;
