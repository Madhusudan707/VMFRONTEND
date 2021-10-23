import React from 'react';
import './Button.scss';
interface ButtonProps {
  children: React.ReactNode;
  type?: any;
  onClick?: (e: any) => void;
  variant: string;
  buttonState?: string;
  name?: string;
  icon?: string;
  iconPosition?: string;
  classes?: string;
}
const STYLES = [
  // custom class
  'button-primary',
  'button-secondary',
  'flat-button',
];

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    type,
    onClick,
    variant,
    buttonState,
    icon,
    iconPosition,
    classes,
    name,
  } = props;

  const checkButtonStyle = STYLES.includes(variant) ? variant : STYLES[0];

  return (
    <button
      className={`${checkButtonStyle} ${classes || ''}`}
      onClick={onClick}
      type={type || 'button'}
      disabled={buttonState === 'disabled'}
      name={name}
    >
      {iconPosition === 'left' ? (
        <div className="d-flex">
          <div className="w-20 d-flex align-items-center">
            <img src={icon} alt="buttonIcon" className="buttonIcon" />
          </div>
          <div className="w-80">{children}</div>
        </div>
      ) : iconPosition === 'right' ? (
        <div className="d-flex">
          <div className="w-80">{children}</div>
          <div className="w-20 d-flex align-items-center ">
            <img src={icon} alt="buttonIcon" className="buttonIcon" />
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </button>
  );
};
