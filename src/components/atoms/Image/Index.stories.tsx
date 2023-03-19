import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonImage, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/Image',
  component: CommonImage
}

const Template: Story<Props> = (args) => <CommonImage {...args} />

export const Index = Template.bind({})
Index.args = {
  image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
  imageStyle: { width: 200 },
  imageTitleFilter: true,
  titleText: '英語'
}

export default StoryBook
