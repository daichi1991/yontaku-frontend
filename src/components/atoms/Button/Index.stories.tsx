import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonButton, CommonButtonProps } from './Index'

const StoryBook: Meta<CommonButtonProps> = {
  title: 'CommonButton',
  component: CommonButton
}

const handleSampleFunction = (): void => {}

const Template: Story<CommonButtonProps> = (args) => <CommonButton {...args} />

export const Index = Template.bind({})

Index.args = {
  buttonText: 'Submit',
  handleFunction: handleSampleFunction
}

export default StoryBook
