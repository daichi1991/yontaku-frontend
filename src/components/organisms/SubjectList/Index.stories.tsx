import { Meta, Story } from '@storybook/react/types-6-0'
import { SubjectList } from './Index'

const StoryBook: Meta = {
  title: 'Organisms/SubjectList',
  component: SubjectList
}

const Template: Story = (args) => <SubjectList {...args} />

export const Index = Template.bind({})

export default StoryBook
