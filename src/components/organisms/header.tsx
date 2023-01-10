import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { useContext, useState } from 'react'
import { AuthUserContext } from '../../contexts/authUserContext'
import { HeaderType } from '../../types'
import { AccountButton, MenuButton } from '../atoms/Button/Index'
import { HeaderLink } from '../atoms/Link/Index'
import { MainTitle } from '../atoms/Title/Index'

interface Props extends HeaderType {}

export const Header: React.FC<Props> = (props: Props) => {
  const { menuIcon, accountIcon } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthUserContext)

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleSignOut = (): void => {
    setIsAuthenticated(false)
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          {menuIcon === true && (
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuButton />
            </IconButton>
          )}
          <MainTitle />
          {accountIcon === true &&
            (isAuthenticated ? (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountButton />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleSignOut}>ログアウト</MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <HeaderLink linkTo="/signin" linkText="ログイン" />
              </div>
            ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
