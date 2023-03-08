import { css } from '@emotion/react'
import TextField from '@mui/material/TextField'
import { TextInputProps } from '../../../types'

const textField = css({
  width: '100%',
  marginTop: '5px',
  marginBottom: '20px'
})

export interface Props extends TextInputProps {}

export const TextInput: React.FC<Props> = (props: Props) => {
  const { placeholder, inputType, inputName, handleChange, inputValue } = props
  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      type={inputType}
      size="small"
      css={textField}
      name={inputName}
      onChange={handleChange}
      value={inputValue}
    />
  )
}
