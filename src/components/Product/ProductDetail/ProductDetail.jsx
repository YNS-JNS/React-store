import React from 'react'
/* - Styles ________________________________ */
import './productDetail.css';
/*__________________________________________ */

const ProductDetail = () => {

  const srcImgTest = "https://www.sneakers.fr/wp-content/uploads/2024/02/adidas-samba-og-nylon-olive-1-485x485.jpg"

  const product = {
    title: 'Example Product',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: 'Example Category',
    price: 29.99,
    quantity: 5,
    stock: 10,
    brand: 'Example Brand',
    image: srcImgTest
  };

  return (
    <div className="product-detail row">
      <div className="col-md 6">
        <h1>{product.title}</h1>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Quantity:</strong> {product.quantity}</p>
        <p><strong>Count in Stock:</strong> {product.stock}</p>
        <p><strong>Brand:</strong> {product.brand}</p>
      </div>
      <div className="col-md 6">
        <img src={product.image} alt="Product" className="product-image" />
      </div>
    </div>
  );
};

export default ProductDetail;
