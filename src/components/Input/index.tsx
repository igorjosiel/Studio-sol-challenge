import { InputProps } from "./tyes";
import { StyledInput } from "./styles";

const Input = ({ name, placeholder, type, value, onChange }: InputProps) => {
    return (
        <StyledInput
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={(input) => onChange(input.target.value)}
        />
    );
}

export default Input;