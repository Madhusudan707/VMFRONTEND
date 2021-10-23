import styled from 'styled-components';

const noFocusAndPlaceholer = `
    &::placeholder {
      color: none;
    }
    &:focus {
      outline: none;
    }
`;

const animationSpeed = 'transition: 0.3s ease all';

type TextInputType = {
  isFocus: boolean;
};

type WrapperType = {
  isFocus: boolean;
  error?: boolean;
};

export const Wrapper = styled.div<WrapperType>`
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  padding-left: 20px;
  height: 64px;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;
  border: ${({ isFocus, error }) => {
    const color = isFocus && error ? '#f44336' : '#91d18b';

    return `${isFocus ? 2 : 1}px solid ${color}`;
  }};
`;

export const Input = styled.input<TextInputType>`
  width: 85%;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  font-weight: bold;
  color: #324e7e;
  padding: 0;
  border: none;
  margin-left: 0;
  margin-top: ${({ isFocus }) => `${isFocus ? 10 : 0}px`};
  ${animationSpeed};
  ${noFocusAndPlaceholer}
`;

export const Label = styled.label<TextInputType>`
  color: #979eb5;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 45%;
  transform: translateY(-45%);
  ${animationSpeed};
  ${({ isFocus }) =>
    isFocus &&
    `
        top: 20%;
        left: 20px;
        font-size: 14px;
    `}
`;

export const Sup = styled.span`
  color: #de6645;
`;

export const ClearIcon = styled.img`
  position: absolute;
  right: 15px;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%) rotate(45deg);
  height: 2rem;
  width: 2rem;
  ${animationSpeed};
`;

export const Error = styled.span`
  margin: 6px;
  color: #f44336;
  font-size: 14px;
`;
