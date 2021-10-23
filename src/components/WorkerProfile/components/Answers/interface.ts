export interface AProps {
  answers: any[];
  show: boolean;
  isModal?: boolean;
  onClick?: (value: number | (() => any)) => any;
  onSelectedAnswers: any;
  selectedAnswers?: any;
}
