import { css } from '@emotion/react'
import { Box, Grid, Typography } from '@mui/material'
import { UserType } from '../../../types'
import { CommonAvatar } from '../../atoms/Avatar/Index'

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

const formBlock = css({
  display: 'block',
  width: '100%',
  margin: '0 auto'
})

export interface Props {
  username: string
  description: string
  image: UserType['image']
}

export const UserProfile: React.FC<Props> = (props: Props) => {
  const { username, description, image } = props

  return (
    <>
      <Box css={editUserProfile}>
        <Box css={container}>
          <Grid container>
            <Grid item xs={12} sm={3} md={3}>
              <Box css={avatarBlock}>
                <CommonAvatar avatarImage={image.url} avatarAlt="user avatar" avatarSize={100} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={9} md={9}>
              <Box css={formBlock}>
                <Typography variant="h5" component="h5" sx={{ fontWeight: 'bold', mt: 1, mb: 2 }}>
                  {username}
                </Typography>
                {description.split('\n').map((text, index) => {
                  return (
                    <Typography key={index} variant="body1" component="p">
                      {text}
                    </Typography>
                  )
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}
