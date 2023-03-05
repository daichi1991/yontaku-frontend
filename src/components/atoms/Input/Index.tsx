import { css } from '@emotion/react'
import TextField from '@mui/material/TextField'

const textField = css({
  width: '100%',
  marginTop: '5px',
  marginBottom: '20px'
})

export interface TextInputProps {
  placeholder: string | undefined
  inputType: string
  inputName: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
}

export const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
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
