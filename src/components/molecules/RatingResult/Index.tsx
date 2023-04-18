import { Box, Typography } from '@mui/material'
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
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Typography variant="caption" color="text.secondary" component="div" sx={{ mr: 1 }}>
        {ratingScore != null ? ratingScore.toFixed(1) : '-'}
      </Typography>
      <CommonRating
        ratingScore={ratingScore != null ? ratingScore : 0}
        precision={0.5}
        readOnly={true}
      />
      <Typography variant="caption" color="text.secondary" component="div" sx={{ ml: 1 }}>
        &#40;{ratingAmount}&#41;
      </Typography>
    </Box>
  )
}
