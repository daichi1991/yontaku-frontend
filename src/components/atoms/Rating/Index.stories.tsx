import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonRating, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/Rating',
  component: CommonRating
}

const Template: Story<Props> = (args) => <CommonRating {...args} />

export const Index = Template.bind({})

Index.args = {
  ratingScore: 3.5,
  precision: 0.5,
  readOnly: true
}

export default StoryBook
