export interface ButtonProps {
    text?: string,
    children?: Element | string,
    width?: string,
    height?: string,
    background: string,
    cursor: 'auto' | 'pointer',
    boxShadow?: string,
    disabled: boolean,
    onClick: () => void,
}