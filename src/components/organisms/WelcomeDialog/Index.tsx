import { CommonDialog } from '../../atoms/Dialog/Index'

export interface Props {
  open: boolean
  onClose: () => void
}

export const WelcomDialog: React.FC<Props> = (props: Props) => {
  const { open, onClose } = props
  const dialogTitle = '登録ありがとうございます！'
  const dialogContent = <>ヨンタク！は4択問題で記憶の定着を目指すサービスです</>

  return (
    <CommonDialog
      open={open}
      onClose={onClose}
      dialogTitle={dialogTitle}
      dialogContent={dialogContent}
    />
  )
}
