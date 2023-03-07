import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, TextInput } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/Input',
  component: TextInput
}

const Template: Story<Props> = (args) => <TextInput {...args} />

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
