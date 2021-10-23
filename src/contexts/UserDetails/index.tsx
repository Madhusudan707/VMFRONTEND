import React, { useState, useEffect, createContext, useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';

// graphQL query
import { GET_CANDIDATE_UNANSWERED_QUESTIONS } from '../../services/graphql/queries/candidateQuestions';

// interfaces
import { UserContext } from './interface';

// helpers
import { getLanguageBasedQuestions } from './helpers/questions';
export const UserDetailsContext = createContext<UserContext>({
  data: [],
  questions: [],
  activeQuestionIndex: 1,
  isComplete: false,
  isInputFocus: false,
  activeQuestion: {},
  workerProfileReady: false,
  candidateId: 0,
  setIsComplete: () => {
    // This is intentional
  },
  setActiveQuestionIndex: () => {
    // This is intentional
  },
  setIsInputFocus: () => {
    // This is intentional
  },
  onInputFocus: () => {
    // This is intentional
  },
  refreshQuestions: () => {
    // This is intentional
  },
  setCandidateId: () => {
    // This is intentional
  },
  sectorInProgress: null,
  checkAndUpdateNextQuestion: () => {
    // This is intentional
  },
  totalQuestions: 1,
  totalAnsweredQuestions: 1,
  setSectorSpecificQuestionsOnly: () => {
    // This is intentional
  },
});

const UserDetailsProvider: React.FC = (props) => {
  // local state
  const [questions, setQuestions] = useState<any[]>([]);
  const [activeQuestion, setActiveQuestion] = useState<any>({});
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [refreshQuestionsList, setRefreshQuestionsList] =
    useState<boolean>(false);
  const [currentSector, setCurrentSector] = useState<string | null>(null);
  const [midFlow, setMidFlow] = useState<boolean>(false);
  const [totalQuestions, setTotalQuestions] = useState<number>(1);
  const [totalAnsweredQuestions, setTotalAnsweredQuestions] =
    useState<number>(0);
  const [isSectorSpecificQuestionsOnly, setIsSectorSpecificQuestionsOnly] =
    useState<number | null>(null);
  const [candidateId, changeCandidateId] = useState<number>(0);
  const [data, setData] = useState<any>();

  const [workerProfileReady, setWorkerProfileReady] = useState<boolean>(false);

  // query
  const [refetch] = useLazyQuery(GET_CANDIDATE_UNANSWERED_QUESTIONS, {
    variables: { candidateId: Number(candidateId) },
    fetchPolicy: 'no-cache',
    onCompleted: (response) => {
      if (response) {
        setData(response);
        setWorkerProfileReady(true);
      }
    },
  });

  const refreshQuestions = useCallback(() => {
    setRefreshQuestionsList(true);
  }, []);

  const setCandidateId = (id: number) => {
    setWorkerProfileReady(false);
    changeCandidateId(id);
    refreshQuestions();
  };

  useEffect(() => {
    if (candidateId || refreshQuestionsList) {
      const questObj =
        data?.getCandidateUnAnsweredQuestion?.questionsByCategory || {};
      if (
        !data ||
        Object.keys(questObj).length > 0 ||
        (!midFlow && !Object.keys(questObj).length)
      ) {
        setActiveQuestionIndex(0);
        refetch();
      } else if (midFlow && !Object.keys(questObj).length) {
        setIsComplete(true);
      }
      setRefreshQuestionsList(false);
    }
  }, [refreshQuestionsList, candidateId]);

  const onInputFocus = useCallback((val) => setIsInputFocus(val), []);

  useEffect(() => {
    let questObj = {};
    if (data?.getCandidateUnAnsweredQuestion?.questionsByCategory) {
      setTotalQuestions(data?.getCandidateUnAnsweredQuestion?.totalQuestions);
      setTotalAnsweredQuestions(
        data?.getCandidateUnAnsweredQuestion?.totalAnsweredQuestions,
      );
      questObj = data?.getCandidateUnAnsweredQuestion?.questionsByCategory;

      if (!midFlow) {
        setMidFlow(Object.keys(questObj).length > 0);
      }

      if (Object.keys(questObj).length) {
        if (Object.keys(questObj).includes('BASIC')) {
          setCurrentSector('BASIC');
        } else if (
          isSectorSpecificQuestionsOnly &&
          Object.keys(questObj).includes(
            isSectorSpecificQuestionsOnly.toString(),
          )
        ) {
          setCurrentSector(isSectorSpecificQuestionsOnly.toString());
        } else {
          setCurrentSector(Object.keys(questObj)[0]);
        }
      }

      if (!Object.keys(questObj).length) {
        setIsComplete(true);
        setWorkerProfileReady(false);
      } else {
        setIsComplete(false);
      }
    }
  }, [data, isSectorSpecificQuestionsOnly]);
  useEffect(() => {
    if (currentSector) {
      const questionEntity = getLanguageBasedQuestions(
        data?.getCandidateUnAnsweredQuestion?.questionsByCategory[
          currentSector
        ],
        'en',
      );
      setTotalQuestions(data?.getCandidateUnAnsweredQuestion?.totalQuestions);
      setTotalAnsweredQuestions(
        data?.getCandidateUnAnsweredQuestion?.totalAnsweredQuestions,
      );
      if (questionEntity?.length) setActiveQuestion(questionEntity[0]);
      setQuestions(questionEntity);
    }
  }, [data, currentSector]);

  const setSectorSpecificQuestionsOnly = (sector: number | null) => {
    if (sector && sector.toString().length) {
      setIsSectorSpecificQuestionsOnly(sector);
    } else {
      setIsSectorSpecificQuestionsOnly(null);
    }
  };

  const checkAndUpdateNextQuestion = (quesId: number | null) => {
    const nextQuestionIndex = questions.findIndex((item) => item.id === quesId);
    const updatedQuestions = [...questions];
    const updateTotalAnsweredQuestions = totalAnsweredQuestions + 1;
    if (
      nextQuestionIndex &&
      activeQuestionIndex < nextQuestionIndex &&
      questions[nextQuestionIndex] &&
      !questions[nextQuestionIndex].answer
    ) {
      let currentQuestion = activeQuestionIndex + 1;
      while (currentQuestion < nextQuestionIndex) {
        updatedQuestions[currentQuestion].answer = 'NA';
        currentQuestion += 1;
      }
      setQuestions(updatedQuestions);

      setTotalAnsweredQuestions(updateTotalAnsweredQuestions);
      setActiveQuestion(questions[nextQuestionIndex]);
      setActiveQuestionIndex(nextQuestionIndex);
    } else {
      setCurrentSector(null);
      setTimeout(() => {
        setRefreshQuestionsList(true);
      }, 1000);
    }
  };
  const value = {
    data: data?.getCandidateUnAnsweredQuestion?.questionsByCategory,
    questions,
    isComplete,
    isInputFocus,
    onInputFocus,
    activeQuestion,
    setIsComplete,
    setIsInputFocus,
    activeQuestionIndex,
    setActiveQuestionIndex,
    refreshQuestions,
    sectorInProgress: currentSector,
    checkAndUpdateNextQuestion,
    totalQuestions,
    totalAnsweredQuestions,
    setSectorSpecificQuestionsOnly,
    setCandidateId,
    workerProfileReady,
    candidateId,
  };

  return <UserDetailsContext.Provider value={value} {...props} />;
};

export default UserDetailsProvider;
