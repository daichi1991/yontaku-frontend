import { CommonTitle } from '../../atoms/Title/Index'
import { EditUserProfile } from '../../organisms/EditUserProfile/Index'
import { Header } from '../../organisms/Header/Index'

export const EditUserProfileTemplate: React.FC = () => {
  return (
    <>
      <Header menuIcon={false} accountIcon={true} />
      <CommonTitle titleText="プロフィール編集" />
      <EditUserProfile />
    </>
  )
}
