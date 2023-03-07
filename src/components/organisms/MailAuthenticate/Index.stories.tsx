import { Meta, Story } from '@storybook/react/types-6-0'
import { MailAuthenticate, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Organisms/MailAuthenticate',
  component: MailAuthenticate
}

const Template: Story<Props> = (args) => <MailAuthenticate {...args} />

export const Index = Template.bind({})

const handleCheange = (): void => {}

const mailProps = {
  labelText: 'メールアドレス',
  placeholder: 'example@example.com',
  inputType: 'text',
  inputName: 'email',
  handleChange: handleCheange,
  inputValue: ''
}

const constPassword = {
  labelText: 'パスワード',
  placeholder: '',
  inputType: 'password',
  inputName: 'password',
  handleChange: handleCheange,
  inputValue: ''
}

Index.args = {
  mailAddress: mailProps,
  password: constPassword
}

export default StoryBook
