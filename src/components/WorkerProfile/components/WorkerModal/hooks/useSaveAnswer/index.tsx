import useUserDetails from '../../../../../../contexts/UserDetails/useUserDetails';

import { MULTIPLE_SELECT } from '../../../../constants';
import { AProps } from '../../../Answers/interface';

type ReturnType = ({ index, answer }: { index: number; answer: any }) => void;

const useSaveAnswer = (props: AProps): ReturnType => {
  const {
    answers,
    isModal = false,
    onClick,
    onSelectedAnswers,
    selectedAnswers = [],
  } = props;
  const { setActiveQuestionIndex, activeQuestion } = useUserDetails();
  const allowMultiSelect = activeQuestion.fieldType === MULTIPLE_SELECT;
  const clearAllIndex = answers?.findIndex((ans: any) => ans?.clear);

  return ({ index, answer }: { index: number; answer: any }) => {
    if (allowMultiSelect && !answer?.clear) {
      const isExist = selectedAnswers?.list.includes(index);
      const uniqueIds = selectedAnswers?.list.filter(
        (id: number) => id !== index,
      );
      const removeClearAllAnswer = uniqueIds.filter(
        (id: number) => id !== clearAllIndex,
      );
      if (isExist && onSelectedAnswers) {
        const newtitle = uniqueIds
          .map((id: number) => answers[id].title)
          .join(',');

        onSelectedAnswers(uniqueIds, {
          ...answer,
          title: newtitle,
        });
      } else if (onSelectedAnswers) {
        const newtitle = [...removeClearAllAnswer, index]
          .map((id: number) => answers[id].title)
          .join(',');

        onSelectedAnswers([...removeClearAllAnswer, index], {
          ...answer,
          title: newtitle,
        });
      }
    } else {
      if (onSelectedAnswers) {
        onSelectedAnswers([index], answer);
      }
    }
    if (!allowMultiSelect && onSelectedAnswers) {
      onSelectedAnswers([index], answer);
    }

    if (isModal && onClick) {
      onClick(answer?.nextQuestionId);

      return;
    }

    if (!isModal) setActiveQuestionIndex((prevCount: number) => prevCount + 1);
  };
};

export default useSaveAnswer;
