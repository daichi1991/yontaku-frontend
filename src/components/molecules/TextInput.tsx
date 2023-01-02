import { TextFieldProps } from '../../types'
import { TextInput } from '../atoms/Input/Index'
import { InputFormLabel } from '../atoms/Label/Index'

interface Props extends TextFieldProps {}

export const CommonTextField: React.FC<Props> = (props: Props) => {
  const { labelText, placeholder, inputType } = props
  return (
    <>
      {labelText != null && (
        <>
          <InputFormLabel labelText={labelText} />
          <br />
        </>
      )}
      <TextInput placeholder={placeholder} inputType={inputType} />
    </>
  )
}
