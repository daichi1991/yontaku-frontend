import { signInWithEmailAndPassword } from 'firebase/auth'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthUserContext } from '../../../contexts/authUserContext'
import { auth } from '../../../firebase'
import { TextFieldProps } from '../../../types'
import { CommonTitle } from '../../atoms/Title/Index'
import { Header } from '../../organisms/Header/Index'
import { SignInForm } from '../../organisms/SignInForm/Index'

export const SignInTemplate: React.FC = () => {
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

  const handleSignIn = (): void => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsAuthenticated(true)
        navigate('/')
      })
      .catch((error) => {
        console.error(error)
        setIsAuthenticated(false)
      })
  }

  return (
    <>
      <Header menuIcon={false} accountIcon={false} />
      <CommonTitle titleText="ログイン" />
      <SignInForm
        variant="contained"
        buttonText="ログイン"
        email={emailProps}
        password={passwordProps}
        signupLinkTo="/signup/form"
        signupLinkText="会員登録はこちら"
        handleFunction={handleSignIn}
      />
    </>
  )
}
