import { css } from '@emotion/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MenuIcon from '@mui/icons-material/Menu'
import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../../contexts/authUserContext'
import { HeaderType } from '../../types'
import { CommonLink } from '../atoms/Link/Index'

interface Props extends HeaderType {}

export const Header: React.FC<Props> = (props: Props) => {
  const { menuIcon, accountIcon } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthUserContext)

  const headerLinkStyle = css({
    color: '#fff',
    textDecoration: 'none'
  })

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
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" css={headerLinkStyle}>
              ヨンタク！
            </Link>
          </Typography>
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
                  <AccountCircleIcon />
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
                <CommonLink linkTo="/signin" linkText="ログイン" linkCss={headerLinkStyle} />
              </div>
            ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
