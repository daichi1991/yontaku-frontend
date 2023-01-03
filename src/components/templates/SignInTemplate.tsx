import { useNavigate } from 'react-router-dom'
import { TextFieldProps } from '../../types'
import { PageTitle } from '../atoms/Title/Index'
import { Header } from '../organisms/Header'
import { SignInForm } from '../organisms/SignInForm'

export const SignInTemplate: React.FC = () => {
  const navigate = useNavigate()

  const mailAddress: TextFieldProps = {
    labelText: 'メールアドレス',
    placeholder: 'example@example.com',
    inputType: 'text'
  }

  const password: TextFieldProps = {
    labelText: 'パスワード',
    placeholder: undefined,
    inputType: 'password'
  }

  const handleSignIn: any = () => {
    console.log('signIn')
    navigate('/')
  }

  return (
    <>
      <Header menuIcon={false} accountIcon={false} />
      <PageTitle pageTitleText="ログイン" />
      <SignInForm
        buttonText="ログイン"
        mailAddress={mailAddress}
        password={password}
        signupLinkTo="/signup/form"
        signupLinkText="会員登録はこちら"
        handleFunction={handleSignIn}
      />
    </>
  )
}
