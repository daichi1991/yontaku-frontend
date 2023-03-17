import React, { useEffect, useState } from 'react'
import { getProductSearchBySubject } from '../../../apis/product'
import { ProductCard } from '../../molecules/ProductCard/Index'

export interface Props {
  subjectKey: string | undefined
}

interface productType {
  id: string
  auther_id: string
  name: string
  description: string
  image: string | null
  sale: {
    price: number
    publish: boolean
  }
  rate: {
    amount: number
    score: number
  }
  question_amount: number
}

const defaultProduct = {
  id: '',
  auther_id: '',
  name: '',
  description: '',
  image: null,
  sale: {
    price: 0,
    publish: false
  },
  rate: {
    amount: 0,
    score: 0
  },
  question_amount: 0
}

export const ProductSearchBySubject: React.FC<Props> = (props: Props) => {
  const { subjectKey } = props
  const [products, setProducts] = useState<productType[]>([defaultProduct])

  useEffect(() => {
    void getProductSearchBySubject(subjectKey).then((data: React.SetStateAction<productType[]>) => {
      setProducts(data)
    })
  }, [])

  return (
    <>
      {products?.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          auther={product.auther_id}
          ratingScore={product.rate.score}
          ratingAmount={product.rate.amount}
          questionAmount={product.question_amount}
          price={product.sale.price}
        />
      ))}
    </>
  )
}
