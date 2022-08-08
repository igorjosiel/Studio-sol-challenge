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
  console.log("dgdg: ", value);
  return (
    <StyledInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      min={min}
      maxLength={2}
      onChange={(input) => onChange(input.target.value)}
      {...props}
    />
  );
};

export default Input;
