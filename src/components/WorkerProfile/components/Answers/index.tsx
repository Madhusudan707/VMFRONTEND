import React, { useEffect } from 'react';

// context hook
import useUserDetails from '../../../../contexts/UserDetails/useUserDetails';

// components
import SelectionChip from '../SelectionChip';

// helpers
import { getLayout } from '../../helpers/layout';

// hooks
import useSaveAnswer from '../WorkerModal/hooks/useSaveAnswer';

// interfaces
import { AProps } from './interface';

// styles
import { AnswerChipWrapper, Container } from './styles';
import useSaveQuestion from '../../hooks/useSaveQuestion';

const Answers: React.FC<AProps> = (props) => {
  const {
    show,
    answers,
    isModal = false,
    selectedAnswers = [],
    onSelectedAnswers,
  } = props;
  const { activeQuestion } = useUserDetails();
  const { question, nextQuestionId } = activeQuestion || {};

  const handleOnClick = useSaveAnswer(props);
  const { onSaveQuestion, loading } = useSaveQuestion();

  const noOfAnswers = question?.possibleAnswers?.length;
  const showChips = noOfAnswers === 2;
  const allowMultiSelect = answers?.some((ans: any) => ans?.clear);

  useEffect(() => {
    onSelectedAnswers([], {});
  }, [activeQuestion]);

  const onProfileWidgetClick = (answer: any, index: number) => {
    if (loading) return;
    if (showChips && !isModal) {
      onSaveQuestion({
        answer: answer?.title,
        nextQuestionId: nextQuestionId || answer?.nextQuestionId,
      });
      onSelectedAnswers([index], answer);

      return;
    }
    const selectedAns = { ...answer };
    if (!selectedAns.nextQuestionId) {
      selectedAns.nextQuestionId = nextQuestionId;
    }
    handleOnClick({ index, answer: selectedAns });
  };

  if (!show) return null;

  const renderAnswers = answers?.map((answer: any, index: number) => {
    return (
      <AnswerChipWrapper
        key={activeQuestion.id + answer?.title}
        isFullWidth={getLayout(
          noOfAnswers,
          index,
          showChips,
          isModal,
          allowMultiSelect,
        )}
        onClick={() => onProfileWidgetClick(answer, index)}
        aria-hidden="true"
      >
        <SelectionChip
          title={answer?.title}
          subTitle={answer?.subTitle}
          isSelected={selectedAnswers?.list?.includes(index)}
          isModal={isModal}
          loading={loading && selectedAnswers?.list?.includes(index)}
        />
      </AnswerChipWrapper>
    );
  });

  return <Container>{renderAnswers}</Container>;
};

export default Answers;
