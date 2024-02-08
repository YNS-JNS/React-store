import React, { useState } from 'react';
/* - Styles ________________________________ */
import './productFilter.css';
/* - React-bootstrap _______________________ */
import { Form, Row, Col, Button } from 'react-bootstrap';
/*__________________________________________ */

const ProductFilter = ({ onFilter }) => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const categories = ['homme', 'women', 'sport', 'electronic'];
    const brands = ['Apple', 'Samsung', 'Sony'];
    const priceRange = [10, 5000];

    const handleFilterSubmit = () => {
        const filters = {
            categories: selectedCategory,
            brands: selectedBrand,
            priceRange: priceRange,
        };
        onFilter(filters);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='wrapper_filter'>
            <Form>
                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Label as={Col} sm={2}>Categories</Form.Label>
                        {categories.map((category, index) => (
                            <Form.Check
                                key={index}
                                type="checkbox"
                                label={category}
                                checked={selectedCategory === category}
                                onChange={() => handleCategoryChange(category)}
                            />
                        ))}
                    </Col>
                </Form.Group>
                <hr />
                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Label as={Col} sm={2}>Brand</Form.Label>
                        {brands.map((brand, index) => (
                            <Form.Check
                                key={index}
                                type="checkbox"
                                label={brand}
                            />
                        ))}
                    </Col>
                </Form.Group>
                <hr />
                <Form.Group as={Row}>
                    <Col sm={10}>
                        <Form.Label as={Col} sm={2}>Price</Form.Label>
                        <Form.Control type="number" min={priceRange[0]} max={priceRange[1]} />
                    </Col>
                </Form.Group>

                <div className='d-flex justify-content-between mt-4 mb-3'>
                    <Button variant="primary" onClick={handleFilterSubmit}>Apply Filters</Button>
                    <Button variant="secondary">Reset</Button>
                </div>
            </Form>
        </div>
    );
};

export default ProductFilter;
