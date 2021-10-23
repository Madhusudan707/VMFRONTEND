import React, { useState, useEffect, useCallback } from 'react';

// context hook
import useUserDetails from '../../../../contexts/UserDetails/useUserDetails';

// components
import TitleWithImage from '../../../BasicComponents/TitleWithImage/TitleWithImage';
import Answers from '../Answers';
import Button from '../Button';
import ProgressHeader from '../ProgressHeader';
import WorkerName from '../WorkerName';

// interfaces
import { WMProps } from './interface';

// constants
import { TEXT } from '../../constants';

// hooks
import useWorkerName from '../../hooks/useWorkerName';
import useSaveQuestion from '../../hooks/useSaveQuestion';
// styles
import {
  ModalContainer,
  ModalHeader,
  Modal,
  TitleWithImageWrap,
} from './styles';

const WorkerModal: React.FC<WMProps> = ({ visible, onModalToggle }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<any>({
    list: [],
    answer: {},
  });
  const { onSaveQuestion, loading } = useSaveQuestion();
  const { name, ...rest } = useWorkerName();

  const { activeQuestion, isComplete, totalQuestions, totalAnsweredQuestions } =
    useUserDetails();

  const { fieldType, icon, image, question } = activeQuestion || {};

  const onSelectedAnswers = useCallback(
    (list, answer) => {
      setSelectedAnswers({ list, answer });
    },
    [selectedAnswers],
  );

  const onSkip = useCallback(() => {
    onModalToggle(false);
    setSelectedAnswers({ list: [], answer: {} });
  }, [visible]);

  const handleBack = useCallback((event: any) => {
    event.preventDefault();
    onSkip();
  }, []);

  useEffect(() => {
    if (visible) {
      window.history.pushState(null, document.title, window.location.href);
      window.addEventListener('popstate', handleBack);
    } else {
      window.removeEventListener('popstate', handleBack);
    }

    return () => {
      window.removeEventListener('popstate', handleBack);
    };
  }, [visible]);

  const handleOnClick = () => {
    const currentAns = selectedAnswers;
    setSelectedAnswers({ list: [], answer: {} });
    onSaveQuestion({
      answer: currentAns?.answer?.title,
      nextQuestionId: currentAns?.answer?.nextQuestionId,
    });
  };
  useEffect(() => {
    if (isComplete) {
      onModalToggle(false);
    }
  }, [isComplete]);

  const disabled =
    fieldType === TEXT ? !name.length : !selectedAnswers.list.length;

  return (
    <Modal visible={visible}>
      <ModalContainer>
        <ModalHeader>
          <ProgressHeader
            step={totalAnsweredQuestions}
            stepOf={totalQuestions}
            label="complete your profile"
            stepLabel="completed"
          />
          <TitleWithImageWrap>
            <TitleWithImage
              title={question?.question}
              highlightWords={question?.emphasisedWord}
              icon={icon}
              image={image}
            />
          </TitleWithImageWrap>
        </ModalHeader>
        <WorkerName name={name} {...rest} onModalToggle={onModalToggle} />
        <Answers
          show={fieldType !== TEXT}
          answers={question?.possibleAnswers}
          onSelectedAnswers={onSelectedAnswers}
          selectedAnswers={selectedAnswers}
          isModal
        />
        <Button
          show={fieldType !== TEXT}
          label="save"
          disabled={disabled}
          onClick={handleOnClick}
          isLoading={loading}
          isModal
        />
      </ModalContainer>
    </Modal>
  );
};

export default WorkerModal;
