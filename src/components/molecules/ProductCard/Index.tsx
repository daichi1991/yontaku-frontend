import { Box, Card, Typography } from '@mui/material'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'
import { CommonImage } from '../../atoms/Image/Index'
import { RatingResult } from '../RatingResult/Index'

export interface Props {
  image: string | null
  name: string
  auther: string
  ratingScore: number | null
  ratingAmount: number
  questionAmount: number
  price: number
}

export const ProductCard: React.FC<Props> = (props: Props) => {
  const { image, name, auther, ratingScore, ratingAmount, questionAmount, price } = props
  const { isMobileSite } = useMediaQueryContext()

  const defaultImage = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
  const prodcutImage = image != null ? image : defaultImage
  const mobileCardStyle = {
    display: 'flex',
    mt: 2
  }
  const pcTabletCardStyle = {
    ml: 2,
    width: 200
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

  return (
    <Card sx={cardStyle}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CommonImage image={prodcutImage} imageTitleFilter={false} imageStyle={imageStyle} />
      </Box>
      <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', paddingTop: 1, paddingBottom: 1 }}>
        <Box>
          <Typography component="div" variant="h6">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {auther}
          </Typography>
          <RatingResult ratingScore={ratingScore} ratingAmount={ratingAmount} />
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {questionAmount}問
          </Typography>
          <Typography variant="h5" color="text.Primary" component="div">
            ¥{price.toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}
