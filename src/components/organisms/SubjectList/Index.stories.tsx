import { Meta, Story } from '@storybook/react/types-6-0'
import { Props, SubjectList } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/SubjectList',
  component: SubjectList
}

const Template: Story<Props> = (args) => <SubjectList {...args} />

export const Index = Template.bind({})

Index.args = {
  subjects: [
    {
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      name: '英語'
    },
    {
      image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      name: '数学'
    },
    {
      image: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      name: '世界史'
    },
    {
      image: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      name: '日本史'
    },
    {
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      name: '物理'
    }
  ]
}

export default StoryBook
