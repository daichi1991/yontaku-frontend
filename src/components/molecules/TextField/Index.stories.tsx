import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonTextField, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Molecules/TextField',
  component: CommonTextField
}

const Template: Story<Props> = (args) => <CommonTextField {...args} />

export const Index = Template.bind({})

const handleChangeEmail = (): void => {}

Index.args = {
  labelText: 'メールアドレス',
  placeholder: 'example@example.com',
  inputType: 'text',
  inputName: 'email',
  handleChange: handleChangeEmail,
  inputValue: ''
}

export default StoryBook
