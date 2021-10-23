export interface TIProps {
  value?: string;
  onChange: (event: React.FormEvent<HTMLDivElement>) => void;
  onFocus: (value: boolean | (() => boolean)) => void;
  onClear: () => void;
  isFocus?: boolean;
  required?: boolean;
  placeholder?: string;
  label: string;
  error?: boolean;
  errorMessage?: string;
}
