import { Meta, Story } from '@storybook/react/types-6-0'
import { AvaterUploadTemplate } from '../../templates/AvaterUploadTemplate/Index'

const StoryBook: Meta = {
  title: 'Templates/AvaterUploadTemplate',
  component: AvaterUploadTemplate
}

const Template: Story = () => <AvaterUploadTemplate />

export const Index = Template.bind({})

export default StoryBook
