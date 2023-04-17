import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, UserProfileTemplate } from './Index'

const StoryBook: Meta = {
  title: 'Templates/UserProfileTemplate',
  component: UserProfileTemplate
}

const Template: Story<Props> = (args) => <UserProfileTemplate {...args} />

export const Index = Template.bind({})

Index.args = {
  userId: 'db06d28b-53ad-45ae-8e2b-b6dd508bf0e6'
}

export default StoryBook
