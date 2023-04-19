import { Meta, Story } from '@storybook/react/types-6-0'
import { DashboardTemplate } from './Index'

const StoryBook: Meta = {
  title: 'Templates/DashboardTemplate',
  component: DashboardTemplate
}

const Template: Story = () => <DashboardTemplate />

export const Index = Template.bind({})

export default StoryBook
