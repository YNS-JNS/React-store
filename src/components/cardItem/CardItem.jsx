import React from 'react'
/* - Styles ________________________________ */
import './cardItem.css';
/* - React-bootstrap _______________________ */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
/*__________________________________________ */

const CardItem = () => {
    return (
        <>
            {/* <Card style={{ width: '18rem', height: '17rem' }}> */}
            <Card className='card_item' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardItem