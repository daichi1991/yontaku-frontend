import { TextField } from '../../types'
import { ContainedButton } from '../atoms/Button/Index'
import { CommonTextField } from '../molecules/TextInput'

interface Props {
  mailAddress: TextField
  password: TextField
}

export const SignInForm: React.FC<Props> = (props: Props) => {
  return (
    <>
      <CommonTextField
        labelText={props.mailAddress.labelText}
        placeholder={props.mailAddress.placeholder}
        inputType={props.mailAddress.inputType}
      />
      <br />
      <CommonTextField
        labelText={props.password.labelText}
        placeholder={props.password.placeholder}
        inputType={props.password.inputType}
      />
      <br />
      <ContainedButton buttonText="ログイン" />
    </>
  )
}
