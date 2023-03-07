import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, SignUpForm } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Organisms/SignUpForm',
  component: SignUpForm
}

const Template: Story<Props> = (args) => <SignUpForm {...args} />

export const Index = Template.bind({})

const handleChangeEmail = (): void => {}
const handleChangePassword = (): void => {}
const handleSignUp = (): void => {}

const emailProps = {
  labelText: 'メールアドレス',
  placeholder: 'example@example.com',
  inputType: 'text',
  inputName: 'email',
  handleChange: handleChangeEmail,
  inputValue: ''
}

const passwordProps = {
  labelText: 'パスワード',
  placeholder: undefined,
  inputType: 'password',
  inputName: 'password',
  handleChange: handleChangePassword,
  inputValue: ''
}

Index.args = {
  variant: 'contained',
  buttonText: 'ログイン',
  email: emailProps,
  password: passwordProps,
  signinLinkTo: '/signup/form',
  signinLinkText: '会員登録はこちら',
  handleFunction: handleSignUp
}

export default StoryBook
