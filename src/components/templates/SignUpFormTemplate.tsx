import { useNavigate } from 'react-router-dom'
import { TextFieldProps } from '../../types'
import { PageTitle } from '../atoms/Title/Index'
import { Header } from '../organisms/Header'
import { SignUpForm } from '../organisms/SignUpForm'

export const SignUpFormTemplate: React.FC = () => {
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

  const handleSignUp: any = () => {
    console.log('signUn')
    navigate('/', { state: { dialog: 'yes' } })
  }

  return (
    <>
      <Header menuIcon={false} accountIcon={false} />
      <PageTitle pageTitleText="会員登録" />
      <SignUpForm
        buttonText="同意して登録"
        mailAddress={mailAddress}
        password={password}
        signinLinkTo="/signin"
        signinLinkText="ログインはこちら"
        handleFunction={handleSignUp}
      />
    </>
  )
}
