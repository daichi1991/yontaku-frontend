import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonAvatar, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/CommonAvatar',
  component: CommonAvatar
}

const Template: Story<Props> = (args) => <CommonAvatar {...args} />

export const Index = Template.bind({})

Index.args = {
  avatarImage: 'https://source.unsplash.com/random',
  avatarAlt: 'ユーザーのアバター',
  avatarSize: 120
}

export default StoryBook
