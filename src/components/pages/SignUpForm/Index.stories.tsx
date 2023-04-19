import { Meta, Story } from '@storybook/react/types-6-0'
import { SignUpForm } from './Index'

const StoryBook: Meta = {
  title: 'Pages/SignUpForm',
  component: SignUpForm
}

const Template: Story = (args) => <SignUpForm {...args} />

export const Index = Template.bind({})

export default StoryBook
