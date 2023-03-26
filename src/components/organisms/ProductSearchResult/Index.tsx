import { Box } from '@mui/material'
import React from 'react'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'
import { ProductCard } from '../../molecules/ProductCard/Index'

export interface Props {
  products: productType[]
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
    score: number | null
  }
  question_amount: number
}

export const ProductSearchResult: React.FC<Props> = (props: Props) => {
  const { products } = props
  const { isMobileSite } = useMediaQueryContext()

  const displayStyle = isMobileSite ? 'block' : 'flex'

  return (
    <Box sx={{ display: displayStyle }}>
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
    </Box>
  )
}
