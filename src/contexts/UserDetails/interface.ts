import React from 'react';

export interface UserContext {
  data: any;
  questions: any[];
  activeQuestion: any;
  isComplete: boolean;
  isInputFocus: boolean;
  activeQuestionIndex: number;
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveQuestionIndex: (val: any) => any;
  setIsInputFocus: React.Dispatch<React.SetStateAction<boolean>>;
  onInputFocus: (value: boolean | (() => boolean)) => void;
  refreshQuestions: () => void;
  sectorInProgress: string | null;
  checkAndUpdateNextQuestion: (quesId: number | null) => void;
  totalQuestions: number;
  totalAnsweredQuestions: number;
  setSectorSpecificQuestionsOnly: (sector: number | null) => void;
  setCandidateId: (id: number) => any;
  workerProfileReady: boolean;
  candidateId: number;
}
