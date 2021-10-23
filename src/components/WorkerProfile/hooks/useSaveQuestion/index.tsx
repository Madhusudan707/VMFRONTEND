import { useMutation } from '@apollo/client';

// context hook
import useUserDetails from '../../../../contexts/UserDetails/useUserDetails';

// questions query
import { SAVE_CANDIDATE_QUESTION } from '../../../../services/graphql/queries/candidateQuestions';
// events, error logs
type OnSaveQuestion = {
  answer: any;
  nextQuestionId?: number;
};
let updateProfile = false;

const useSaveQuestion = (): {
  onSaveQuestion: ({ answer, nextQuestionId }: OnSaveQuestion) => void;
  loading: boolean;
} => {
  // hooks
  const {
    activeQuestion,
    activeQuestionIndex,
    questions,
    checkAndUpdateNextQuestion,
    sectorInProgress,
    candidateId,
  } = useUserDetails();
  const questionId = activeQuestion?.id;

  const [onSave, { loading }] = useMutation(SAVE_CANDIDATE_QUESTION, {
    onCompleted: () => {
      if (updateProfile) {
        updateProfile = false;
      }
    },
  });

  const getDummyPayload = (currentQuestion: number, nextQuestion: number) => {
    let currentQuestionIndex = currentQuestion;
    const payloadList = [];
    while (currentQuestionIndex < nextQuestion) {
      const dummyPayload = {
        questionId: questions[currentQuestionIndex].id,
        answer: 'NA',
        nextQuestionId: undefined,
      };
      payloadList.push(dummyPayload);
      currentQuestionIndex += 1;
    }

    return payloadList;
  };

  const onSaveQuestion = ({ answer, nextQuestionId }: OnSaveQuestion) => {
    const payload = {
      questionId,
      answer,
      nextQuestionId,
    };
    let payloadList = [payload];
    const nextQuestionIndex = questions.findIndex(
      (item) => item.id === nextQuestionId,
    );

    if (nextQuestionIndex && activeQuestionIndex < nextQuestionIndex) {
      const currentQuestion = activeQuestionIndex + 1;
      payloadList = [payload].concat(
        getDummyPayload(currentQuestion, nextQuestionIndex),
      );
    } else if (
      (nextQuestionId && nextQuestionIndex === -1) ||
      !nextQuestionId
    ) {
      if (nextQuestionId && nextQuestionIndex === -1) {
        const error = new Error(
          `Question id: ${nextQuestionId}, not found in the list`,
        );
      }

      const currentQuestion = activeQuestionIndex + 1;
      payloadList = [payload].concat(
        getDummyPayload(currentQuestion, questions.length),
      );
    }
    if (
      sectorInProgress === 'BASIC' &&
      questions[activeQuestionIndex]?.columnName === 'name'
    ) {
      updateProfile = true;
    }
    onSave({
      variables: {
        candidateQuestionData: {
          candidateId: candidateId,
          questionData: payloadList,
        },
      },
    });
    checkAndUpdateNextQuestion(nextQuestionId || null);
  };

  return { onSaveQuestion, loading };
};

export default useSaveQuestion;
