export interface WMProps {
  onModalToggle: (value: boolean | (() => boolean)) => void;
  visible: boolean;
}
