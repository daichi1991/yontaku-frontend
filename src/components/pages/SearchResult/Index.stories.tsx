import { Meta, Story } from '@storybook/react/types-6-0'
import { SearchResult } from '../../pages/SearchResult/Index'

const StoryBook: Meta = {
  title: 'Pages/SearchResult',
  component: SearchResult
}

const Template: Story = (args) => <SearchResult {...args} />

export const Index = Template.bind({})

export default StoryBook
