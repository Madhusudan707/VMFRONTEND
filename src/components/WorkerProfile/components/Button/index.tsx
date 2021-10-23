import React from 'react';
import Spinner from '../../../BasicComponents/Spinner/Spinner';

// context hook
import useUserDetails from '../../../../contexts/UserDetails/useUserDetails';

// icons
import { ArrowRightSquareBold } from '../../../../assets/Arrow';

// interfaces
import { BProps } from './interface';

// styles
import { Btn } from './styles';

const Button: React.FC<BProps> = ({
  onClick,
  disabled,
  label,
  show = true,
  isModal = false,
  isLoading = false,
}) => {
  const { isInputFocus } = useUserDetails();
  const buttonProps = {
    disabled,
    onClick: disabled ? () => {} : onClick,
    isModal,
    isInputFocus,
  };

  if (!show) return null;

  const spinner = <Spinner variant="primary" />;

  const content = (
    <>
      <span>{label}</span>
      <ArrowRightSquareBold />
    </>
  );

  return <Btn {...buttonProps}>{isLoading ? spinner : content}</Btn>;
};

export default Button;
