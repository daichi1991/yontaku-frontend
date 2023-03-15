import StarIcon from '@mui/icons-material/Star'
import { Rating } from '@mui/material'
import { useState } from 'react'

export interface Props {
  ratingValue: number
  precision: number
  readOnly: boolean
}

export const CommonRating: React.FC<Props> = (props: Props) => {
  const { ratingValue, precision, readOnly } = props
  const [value, setValue] = useState<number | null>(ratingValue)

  return (
    <Rating
      name="text-feedback"
      value={value}
      readOnly={readOnly}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      precision={precision}
      emptyIcon={<StarIcon fontSize="inherit" />}
    />
  )
}
