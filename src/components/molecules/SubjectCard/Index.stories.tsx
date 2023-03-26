import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, SubjectCard } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Molecules/SubjectCard',
  component: SubjectCard
}

const Template: Story<Props> = (args) => <SubjectCard {...args} />

export const Index = Template.bind({})
Index.args = {
  name: '英語',
  image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
}

export default StoryBook
