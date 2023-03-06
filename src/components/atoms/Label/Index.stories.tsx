import { Meta, Story } from '@storybook/react/types-6-0'
import { InputFormLabel, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'InputFormLabel',
  component: InputFormLabel
}

const Template: Story<Props> = (args) => <InputFormLabel {...args} />

export const Index = Template.bind({})

Index.args = {
  labelText: 'sample'
}

export default StoryBook
