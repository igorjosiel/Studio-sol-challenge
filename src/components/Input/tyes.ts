export interface InputProps {
    name: string,
    value: string | number,
    onChange: (value: string) => void,
    placeholder: string,
    type: 'text' | 'number',
}