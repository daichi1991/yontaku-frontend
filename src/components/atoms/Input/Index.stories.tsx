import { Meta, Story } from '@storybook/react/types-6-0'
import { TextInput, TextInputProps } from './Index'

const StoryBook: Meta<TextInputProps> = {
  title: 'TextInput',
  component: TextInput
}

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />

export const Index = Template.bind({})

const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {}

Index.args = {
  placeholder: 'sample',
  inputType: 'text',
  inputName: 'email',
  handleChange: handleChangeEmail,
  inputValue: ''
}

export default StoryBook
