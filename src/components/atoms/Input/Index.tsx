import TextField from '@mui/material/TextField'
import { styles } from '../../../styles/style'

interface Props {
  placeholder: string | undefined
  inputType: string
}

export const TextInput: React.FC<Props> = (props: Props) => {
  return (
    <TextField
      id="outlined-basic"
      placeholder={props.placeholder}
      variant="outlined"
      type={props.inputType}
      size="small"
      css={styles.textField}
    />
  )
}
