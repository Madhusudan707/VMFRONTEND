import gql from 'graphql-tag';

const GET_CANDIDATE_QUESTIONS = gql`
  query GetCandidateQuestion($candidateId: Int!) {
    getCandidateQuestion(candidateId: $candidateId) {
      id
      type
      fieldType
      rank
      image
      icon
      columnName
      nextQuestionId
      answer
      sectors
      question {
        en {
          question
          possibleAnswers {
            title
            subTitle
            nextQuestionId
          }
          emphasisedWord
          label
          placeholder
        }
        hi {
          question
          possibleAnswers {
            title
            subTitle
            nextQuestionId
          }
          emphasisedWord
          label
          placeholder
        }
        he {
          question
          possibleAnswers {
            title
            subTitle
            nextQuestionId
          }
          emphasisedWord
          label
          placeholder
        }
      }
    }
  }
`;

const SAVE_CANDIDATE_QUESTION = gql`
  mutation SaveCandidateQuestionAnswer(
    $candidateQuestionData: SaveCandidateQuestion!
  ) {
    saveCandidateQuestionAnswer(candidateQuestionData: $candidateQuestionData)
  }
`;

const GET_CANDIDATE_UNANSWERED_QUESTIONS = gql`
  query GetCandidateUnAnsweredQuestion($candidateId: Int!) {
    getCandidateUnAnsweredQuestion(candidateId: $candidateId) {
      totalQuestions
      totalAnsweredQuestions
      questionsByCategory
    }
  }
`;

export {
  GET_CANDIDATE_QUESTIONS,
  SAVE_CANDIDATE_QUESTION,
  GET_CANDIDATE_UNANSWERED_QUESTIONS,
};
