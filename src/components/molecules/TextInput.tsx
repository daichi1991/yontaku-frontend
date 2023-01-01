import { TextField } from '../../types'
import { TextInput } from '../atoms/Input/Index'
import { InputFormLabel } from '../atoms/Label/Index'

interface Props extends TextField {}

export const CommonTextField: React.FC<Props> = (props: Props) => {
  return (
    <>
      {props.labelText != null && (
        <>
          <InputFormLabel labelText={props.labelText} />
          <br />
        </>
      )}
      <TextInput placeholder={props.placeholder} inputType={props.inputType} />
    </>
  )
}
