import TextField from '@mui/material/TextField'
import { styles } from '../../../styles/style'

interface Props {
  placeholder: string | undefined
  inputType: string
}

export const TextInput: React.FC<Props> = (props: Props) => {
  const { placeholder, inputType } = props
  return (
    <TextField
      id="outlined-basic"
      placeholder={placeholder}
      variant="outlined"
      type={inputType}
      size="small"
      css={styles.textField}
    />
  )
}
