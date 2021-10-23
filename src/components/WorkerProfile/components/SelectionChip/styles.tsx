import styled from 'styled-components';

type ChipType = {
  isSelected: boolean;
  isModal: boolean;
};

export const Container = styled.div`
  position: relative;
`;

export const Chip = styled.div<ChipType>`
  min-height: ${({ isModal }) => `${isModal ? 9 : 6}rem`};
  display: flex;
  flex-direction: column;
  border-radius: 0.438rem;
  padding: 1rem;
  justify-content: center;
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 2px 11px #deebff;
  border: 1px solid #a6bce0;
  align-items: center;
  ${({ isSelected }) =>
    isSelected &&
    `
  background: linear-gradient(
      180deg,
      #fbfcff 0%,
      rgba(232, 238, 255, 1) 100%
    );
    border: 3px solid #2d9cdb;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(216, 226, 255, 0.25);
    border-radius: 8px;
    span {
        color: #324e7e;
    }
    `}
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #324e7e;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.688rem;
  justify-content: center;
  text-align: center;
`;

export const SubTitle = styled.div`
  color: #979eb5;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;
