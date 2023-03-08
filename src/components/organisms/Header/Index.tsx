import { css } from '@emotion/react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import { useContext, useState } from 'react'
import { AuthUserContext } from '../../../contexts/authUserContext'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'
import { HeaderType } from '../../../types'
import { CommonLink } from '../../atoms/Link/Index'
import { SearchBox } from '../../molecules/SearchBox/Index'

export interface Props extends HeaderType {}

export const Header: React.FC<Props> = (props: Props) => {
  const { menuIcon, accountIcon } = props
  const { isPcSite } = useMediaQueryContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [onSearchBox, setOnSearchBox] = useState<boolean>(false)
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

  const handleOnSearchBox = (): void => {
    setOnSearchBox(!onSearchBox)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          {isPcSite === true && (
            <>
              {menuIcon === true && (
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant="h6" component="div" sx={{ flexGrow: 14 }}>
                <CommonLink linkTo="/" linkText="ヨンタク！" linkCss={headerLinkStyle} />
              </Typography>
              <div style={{ flexGrow: 1 }}>
                <SearchBox elevation={0} />
              </div>
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
            </>
          )}
          {isPcSite === false &&
            (onSearchBox ? (
              <>
                <IconButton
                  color="inherit"
                  type="button"
                  sx={{ p: '10px' }}
                  aria-label="search"
                  onClick={handleOnSearchBox}
                >
                  <ArrowBackIosIcon />
                </IconButton>
                <SearchBox elevation={0} />
              </>
            ) : (
              <>
                {menuIcon === true && (
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
                <Typography variant="h6" component="div" sx={{ flexGrow: 14 }}>
                  <CommonLink linkTo="/" linkText="ヨンタク！" linkCss={headerLinkStyle} />
                </Typography>
                <IconButton
                  color="inherit"
                  type="button"
                  sx={{ p: '10px' }}
                  aria-label="search"
                  onClick={handleOnSearchBox}
                >
                  <SearchIcon />
                </IconButton>
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
              </>
            ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
