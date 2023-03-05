import { ReactElement } from 'react'

export interface TextFieldProps {
  labelText?: string
  placeholder: string | undefined
  inputType: string
  inputName: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
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
  variant: string
  buttonText: string
  email: TextFieldProps
  password: TextFieldProps
  handleFunction: () => void
}

export interface AuthUser {
  token: string
}

export interface UserType {
  id: string
  username: string
}
