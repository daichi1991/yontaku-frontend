import { css } from '@emotion/react'
import Typography from '@mui/material/Typography'

const pageTitle = css({
  marginTop: '20px',
  marginBottom: '20px',
  textAlign: 'center'
})

export interface Props {
  titleText: string
}

export const CommonTitle: React.FC<Props> = (props: Props) => {
  const { titleText } = props
  return (
    <Typography variant="h6" component="div" css={pageTitle}>
      {titleText}
    </Typography>
  )
}
