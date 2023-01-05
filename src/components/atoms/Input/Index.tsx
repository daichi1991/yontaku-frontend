import TextField from '@mui/material/TextField'
import { styles } from '../../../styles/style'

interface Props {
  placeholder: string | undefined
  inputType: string
  inputName: string
  handleChange: (eevent: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
}

export const TextInput: React.FC<Props> = (props: Props) => {
  const { placeholder, inputType, inputName, handleChange, inputValue } = props
  return (
    <TextField
      placeholder={placeholder}
      variant="outlined"
      type={inputType}
      size="small"
      css={styles.textField}
      name={inputName}
      onChange={handleChange}
      value={inputValue}
    />
  )
}
