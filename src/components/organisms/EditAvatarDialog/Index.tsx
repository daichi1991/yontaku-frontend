import { CommonDialog } from '../../atoms/Dialog/Index'
import { AvaterUpload } from '../../molecules/AvaterUpload/Index'

export interface Props {
  open: boolean
  onClose: () => void
}

export const EditAvatarDialog: React.FC<Props> = (props: Props) => {
  const { open, onClose } = props
  const dialogTitle = 'アバターを変更する'
  const dialogContent = (
    <>
      <AvaterUpload />
    </>
  )

  return (
    <CommonDialog
      open={open}
      onClose={onClose}
      dialogTitle={dialogTitle}
      dialogContent={dialogContent}
    />
  )
}
