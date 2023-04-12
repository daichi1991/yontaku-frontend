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
import { useNavigate } from 'react-router-dom'
import { getProductSearchByKeyword } from '../../../apis/product'
import { AuthUserContext } from '../../../contexts/authUserContext'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'
import { HeaderType } from '../../../types'
import { CommonAvatar } from '../../atoms/Avatar/Index'
import { CommonLink } from '../../atoms/Link/Index'
import { SearchBox } from '../../atoms/SearchBox/Index'

export interface Props extends HeaderType {}

export const Header: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate()
  const { menuIcon, accountIcon } = props
  const { isPcSite } = useMediaQueryContext()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [onSearchBox, setOnSearchBox] = useState<boolean>(false)
  const { isAuthenticated, setIsAuthenticated, userInfo } = useContext(AuthUserContext)

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

  const handleProductSearchByKeyword = async (keyword: string): Promise<void> => {
    const data = await getProductSearchByKeyword(keyword)
    navigate('/search/result', {
      state: {
        products: data
      }
    })
  }

  const handleGotoEditUserProfile = (): void => {
    navigate('/user/profile/edit')
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
              {accountIcon === true && (
                <>
                  <div style={{ flexGrow: 1 }}>
                    <SearchBox elevation={0} clickFunction={handleProductSearchByKeyword} />
                  </div>
                  {isAuthenticated ? (
                    <div>
                      <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                      >
                        <CommonAvatar
                          avatarImage={userInfo?.image.url}
                          avatarAlt={'current user'}
                          avatarSize={40}
                        />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleGotoEditUserProfile}>アカウント設定</MenuItem>
                        <MenuItem onClick={handleSignOut}>ログアウト</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <div>
                      <CommonLink linkTo="/signin" linkText="ログイン" linkCss={headerLinkStyle} />
                    </div>
                  )}
                </>
              )}
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
                <SearchBox elevation={0} clickFunction={handleProductSearchByKeyword} />
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
                {accountIcon && (
                  <>
                    <IconButton
                      color="inherit"
                      type="button"
                      sx={{ p: '10px' }}
                      aria-label="search"
                      onClick={handleOnSearchBox}
                    >
                      <SearchIcon />
                    </IconButton>
                    {isAuthenticated ? (
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
                          <MenuItem onClick={handleGotoEditUserProfile}>アカウント設定</MenuItem>
                          <MenuItem onClick={handleSignOut}>ログアウト</MenuItem>
                        </Menu>
                      </div>
                    ) : (
                      <div>
                        <CommonLink
                          linkTo="/signin"
                          linkText="ログイン"
                          linkCss={headerLinkStyle}
                        />
                      </div>
                    )}
                  </>
                )}
              </>
            ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
