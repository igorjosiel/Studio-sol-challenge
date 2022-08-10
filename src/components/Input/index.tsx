import { InputProps } from "./types";
import { StyledInput } from "./styles";

const Input = ({
  name,
  placeholder,
  type,
  value,
  max,
  onChange,
  ...props
}: InputProps) => {
  const handleOnChange = (event: any) => {
    const { value } = event?.target;

    if (value?.length <= max) onChange(value);
  }

  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      max={max}
      onChange={(event) => handleOnChange(event)}
      {...props}
    />
  );
};

export default Input;
