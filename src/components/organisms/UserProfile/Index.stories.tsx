import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, UserProfile } from './Index'

const StoryBook: Meta = {
  title: 'Organisms/UserProfile',
  component: UserProfile
}

const Template: Story<Props> = (args) => <UserProfile {...args} />

export const Index = Template.bind({})

Index.args = {
  username: 'テストユーザー',
  description: 'テストユーザーの自己紹介です。',
  image: {
    url: 'https://images.unsplash.com/photo-1626128880008-8e8f8b8b2b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  }
}

export default StoryBook
