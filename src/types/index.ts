import { DialogActionsProps, DialogContentProps } from '@mui/material'

export interface TextFieldProps {
  labelText?: string
  placeholder: string | undefined
  inputType: string
}

export interface HeaderType {
  menuIcon: boolean
  accountIcon: boolean
}

export interface DialogProps {
  open: boolean
  onClose: () => void
  dialogTitle: string | null
  dialogContent: DialogContentProps | null
  dialogAction: DialogActionsProps | null
}

export interface MailAuthenticateProps {
  buttonText: string
  mailAddress: TextFieldProps
  password: TextFieldProps
  handleFunction: () => {}
}
