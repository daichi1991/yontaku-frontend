import { ReactElement } from 'react'

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
  dialogContent?: ReactElement
  dialogAction?: ReactElement
}

export interface MailAuthenticateProps {
  buttonText: string
  mailAddress: TextFieldProps
  password: TextFieldProps
  handleFunction: () => {}
}
