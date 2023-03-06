import { Meta, Story } from '@storybook/react/types-6-0'
import { CommonDialog, Props } from './Index'

const StoryBook: Meta<Props> = {
  title: 'CommonDialog',
  component: CommonDialog
}

const Template: Story<Props> = (args) => <CommonDialog {...args} />

export const Index = Template.bind({})

const handleClose = (): void => {}

Index.args = {
  open: false,
  onClose: handleClose,
  dialogTitle: '登録ありがとうございます！',
  dialogContent: <>ヨンタク！は4択問題で記憶の定着を目指すサービスです</>
}

export default StoryBook
