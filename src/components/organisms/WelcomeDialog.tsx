import { DialogProps } from '../../types'
import { CommonDialog } from '../atoms/Dialog'

interface Props extends DialogProps {}

export const WelcomDialog: React.FC<Props> = (props: Props) => {
  const { open, onClose, dialogTitle, dialogContent, dialogAction } = props
  return <CommonDialog {...props} />
}
