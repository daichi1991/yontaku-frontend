import { css } from '@emotion/react'
import EditIcon from '@mui/icons-material/Edit'
import { Badge, Box, Grid } from '@mui/material'
import { useContext, useState } from 'react'
import { putUpdateUser } from '../../../apis/user'
import { AuthUserContext } from '../../../contexts/authUserContext'
import { CommonAvatar } from '../../atoms/Avatar/Index'
import { CommonButton } from '../../atoms/Button/Index'
import { CommonTextField } from '../../molecules/TextField/Index'
import { EditAvatarDialog } from '../EditAvatarDialog/Index'

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

const avatarBlock = css({
  display: 'block',
  justifyContent: 'center',
  textAlign: 'center',
  cursor: 'pointer'
})

const badgeContent = css({
  display: 'flex',
  width: '30px',
  height: '30px',
  backgroundColor: '#aaa',
  color: '#fff',
  borderRadius: '50%',
  boxShadow: '0 0 0 4px #fff',
  justifyContent: 'center',
  alignItems: 'center'
})

const formBlock = css({
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

  const [openAvatarUpload, setOpenAvatarUpload] = useState<boolean>(false)

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(e.target.value)
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDescription(e.target.value)
  }

  const handleUpdate = (): void => {
    void putUpdateUser(username, description, userToken)
  }

  const handleOpenAvatarUpload = (): void => {
    setOpenAvatarUpload(true)
  }

  const handleCloseAvatarUpload = (): void => {
    setOpenAvatarUpload(false)
  }

  return (
    <>
      <Box css={editUserProfile}>
        <Box css={container}>
          <Grid container>
            <Grid xs={12} sm={12} md={2}>
              <Box onClick={handleOpenAvatarUpload} css={avatarBlock}>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={
                    <Box css={badgeContent}>
                      <EditIcon fontSize="small" />
                    </Box>
                  }
                >
                  <CommonAvatar
                    avatarImage={userInfo?.image.url}
                    avatarAlt="current user avatar"
                    avatarSize={100}
                  />
                </Badge>
              </Box>
            </Grid>
            <Grid xs={12} sm={12} md={10}>
              <Box css={formBlock}>
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
      <EditAvatarDialog open={openAvatarUpload} onClose={handleCloseAvatarUpload} />
    </>
  )
}
