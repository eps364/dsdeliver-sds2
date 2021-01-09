import { useEffect, useState } from 'react'
import './styles.css'
import StepsHeader from './StepsHeader'
import ProductList from './ProductsList'
import OrderLocation from './OrderLocation'

import { Product, OrderLocationData } from './types'
import { fetchProducts } from '../api'




function Orders() {
  const [products, setProducts] = useState<Product[]>([])
  const [orderLocation,setOrderLocation] = useState<OrderLocationData>()

  useEffect(() => {
    fetchProducts()
      .then(reponse => setProducts(reponse.data))
      .catch(error => console.log(error))
    console.log(products)
  }, [])

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductList products={products} />
      <OrderLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  )
}

export default Orders