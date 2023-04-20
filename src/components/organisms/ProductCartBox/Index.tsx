import { Box, Typography } from '@mui/material'
import { ProductType } from '../../../types'
import { CommonImage } from '../../atoms/Image/Index'

export interface Props {
  product: ProductType
}

export const ProductCartBox: React.FC<Props> = (props: Props) => {
  const { product } = props
  const defaultImage = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
  const prodcutImage = product.image != null ? product.image : defaultImage
  return (
    <>
      <Box sx={{ width: 240 }}>
        <CommonImage
          image={prodcutImage}
          imageTitleFilter={false}
          imageStyle={{ width: '100%', maxHeight: 200 }}
        />
        <Box>
          <Typography variant="h5" color="text.Primary" component="div">
            ¥{product.sale.price.toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </>
  )
}
