import StarIcon from '@mui/icons-material/Star'
import { Rating } from '@mui/material'
import { useState } from 'react'

export interface Props {
  ratingScore: number
  precision: number
  readOnly: boolean
}

export const CommonRating: React.FC<Props> = (props: Props) => {
  const { ratingScore, precision, readOnly } = props
  const [value, setValue] = useState<number | null>(null)

  return (
    <Rating
      name="text-feedback"
      value={value === null ? ratingScore : value}
      readOnly={readOnly}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      precision={precision}
      emptyIcon={<StarIcon fontSize="inherit" />}
    />
  )
}
