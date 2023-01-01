import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'

export const ContainedButton: React.FC = () => {
  return <Button variant="contained">Contained</Button>
}

export const AccountButton: React.FC = () => {
  return <AccountCircleIcon />
}

export const MenuButton: React.FC = () => {
  return <MenuIcon />
}
