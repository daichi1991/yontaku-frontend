import { Meta, Story } from '@storybook/react/types-6-0'
import { Product } from '../../pages/Product/Index'

const StoryBook: Meta = {
  title: 'Pages/Product',
  component: Product
}

const Template: Story = (args) => <Product {...args} />

export const Index = Template.bind({})

export default StoryBook
