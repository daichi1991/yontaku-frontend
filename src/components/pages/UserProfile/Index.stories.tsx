import { Meta, Story } from '@storybook/react/types-6-0'
import { UserProfile } from './Index'

const StoryBook: Meta = {
  title: 'Pages/UserProfile',
  component: UserProfile
}

const Template: Story = () => <UserProfile />

export const Index = Template.bind({})

export default StoryBook
