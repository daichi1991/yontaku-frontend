import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, Subject } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/Subject',
  component: Subject
}

const Template: Story<Props> = (args) => <Subject {...args} />

export const Index = Template.bind({})
Index.args = {
  image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  name: '英語'
}

export default StoryBook
