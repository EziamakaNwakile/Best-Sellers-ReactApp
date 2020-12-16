import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import {useParams} from 'react-router-dom'

export default function Products() {
  // const {id} = useParams();
  const url = 'https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/3'
  const [product, setProducts] = useState(null)

  let content = null
 
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setProducts(response.data)
      })
  }, [url])

  if(product){
    content =
      <div>
        <h1 className="text-2xl font-bold mb-3">
            {product.name}
        </h1>
        <div>
            <img
                src={product.images[0].imageUrl}
                alt={product.name}
            />
        </div>
        <div className="font-bold text-xl mb-3">
            $ {product.price}
        </div>
        <div>
            {product.description}
        </div>
      </div>
  }

  return(
    <div>
      
      {content}
    </div>
  )
 
}
