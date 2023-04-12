import { Avatar } from '@mui/material'
import { AvatarProps } from '../../../types'

export interface Props extends AvatarProps {}

export const CommonAvatar: React.FC<Props> = (props: Props) => {
  const { avatarImage, avatarAlt, avatarSize } = props
  return <Avatar src={avatarImage} alt={avatarAlt} sx={{ width: avatarSize, height: avatarSize }} />
}
