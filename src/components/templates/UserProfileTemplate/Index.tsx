import { useEffect, useState } from 'react'
import { getUserInfo } from '../../../apis/user'
import { UserType } from '../../../types'
import { CommonTitle } from '../../atoms/Title/Index'
import { Header } from '../../organisms/Header/Index'
import { UserProfile } from '../../organisms/UserProfile/Index'

export interface Props {
  userId: string
}

export const UserProfileTemplate: React.FC<Props> = (props: Props) => {
  const { userId } = props
  const [userInfo, setUserInfo] = useState<UserType>({
    id: '',
    username: '',
    description: '',
    image: {
      url: ''
    },
    active: false
  })

  useEffect(() => {
    getUserInfo(userId)
      .then((res) => {
        setUserInfo(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Header menuIcon={false} accountIcon={true} />
      <CommonTitle titleText="プロフィール" />
      <UserProfile
        username={userInfo.username}
        description={userInfo.description}
        image={userInfo.image}
      />
    </>
  )
}
