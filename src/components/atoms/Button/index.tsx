import { css } from '@emotion/react'
import { Button } from '@mui/material'

const containedButton = css({
  width: '100%',
  marginTop: '20px'
})

export interface CommonButtonProps {
  variant: string
  buttonText: string
  handleFunction: () => void
}

export const CommonButton: React.FC<CommonButtonProps> = (props: CommonButtonProps) => {
  const { buttonText, handleFunction } = props
  return (
    <Button variant="contained" css={containedButton} onClick={handleFunction}>
      {buttonText}
    </Button>
  )
}
