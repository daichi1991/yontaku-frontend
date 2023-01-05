import { TextFieldProps } from '../../types'
import { CommonTextField } from '../molecules/TextInput'

interface Props {
  mailAddress: TextFieldProps
  password: TextFieldProps
}

export const MailAuthenticate: React.FC<Props> = (props: Props) => {
  const { mailAddress, password } = props
  return (
    <>
      <CommonTextField
        labelText={mailAddress.labelText}
        placeholder={mailAddress.placeholder}
        inputType={mailAddress.inputType}
        inputName={mailAddress.inputName}
        handleChange={mailAddress.handleChange}
        inputValue={mailAddress.inputValue}
      />
      <br />
      <CommonTextField
        labelText={password.labelText}
        placeholder={password.placeholder}
        inputType={password.inputType}
        inputName={password.inputName}
        handleChange={password.handleChange}
        inputValue={password.inputValue}
      />
      <br />
    </>
  )
}
