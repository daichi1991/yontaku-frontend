import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { DialogProps } from '../../../types'

export interface Props extends DialogProps {}

export const CommonDialog: React.FC<Props> = (props: Props) => {
  const { open, onClose, dialogTitle, dialogContent, dialogAction } = props

  return (
    <Dialog onClose={onClose} open={open}>
      {dialogTitle != null && <DialogTitle>{dialogTitle}</DialogTitle>}
      {dialogContent != null && <DialogContent>{dialogContent}</DialogContent>}
      {dialogAction != null && <DialogActions>{dialogAction}</DialogActions>}
    </Dialog>
  )
}
