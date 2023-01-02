import { TextField } from '../../types'
import { PageTitle } from '../atoms/Title/Index'
import { Header } from '../organisms/Header'
import { SignUpForm } from '../organisms/SignUpForm'

export const SignUpFormTemplate: React.FC = () => {
  const mailAddress: TextField = {
    labelText: 'メールアドレス',
    placeholder: 'example@example.com',
    inputType: 'text'
  }

  const password: TextField = {
    labelText: 'パスワード',
    placeholder: undefined,
    inputType: 'password'
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
      />
    </>
  )
}
