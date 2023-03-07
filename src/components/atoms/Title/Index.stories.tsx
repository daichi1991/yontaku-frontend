import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonTitle, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/Title',
  component: CommonTitle
}

const Template: Story<Props> = (args) => <CommonTitle {...args} />

export const Index = Template.bind({})

Index.args = {
  titleText: 'Page Title'
}

export default StoryBook
