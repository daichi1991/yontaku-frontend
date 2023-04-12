import { TextFieldProps } from '../../../types'
import { TextInput } from '../../atoms/Input/Index'
import { InputFormLabel } from '../../atoms/Label/Index'

export interface Props extends TextFieldProps {}

export const CommonTextField: React.FC<Props> = (props: Props) => {
  const { labelText, placeholder, inputType, inputName, handleChange, inputValue, textRows } = props
  return (
    <>
      {labelText != null && (
        <>
          <InputFormLabel labelText={labelText} />
          <br />
        </>
      )}
      <TextInput
        placeholder={placeholder}
        inputType={inputType}
        inputName={inputName}
        handleChange={handleChange}
        inputValue={inputValue}
        textRows={textRows}
      />
    </>
  )
}
