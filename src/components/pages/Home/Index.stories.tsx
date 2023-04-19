import { Meta, Story } from '@storybook/react/types-6-0'
import { Home } from './Index'

const StoryBook: Meta = {
  title: 'Pages/Home',
  component: Home
}

const Template: Story = (args) => <Home {...args} />

export const Index = Template.bind({})

export default StoryBook
