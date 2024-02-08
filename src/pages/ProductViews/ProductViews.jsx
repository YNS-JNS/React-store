import React from 'react';
/* - Components ____________________________ */
import ProductList from '../../components/Product/ProductList/ProductList';
import ProductFilter from '../../components/Product/Filter/ProductFilter';
/*__________________________________________ */

const ProductViews = () => {
    return (
        <div className='row'>
            <div className="col-md-3"> {/* Product filter takes 20% of the screen */}
                <ProductFilter />
            </div>
            <div className="col-md-9"> {/* Product list takes the rest */}
                <ProductList />
            </div>
        </div>
    )
}

export default ProductViews;
