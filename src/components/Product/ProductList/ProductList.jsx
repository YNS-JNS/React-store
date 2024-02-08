import React from 'react'
/* - Styles ________________________________ */
import './productList.css';
/* - Components ____________________________ */
import CardProduct from '../CardProduct/CardProduct';
/*__________________________________________ */

const ProductList = () => {
    return (
        <div className="card_container">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
        </div>
    )
}

export default ProductList;