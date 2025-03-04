import FormLabel from '@mui/material/FormLabel'

export interface Props {
  labelText: string
}

export const InputFormLabel: React.FC<Props> = (props: Props) => {
  const { labelText } = props
  return <FormLabel sx={{ fontWeight: 'bold' }}>{labelText}</FormLabel>
}
