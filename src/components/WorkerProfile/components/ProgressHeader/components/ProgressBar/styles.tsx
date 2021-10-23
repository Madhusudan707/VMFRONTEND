import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

export const Bar = styled('div')<{ isComplete: boolean }>`
  width: 18px;
  height: 6px;
  border-radius: 45px;
  background: ${({ isComplete }) => (isComplete ? '#91D18B' : '#eaeefa')};
`;

export const Fill = styled('div')<{ isComplete: boolean; isHalfBar: boolean }>`
  height: 100%;
  border-radius: 45px;
  ${({ isHalfBar, isComplete }) => {
    const width = isHalfBar ? '100%' : '50%';
    const display = isComplete || isHalfBar ? 'none' : 'block';
    const background = isHalfBar ? '#91D18B' : '#979EB5';

    return `
       width: ${width};
       display: ${display};
       background: ${background};
    `;
  }}
`;
