import { Meta, Story } from '@storybook/react/types-6-0'
import { AvaterUpload, Props } from './Index'

const StoryBook: Meta = {
  title: 'Molecules/AvaterUpload',
  component: AvaterUpload
}

const Template: Story<Props> = (args) => <AvaterUpload {...args} />

export const Index = Template.bind({})

Index.args = {
  setHideCloseButton: () => {}
}

export default StoryBook
