import { Meta, Story } from '@storybook/react/types-6-0'
import { HomeTemplate } from './Index'

const StoryBook: Meta = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate
}

const Template: Story = (args) => <HomeTemplate {...args} />

export const Index = Template.bind({})

export default StoryBook
