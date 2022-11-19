import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../api/productsApi'
import { IProduct } from '../interfaces/product.interface';

const Products = () => {

  const { isLoading, data, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error</div>


  return (
    <>
      {
        data.map((product: IProduct) => (
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>

            <button>Delete</button>
            <input type="checkbox" />
            <label htmlFor="">In Stock</label>

          </div>
        ))
      }
    </>
  )
}

export default Products