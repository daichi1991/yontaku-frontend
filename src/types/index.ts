import { ReactElement } from 'react'

export interface TextInputProps {
  placeholder: string | undefined
  inputType: string
  inputName: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputValue: string
}

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

export interface productType {
  id: string
  auther_id: string
  name: string
  description: string
  image: string | null
  sale: {
    price: number
    publish: boolean
  }
  rate: {
    amount: number
    score: number | null
  }
  question_amount: number
}
