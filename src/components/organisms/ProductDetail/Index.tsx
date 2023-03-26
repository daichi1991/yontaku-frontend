import { Box, Typography } from '@mui/material'
import { productType } from '../../../types'
import { CommonImage } from '../../atoms/Image/Index'
import { RatingResult } from '../../molecules/RatingResult/Index'

export interface Props {
  product: productType
}

export const ProductDetail: React.FC<Props> = (props: Props) => {
  const { product } = props
  const defaultImage = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
  const prodcutImage = product.image != null ? product.image : defaultImage
  return (
    <>
      <CommonImage image={prodcutImage} imageTitleFilter={false} imageStyle={{ width: '100%' }} />
      <Box>
        <Typography component="div" variant="h6">
          {product.name}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" component="div">
          {product.description}
        </Typography>
        <RatingResult ratingScore={product.rate.score} ratingAmount={product.rate.amount} />
        <Typography variant="subtitle1" color="text.primary" component="div">
          出題数:{product.question_amount}問
        </Typography>
        <Typography variant="subtitle1" color="text.primary" component="div">
          作成者:{product.auther_id}
        </Typography>
        <Typography variant="h5" color="text.Primary" component="div">
          ¥{product.sale.price.toLocaleString()}
        </Typography>
      </Box>
    </>
  )
}
