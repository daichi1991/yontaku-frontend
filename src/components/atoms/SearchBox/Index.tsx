import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import { Divider } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import { useMediaQueryContext } from '../../../contexts/mediaQueryContext'

export interface Props {
  elevation: number
  clickFunction: (keyword: string) => Promise<void>
}

export const SearchBox: React.FC<Props> = (props: Props) => {
  const { elevation, clickFunction } = props
  const { isMobileSite } = useMediaQueryContext()
  const [keyword, setKeyword] = useState<string>('')

  const handleChangeKeyword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(event.target.value)
  }

  const handleCrearKeyword = (): void => {
    setKeyword('')
  }

  const handleClick = (): void => {
    void clickFunction(keyword)
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
      void clickFunction(keyword)
    }
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, height: 34 }}
      elevation={elevation}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, lineHeight: 34 }}
        placeholder="キーワード"
        value={keyword}
        onChange={handleChangeKeyword}
        onKeyPress={handleKeyPress}
      />

      <IconButton type="button" sx={{ p: '10px' }} aria-label="crear" onClick={handleCrearKeyword}>
        <ClearIcon />
      </IconButton>
      {isMobileSite === false && (
        <>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            type="button"
            sx={{ p: '10px' }}
            aria-label="search"
            onClick={handleClick}
          >
            <SearchIcon />
          </IconButton>
        </>
      )}
    </Paper>
  )
}
