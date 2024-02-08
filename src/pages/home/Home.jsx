import React from 'react'
/* - Components ____________________________ */
import Jumbotron from '../../components/jumbotron/Jumbotron'
import ProductList from '../../components/Product/ProductList/ProductList'
/*__________________________________________ */

const Home = () => {
    return (
        <>
            <Jumbotron />
            <ProductList />
        </>
    )
}

export default Home