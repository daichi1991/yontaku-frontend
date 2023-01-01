import FormLabel from '@mui/material/FormLabel'

interface Props {
  labelText: string
}

export const InputFormLabel: React.FC<Props> = (props: Props) => {
  return <FormLabel sx={{ fontWeight: 'bold' }}>{props.labelText}</FormLabel>
}
