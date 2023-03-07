import { Meta, Story } from '@storybook/react/types-6-0'
import { SignInTemplate } from '../../templates/SignInTemplate/Index'

const StoryBook: Meta = {
  title: 'Templates/SignInTemplate',
  component: SignInTemplate
}

const Template: Story = (args) => <SignInTemplate {...args} />

export const Index = Template.bind({})

export default StoryBook
