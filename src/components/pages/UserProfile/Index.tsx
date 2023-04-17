import { useParams } from 'react-router-dom'
import { UserProfileTemplate } from '../../templates/UserProfileTemplate/Index'

export const UserProfile: React.FC = () => {
  const params = useParams()
  return <UserProfileTemplate userId={params.userId ?? ''} />
}
