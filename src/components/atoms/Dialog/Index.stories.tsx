import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonDialog, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'Atoms/Dialog',
  component: CommonDialog
}

const Template: Story<Props> = (args) => <CommonDialog {...args} />

export const Index = Template.bind({})

const handleClose = (): void => {}

Index.args = {
  open: false,
  onClose: handleClose,
  dialogTitle: 'Sample Title',
  dialogContent: <>text text text text</>
}

export default StoryBook
