import { Button } from '@mui/material'

export interface Props {
  variant: 'contained' | 'outlined' | 'text' | undefined
  buttonText: string
  handleFunction: () => any
  style?: any
}

export const CommonButton: React.FC<Props> = (props: Props) => {
  const { variant, buttonText, handleFunction, style } = props
  return (
    <Button variant={variant} onClick={handleFunction} sx={style}>
      {buttonText}
    </Button>
  )
}
