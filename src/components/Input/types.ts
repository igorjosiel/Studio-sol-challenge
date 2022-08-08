export interface InputProps {
  name: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder: string;
  type: "text" | "number";
  height: string;
  width?: string;
  min?: string;
  max?: string;
}
