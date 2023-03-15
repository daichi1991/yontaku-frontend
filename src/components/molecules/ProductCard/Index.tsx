import { Box, Card, Typography } from '@mui/material'
import { CommonImage } from '../../atoms/Image/Index'
import { RatingResult } from '../RatingResult/Index'

export interface Props {
  image: string
  title: string
  auther: string
  ratingValue: number
  ratingAmount: number
  questionAmount: number
  price: number
}

export const ProductCard: React.FC<Props> = (props: Props) => {
  const { image, title, auther, ratingValue, ratingAmount, questionAmount, price } = props
  return (
    <Card sx={{ display: 'flex', background: '#f1f1f1' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CommonImage
          image={image}
          imageMaxWidth={200}
          imageMaxHeight={100}
          imageTitleFilter={false}
        />
      </Box>
      <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', paddingTop: 1, paddingBottom: 1 }}>
        <Box>
          <Typography component="div" variant="h6">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {auther}
          </Typography>
          <RatingResult ratingValue={ratingValue} ratingAmount={ratingAmount} />
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
