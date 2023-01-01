import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'

interface Props {
  buttonText: string
}

export const ContainedButton: React.FC<Props> = (props: Props) => {
  return <Button variant="contained">{props.buttonText}</Button>
}

export const AccountButton: React.FC = () => {
  return <AccountCircleIcon />
}

export const MenuButton: React.FC = () => {
  return <MenuIcon />
}
