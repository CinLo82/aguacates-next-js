import React, { useState, useEffect} from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])


  const { query } = useRouter()

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(response=> response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <section>
      <h1> Página producto: {query.id}</h1>
    </section>
  )
}

export default ProductPage
