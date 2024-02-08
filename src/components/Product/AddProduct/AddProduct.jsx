import React from 'react'
/* - Styles ________________________________ */
import './addProduct.css';
/*__________________________________________ */

const AddProduct = () => {
  return (
    <div className='wrapper_add_product'>
      <div className='add_product'>
        <h1>Add your product</h1>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            name="title"
            placeholder="Enter title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            required
            name="description"
            placeholder="Enter description"
          ></textarea>
        </div>

        <div className="form-group row">
          <div className="col">
            <label htmlFor="category">Category</label>
            <select className="form-select" id="category" aria-label="Default select example">
              <option value="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="col">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              name="price"
              placeholder="Enter price"
            />
          </div>
        </div>

        <div className="form-group row">
          <div className="col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              className="form-control"
              id="quantity"
              required
              name="quantity"
              placeholder="Enter quantity"
            />
          </div>

          <div className="col">
            <label htmlFor="stock">Count in Stock</label>
            <input
              type="number"
              className="form-control"
              id="stock"
              required
              name="stock"
              placeholder='Enter a stock'
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            className="form-control"
            id="brand"
            required
            name="brand"
            placeholder="Enter brand"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formFile" className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            id="formFile"
            name="formFile"
          />
        </div>

        <button
          className="btn btn-success"
          type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddProduct;