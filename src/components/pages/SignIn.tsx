import { TextField } from '../../types'
import { SignInForm } from '../organisms/SignInForm'

export const SignIn: React.FC = () => {
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

  return <SignInForm mailAddress={mailAddress} password={password} />
}
