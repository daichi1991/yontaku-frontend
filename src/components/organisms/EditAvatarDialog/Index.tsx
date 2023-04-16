import { useState } from 'react'
import { CommonDialog } from '../../atoms/Dialog/Index'
import { AvaterUpload } from '../../molecules/AvaterUpload/Index'

export interface Props {
  open: boolean
  onClose: () => void
}

export const EditAvatarDialog: React.FC<Props> = (props: Props) => {
  const { open, onClose } = props
  const [hideCloseButton, setHideCloseButton] = useState<boolean>(false)
  const dialogContent = (
    <>
      <AvaterUpload setHideCloseButton={setHideCloseButton} />
    </>
  )

  return (
    <CommonDialog
      open={open}
      onClose={onClose}
      dialogTitle={'アバター設定'}
      dialogContent={dialogContent}
      hideCloseButton={hideCloseButton}
    />
  )
}
