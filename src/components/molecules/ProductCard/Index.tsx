import { Box, Card, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'
import { productType } from '../../../types'
import { CommonImage } from '../../atoms/Image/Index'
import { RatingResult } from '../RatingResult/Index'

export interface Props {
  product: productType
}

export const ProductCard: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate()
  const { product } = props
  const { isMobileSite } = useMediaQueryContext()

  const defaultImage = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
  const prodcutImage = product.image != null ? product.image : defaultImage
  const mobileCardStyle = {
    display: 'flex',
    mt: 2
  }
  const pcTabletCardStyle = {
    ml: 2,
    width: 200,
    cursor: 'pointer'
  }

  const cardStyle = isMobileSite ? mobileCardStyle : pcTabletCardStyle

  const mobileImageStyle = {
    maxWidth: 200,
    maxHeight: 100
  }

  const pcTabletImageStyle = {
    width: 200,
    height: 100
  }

  const imageStyle = isMobileSite ? mobileImageStyle : pcTabletImageStyle

  const handleGoToProductDetail = (): void => {
    navigate('/product', {
      state: {
        product
      }
    })
  }

  return (
    <Card sx={cardStyle} onClick={handleGoToProductDetail}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CommonImage image={prodcutImage} imageTitleFilter={false} imageStyle={imageStyle} />
      </Box>
      <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', paddingTop: 1, paddingBottom: 1 }}>
        <Box>
          <Typography component="div" variant="h6">
            {product.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {product.auther_id}
          </Typography>
          <RatingResult ratingScore={product.rate.score} ratingAmount={product.rate.amount} />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {product.question_amount}問
          </Typography>
          <Typography variant="h5" color="text.Primary" component="div">
            ¥{product.sale.price.toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}
