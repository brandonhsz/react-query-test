import React from 'react'

const ProductForm = () => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' />

      <label htmlFor="description">Description</label>
      <input type="text" id='description' name='description' />

      <label htmlFor="price">Price</label>
      <input type="text" id='price' name='price' />

      <button>
        Add Product
      </button>
    </>
  )
}

export default ProductForm