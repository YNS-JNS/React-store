import React from 'react'
/* - Styles ________________________________ */
import './cardProduct.css';
/* - React-bootstrap _______________________ */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/* - React-router-dom ______________________ */
import { Link } from 'react-router-dom';
/*__________________________________________ */

const CardProduct = () => {

    const srcImgTest = "https://www.sneakers.fr/wp-content/uploads/2024/02/adidas-samba-og-nylon-olive-1-485x485.jpg"

    return (
        <Card className='card_item' style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Img variant="top" src={srcImgTest} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up.
                </Card.Text>
                <Link to={'/product'}>
                    <Button variant="primary">View</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CardProduct;