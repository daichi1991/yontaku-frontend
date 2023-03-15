import { Box } from '@mui/material'
import { CommonRating } from '../../atoms/Rating/Index'

export interface Props {
  ratingValue: number
  ratingAmount: number
}

export const RatingResult: React.FC<Props> = (props: Props) => {
  const { ratingValue, ratingAmount } = props
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box sx={{ mr: 1 }}>{ratingValue}</Box>
      <CommonRating ratingValue={ratingValue} precision={0.5} readOnly={true} />
      <Box sx={{ ml: 1 }}>&#40;{ratingAmount}&#41;</Box>
    </Box>
  )
}
