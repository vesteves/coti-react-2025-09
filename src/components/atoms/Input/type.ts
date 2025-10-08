export interface InputProps {
  type: string;
  className?: string;
  placeholder?: string;
  onInput: (text: string) => void;
}