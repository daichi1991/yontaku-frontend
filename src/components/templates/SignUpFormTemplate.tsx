import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthUserContext } from '../../contexts/authUserContext'
import { auth } from '../../firebase'
import { TextFieldProps } from '../../types'
import { PageTitle } from '../atoms/Title/Index'
import { Header } from '../organisms/Header'
import { SignUpForm } from '../organisms/SignUpForm'

export const SignUpFormTemplate: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { setIsAuthenticated } = useContext(AuthUserContext)
  const navigate = useNavigate()

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value)
  }

  const emailProps: TextFieldProps = {
    labelText: 'メールアドレス',
    placeholder: 'example@example.com',
    inputType: 'text',
    inputName: 'email',
    handleChange: handleChangeEmail,
    inputValue: email
  }

  const passwordProps: TextFieldProps = {
    labelText: 'パスワード',
    placeholder: undefined,
    inputType: 'password',
    inputName: 'password',
    handleChange: handleChangePassword,
    inputValue: password
  }

  const handleSignUp = (): void => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setIsAuthenticated(true)
        navigate('/')
      })
      .catch((error) => {
        setIsAuthenticated(false)
        console.error(error)
      })
  }

  return (
    <>
      <Header menuIcon={false} accountIcon={false} />
      <PageTitle pageTitleText="会員登録" />
      <SignUpForm
        variant="contained"
        buttonText="同意して登録"
        email={emailProps}
        password={passwordProps}
        signinLinkTo="/signin"
        signinLinkText="ログインはこちら"
        handleFunction={handleSignUp}
      />
    </>
  )
}
