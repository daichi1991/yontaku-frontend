import { css } from '@emotion/react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductSearchByKeyword } from '../../../apis/product'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'
import { HeaderType } from '../../../types'
import { CommonLink } from '../../atoms/Link/Index'
import { SearchBox } from '../../atoms/SearchBox/Index'
import { HeaderMenu } from '../../molecules/HeaderMenu/Index'

export interface Props extends HeaderType {}

export const Header: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate()
  const { menuIcon, accountIcon } = props
  const { isPcSite } = useMediaQueryContext()
  const [onSearchBox, setOnSearchBox] = useState<boolean>(false)

  const headerLinkStyle = css({
    color: '#fff',
    textDecoration: 'none'
  })

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

  return (
    <Box sx={{ mr: 'calc(50% - 50vw)', ml: 'calc(50% - 50vw)', flexGrow: 1, marginBottom: 2 }}>
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
                  <HeaderMenu />
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
                    <HeaderMenu />
                  </>
                )}
              </>
            ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
