import { css } from '@emotion/react'
import { Box, Grid } from '@mui/material'
import { useContext, useState } from 'react'
import { putUpdateUser } from '../../../apis/user'
import { AuthUserContext } from '../../../contexts/authUserContext'
import { CommonAvatar } from '../../atoms/Avatar/Index'
import { CommonButton } from '../../atoms/Button/Index'
import { CommonTextField } from '../../molecules/TextField/Index'

const editUserProfile = css({
  display: 'flex',
  justifyContent: 'center',
  padding: '0px 10px'
})

const container = css({
  justifyContent: 'center',
  width: '90%',
  minWidth: '240px',
  maxWidth: '800px',
  margin: '0 auto'
})

const commonForm = css({
  display: 'block',
  width: '100%',
  margin: '0 auto'
})

export const EditUserProfile: React.FC = () => {
  const { userInfo, userToken } = useContext(AuthUserContext)
  const [username, setUsername] = useState<string>(
    userInfo?.username !== undefined ? userInfo.username : ''
  )

  const [description, setDescription] = useState<string>(
    userInfo?.description !== undefined ? userInfo.description : ''
  )

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value)
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(e.target.value)
  }

  const handleUpdate = (): void => {
    void putUpdateUser(username, description, userToken)
  }

  return (
    <>
      <Box css={editUserProfile}>
        <Box css={container}>
          <Grid container>
            <Grid xs={12} sm={12} md={2}>
              <CommonAvatar
                avatarImage={userInfo?.image.url}
                avatarAlt="current user avatar"
                avatarSize={100}
              />
            </Grid>
            <Grid xs={12} sm={12} md={10}>
              <Box css={commonForm}>
                <CommonTextField
                  labelText={'ユーザーネーム'}
                  inputType={'text'}
                  inputName={'ユーザーネーム'}
                  inputValue={username}
                  handleChange={handleChangeUsername}
                  placeholder={undefined}
                />
                <CommonTextField
                  labelText={'自己紹介'}
                  inputType={'textarea'}
                  inputName={'自己紹介'}
                  inputValue={description}
                  handleChange={handleChangeDescription}
                  placeholder={undefined}
                  textRows={5}
                />
                <CommonButton
                  buttonText={'更新'}
                  variant={'contained'}
                  handleFunction={handleUpdate}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
