import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  margin-bottom: 10px;
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #979eb5;
  text-align: left;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Icon = styled.img`
  width: 40px;
  margin-left: 30px;
`;
