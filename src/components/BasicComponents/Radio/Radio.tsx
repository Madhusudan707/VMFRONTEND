import React from 'react';
import './Radio.scss';

interface RadioProps {
  id: string;
  name: string;
  value: string;
  label: string;
  icon?: string;
  handleOptionChange: any;
}
export const Radio: React.FC<RadioProps> = (props: RadioProps) => {
  return (
    // eslint-disable-next-line
    <label className="d-flex justify-content-between radio-container separator">
      <span>
        {props.icon && (
          <span className="list-icon">
            <img src={props.icon} alt="" />
          </span>
        )}

        <span className="radio-text">{props.label}</span>
      </span>

      <input
        type="radio"
        id={props.id}
        onChange={(e) => props.handleOptionChange(e)}
        value={props.value}
        name={props.name}
        className="radio"
      />
    </label>
  );
};
