import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonButton, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'CommonButton',
  component: CommonButton
}

const handleSampleFunction = (): void => {}

const Template: Story<Props> = (args) => <CommonButton {...args} />

export const Index = Template.bind({})

Index.args = {
  buttonText: 'Submit',
  handleFunction: handleSampleFunction
}

export default StoryBook
