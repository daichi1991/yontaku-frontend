import { Meta, Story } from '@storybook/react/types-6-0'
import { MemoryRouter } from 'react-router-dom'
import { Props, SignInForm } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Organisms/SignInForm',
  component: SignInForm,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    )
  ]
}

const Template: Story<Props> = (args) => <SignInForm {...args} />

export const Index = Template.bind({})

const handleChangeEmail = (): void => {}
const handleChangePassword = (): void => {}
const handleSignIn = (): void => {}

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
  signupLinkTo: '/signup/form',
  signupLinkText: '会員登録はこちら',
  handleFunction: handleSignIn
}

export default StoryBook
