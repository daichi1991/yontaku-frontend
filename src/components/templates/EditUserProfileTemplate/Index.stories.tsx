import { Meta, Story } from '@storybook/react/types-6-0'
import { EditUserProfileTemplate } from './Index'

const StoryBook: Meta = {
  title: 'Templates/EditUserProfileTemplate',
  component: EditUserProfileTemplate
}

const Template: Story = () => <EditUserProfileTemplate />

export const Index = Template.bind({})

export default StoryBook
