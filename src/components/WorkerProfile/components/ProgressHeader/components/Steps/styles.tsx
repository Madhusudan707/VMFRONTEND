import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 8px;
  line-height: 12px;
  color: #91d18b;
  margin-top: 4px;
`;

type Steps = {
  isComplete: boolean;
};

export const Step = styled.div<Steps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isComplete }) => (isComplete ? '#91d18b' : '#ffffff')};
  color: ${({ isComplete }) => (isComplete ? '#ffffff' : '#324E7E')};
  border: 1px solid #91d18b;
  border-radius: 7px;
  padding: 5px 0px;
  min-width: 50px;
  min-height: 20px;
`;
