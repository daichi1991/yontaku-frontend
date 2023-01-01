import TextField from '@mui/material/TextField'

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
      sx={{ mt: 1, mb: 3 }}
    />
  )
}
