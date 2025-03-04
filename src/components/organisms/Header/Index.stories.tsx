import { Meta, Story } from '@storybook/react/types-6-0'
import { Header, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Organisms/Header',
  component: Header
}

const Template: Story<Props> = (args) => <Header {...args} />

export const Index = Template.bind({})

Index.args = {
  menuIcon: true,
  accountIcon: true
}

export default StoryBook
