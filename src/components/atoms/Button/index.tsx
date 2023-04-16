import { css } from '@emotion/react'
import { Button } from '@mui/material'

const containedButton = css({
  width: '100%',
  marginTop: '20px',
  marginLeft: '5px',
  marginRight: '5px'
})

export interface Props {
  variant: 'contained' | 'outlined' | 'text' | undefined
  buttonText: string
  handleFunction: () => any
  style?: any
}

export const CommonButton: React.FC<Props> = (props: Props) => {
  const { variant, buttonText, handleFunction, style } = props
  return (
    <Button variant={variant} css={containedButton} onClick={handleFunction} sx={style}>
      {buttonText}
    </Button>
  )
}
