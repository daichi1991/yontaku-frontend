import { Meta, Story } from '@storybook/react/types-6-0'
import { EditUserProfile } from './Index'

const StoryBook: Meta = {
  title: 'Organisms/EditUserProfile',
  component: EditUserProfile
}

const Template: Story = () => <EditUserProfile />

export const Index = Template.bind({})

export default StoryBook
