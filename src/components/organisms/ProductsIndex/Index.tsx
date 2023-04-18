import { Box } from '@mui/material'
import React from 'react'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'
import { ProductType } from '../../../types'
import { ProductCard } from '../../molecules/ProductCard/Index'

export interface Props {
  products: ProductType[]
}

export const ProductsIndex: React.FC<Props> = (props: Props) => {
  const { products } = props
  const { isMobileSite } = useMediaQueryContext()

  const displayStyle = isMobileSite ? 'block' : 'flex'

  return (
    <Box sx={{ display: displayStyle }}>
      {products?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </Box>
  )
}
