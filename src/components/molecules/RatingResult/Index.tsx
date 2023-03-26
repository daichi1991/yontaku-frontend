import { Box } from '@mui/material'
import { CommonRating } from '../../atoms/Rating/Index'

export interface Props {
  ratingScore: number | null
  ratingAmount: number
}

export const RatingResult: React.FC<Props> = (props: Props) => {
  const { ratingScore, ratingAmount } = props
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box sx={{ mr: 1 }}>{ratingScore != null ? ratingScore.toFixed(1) : '-'}</Box>
      <CommonRating
        ratingScore={ratingScore != null ? ratingScore : 0}
        precision={0.5}
        readOnly={true}
      />
      <Box sx={{ ml: 1 }}>&#40;{ratingAmount}&#41;</Box>
    </Box>
  )
}
