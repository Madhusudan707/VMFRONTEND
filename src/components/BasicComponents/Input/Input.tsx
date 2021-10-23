import React from 'react';
import './input.scss';

interface InputProps {
  className?: string;
  type: string;
  placeHolderName?: string;
  value?: string;
  invalid?: boolean;
  helpText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  required?: boolean;
  icon?: string;
}
export const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <>
      <input
        style={{ background: `url(${props.icon}) no-repeat 7px 15px` }}
        className={`${props.className} form-control input-vm`}
        type={props.type}
        placeholder={props.placeHolderName}
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
        required={props.required}
      />
      {props.helpText && (
        <p
          className={
            'fw-600 typography--variant-body2 mb-20 ' +
            (props.invalid ? 'error-text' : '')
          }
        >
          {props.helpText}
        </p>
      )}
    </>
  );
};
