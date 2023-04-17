import { Meta, Story } from '@storybook/react/types-6-0'
import { EditUserProfile } from '../EditUserProfile/Index'

const StoryBook: Meta = {
  title: 'Pages/EditUserProfile',
  component: EditUserProfile
}

const Template: Story = () => <EditUserProfile />

export const Index = Template.bind({})

export default StoryBook
