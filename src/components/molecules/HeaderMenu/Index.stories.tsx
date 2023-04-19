import { Meta, Story } from '@storybook/react/types-6-0'
import { HeaderMenu } from './Index'

const StoryBook: Meta = {
  title: 'Molecules/HeaderMenu',
  component: HeaderMenu
}

const Template: Story = () => <HeaderMenu />

export const Index = Template.bind({})

export default StoryBook
