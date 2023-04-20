import { IconButton, Menu, MenuItem, css } from '@mui/material'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthUserContext } from '../../../contexts/authUserContext'
import { CommonAvatar } from '../../atoms/Avatar/Index'
import { CommonLink } from '../../atoms/Link/Index'

const headerLinkStyle = css({
  color: '#fff',
  textDecoration: 'none'
})

export const HeaderMenu: React.FC = () => {
  const navigate = useNavigate()
  const { isAuthenticated, setIsAuthenticated, userInfo } = useContext(AuthUserContext)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const handleGotoDashboard = (): void => {
    navigate('/dashboard')
  }

  const handleGotoEditUserProfile = (): void => {
    navigate('/user/profile/edit')
  }

  const handleSignOut = (): void => {
    setIsAuthenticated(false)
    setAnchorEl(null)
    navigate('/signin')
  }

  return (
    <>
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
            <MenuItem onClick={handleGotoDashboard}>教材の管理</MenuItem>
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
  )
}
