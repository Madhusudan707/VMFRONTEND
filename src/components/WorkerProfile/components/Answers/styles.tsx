import styled from 'styled-components';

type AnswerChipWrapperType = {
  isFullWidth: boolean;
};

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  max-height: 52vh;
  overflow: hidden auto;
  width: 100%;
  margin-top: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const AnswerChipWrapper = styled.div<AnswerChipWrapperType>`
  grid-column: ${({ isFullWidth }) => isFullWidth && '1 / span 2'};
`;
