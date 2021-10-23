export const getLanguageBasedQuestions = (
  questions: any[],
  lang = 'en',
): any => {
  if (!questions) return [];

  return questions?.map((item: any) => {
    return {
      ...item,
      question: item.question[lang],
    };
  });
};
