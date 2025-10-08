import { LabelProps } from "@/components/atoms/Label/type";

export interface FieldProps {
  text: LabelProps['text'];
  type: string;
  classNameInput?: string;
  placeholder?: string;
  onInput: (param: string) => void;
}
