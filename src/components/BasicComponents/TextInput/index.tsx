import React, { useState } from 'react';

// context hook
import useUserDetails from '../../../contexts/UserDetails/useUserDetails';

// icons
import Clear from '../../../assets/icons/addImage.png';

// interfaces
import { TIProps } from './interface';

// styles
import { Wrapper, Input, Label, Sup, ClearIcon, Error } from './styles';
const TextInput: React.FC<TIProps> = (props) => {
  const {
    value,
    placeholder = '',
    label = '',
    required = false,
    onClear,
    onFocus,
    onChange,
    error,
    errorMessage,
  } = props;
  const [isFocus, setIsFocus] = useState(false);
  const { onInputFocus } = useUserDetails();
  const isInputFocus = !!value?.length || isFocus;
  const inputProps = {
    value,
    onChange,
    onFocus: () => {
      setIsFocus(true);
      onInputFocus(true);
      if (onFocus) onFocus(true);
    },
    onBlur: () => {
      onInputFocus(false);
      if (!value?.length) setIsFocus(false);
      if (!value?.length && onFocus) onFocus(false);
    },
    isFocus: isInputFocus,
  };

  const clearIconProps = {
    src: Clear,
    alt: 'clear icon',
  };

  const handleOnClear = () => {
    onClear();
    setIsFocus(false);
    if (onFocus) onFocus(false);
  };

  const showLabel = (
    <Label isFocus={isInputFocus}>
      {isInputFocus ? label : placeholder}
      {required && <Sup>*</Sup>}
    </Label>
  );

  const clearIcon = isFocus && (
    <ClearIcon {...clearIconProps} onClick={handleOnClear} />
  );

  return (
    <>
      <Wrapper isFocus={isInputFocus} error={error}>
        <Input {...inputProps} />
        {showLabel}
        {clearIcon}
      </Wrapper>
      {error && <Error>{errorMessage}</Error>}
    </>
  );
};

export default TextInput;
