import { Meta, Story } from '@storybook/react/types-6-0'
import { SignUpFormTemplate } from '../../templates/SignUpFormTemplate/Index'

const StoryBook: Meta = {
  title: 'Templates/SignUpFormTemplate',
  component: SignUpFormTemplate
}

const Template: Story = (args) => <SignUpFormTemplate {...args} />

export const Index = Template.bind({})

export default StoryBook
