import { Meta, Story } from '@storybook/react/types-6-0'
import { SearchResultTemplate } from '../../templates/SearchResultTemplate/Index'

const StoryBook: Meta = {
  title: 'Templates/SearchResultTemplate',
  component: SearchResultTemplate
}

const Template: Story = (args) => <SearchResultTemplate subjectKey={'english'} {...args} />

export const Index = Template.bind({})

export default StoryBook
