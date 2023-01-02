import { TextField } from '../../types'
import { PageTitle } from '../atoms/Title/Index'
import { Header } from '../organisms/Header'
import { SignInForm } from '../organisms/SignInForm'

export const SignInTemplate: React.FC = () => {
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
      <PageTitle pageTitleText="ログイン" />
      <SignInForm
        buttonText="ログイン"
        mailAddress={mailAddress}
        password={password}
        signupLinkTo="/signup/form"
        signupLinkText="会員登録はこちら"
      />
    </>
  )
}
