export interface WNProps {
  name: string;
  onChange: (event: React.FormEvent<HTMLDivElement>) => void;
  onFocus: (value: boolean | (() => boolean)) => void;
  onModalToggle: (value: boolean | (() => boolean)) => void;
  onClear: () => void;
  isFocus?: boolean;
}
