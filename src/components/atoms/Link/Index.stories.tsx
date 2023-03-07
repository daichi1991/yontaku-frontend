import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonLink, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/Link',
  component: CommonLink
}

const Template: Story<Props> = (args) => <CommonLink {...args} />

export const Index = Template.bind({})

Index.args = {
  linkTo: '#',
  linkText: 'link text'
}

export default StoryBook
