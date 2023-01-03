import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'
import { styles } from '../../../styles/style'

interface ContainedButtonProps {
  buttonText: string
  handleFunction: () => void
}

export const ContainedButton: React.FC<ContainedButtonProps> = (props: ContainedButtonProps) => {
  const { buttonText, handleFunction } = props
  return (
    <Button variant="contained" css={styles.containedButton} onClick={handleFunction}>
      {buttonText}
    </Button>
  )
}

export const AccountButton: React.FC = () => {
  return <AccountCircleIcon />
}

export const MenuButton: React.FC = () => {
  return <MenuIcon />
}
