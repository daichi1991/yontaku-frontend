import { css } from '@emotion/react'
import { Button } from '@mui/material'

const containedButton = css({
  width: '100%',
  marginTop: '20px'
})

export interface Props {
  variant: string
  buttonText: string
  handleFunction: () => any
}

export const CommonButton: React.FC<Props> = (props: Props) => {
  const { buttonText, handleFunction } = props
  return (
    <Button variant="contained" css={containedButton} onClick={handleFunction}>
      {buttonText}
    </Button>
  )
}
