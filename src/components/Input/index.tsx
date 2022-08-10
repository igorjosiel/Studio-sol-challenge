import { InputProps } from "./types";
import { StyledInput } from "./styles";

const Input = ({
  name,
  placeholder,
  type,
  value,
  min,
  max,
  onChange,
  ...props
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      {...props}
    />
  );
};

export default Input;
