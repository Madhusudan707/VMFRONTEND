import React, { useState, useCallback, useEffect } from 'react';

// context hook
import useUserDetails from '../../../../contexts/UserDetails/useUserDetails';

// components
import Button from '../Button';
import TextInput from '../../../../components/BasicComponents/TextInput';

// constants
import { TEXT } from '../../constants';

// interfaces
import { WNProps } from './interface';

// hooks
import useSaveQuestion from '../../hooks/useSaveQuestion';

// styles
import { InputWrap } from './styles';

const FULL_NAME_REGEX =
  /^\b(?!.*?\s{2})[A-Za-z ]{1,30}\b$|^(?!.*?\s{2})[\u0900-\u097F ]{1,30}$/;

const WorkerName: React.FC<WNProps> = (props) => {
  const { name, onClear, onChange, isFocus, onFocus } = props;
  const [hasError, setHasError] = useState(false);
  const { onSaveQuestion, loading } = useSaveQuestion();
  const { activeQuestion } = useUserDetails();
  const { fieldType, question, nextQuestionId } = activeQuestion || {};

  const disabled = !name.length;

  useEffect(() => {
    if (!isFocus) setHasError(false);
  }, [isFocus]);

  const onClick = useCallback(() => {
    if (!FULL_NAME_REGEX.test(name)) {
      setHasError(true);

      return;
    }

    setHasError(false);
    onSaveQuestion({ answer: name, nextQuestionId });
  }, [name]);

  const inputName = (
    <InputWrap>
      <TextInput
        value={name}
        placeholder={question?.placeholder}
        label={question?.label}
        isFocus={isFocus}
        onClear={onClear}
        onChange={onChange}
        onFocus={onFocus}
        error={hasError}
        errorMessage="enter a valid name"
      />
    </InputWrap>
  );

  const saveButton = (
    <Button
      label="save"
      disabled={disabled}
      onClick={onClick}
      isLoading={loading}
    />
  );

  if (fieldType !== TEXT) return null;

  return (
    <>
      {inputName}
      {saveButton}
    </>
  );
};

export default WorkerName;
