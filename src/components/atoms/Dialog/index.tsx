import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { DialogProps } from '../../../types'

export interface Props extends DialogProps {}

export const CommonDialog: React.FC<Props> = (props: Props) => {
  const { open, onClose, dialogTitle, dialogContent, dialogAction, hideCloseButton } = props
  const hideCloseButtonIcon = hideCloseButton === true

  return (
    <Dialog onClose={onClose} open={open} sx={{ minWidth: '320px' }}>
      {dialogTitle != null && <DialogTitle>{dialogTitle}</DialogTitle>}
      {hideCloseButtonIcon === false && (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
      {dialogContent != null && <DialogContent>{dialogContent}</DialogContent>}
      {dialogAction != null && <DialogActions>{dialogAction}</DialogActions>}
    </Dialog>
  )
}
