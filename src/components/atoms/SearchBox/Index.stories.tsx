import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, SearchBox } from '../../atoms/SearchBox/Index'

const StoryBook: Meta<Props> = {
  title: 'Molecules/SearchBox',
  component: SearchBox
}

const Template: Story<Props> = (args) => <SearchBox {...args} />

export const Index = Template.bind({})

export default StoryBook

Index.args = {
  elevation: 1
}
