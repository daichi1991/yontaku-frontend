import { Meta, Story } from '@storybook/react/types-6-0'
import { AvaterUpload } from './Index'

const StoryBook: Meta = {
  title: 'Molecules/AvaterUpload',
  component: AvaterUpload
}

const Template: Story = () => <AvaterUpload />

export const Index = Template.bind({})

export default StoryBook
