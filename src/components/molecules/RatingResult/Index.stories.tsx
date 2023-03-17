import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, RatingResult } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Molecules/RatingResult',
  component: RatingResult
}

const Template: Story<Props> = (args) => <RatingResult {...args} />

export const Index = Template.bind({})

Index.args = {
  ratingScore: 3.5,
  ratingAmount: 40
}

export default StoryBook
