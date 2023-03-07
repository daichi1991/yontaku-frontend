import { Meta, Story } from '@storybook/react/types-6-0'
import { SignIn } from '../../pages/SignIn/Index'

const StoryBook: Meta = {
  title: 'Pages/SignIn',
  component: SignIn
}

const Template: Story = (args) => <SignIn {...args} />

export const Index = Template.bind({})

export default StoryBook
