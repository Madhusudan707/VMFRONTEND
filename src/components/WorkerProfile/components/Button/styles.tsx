import styled from 'styled-components';

type ButtonType = {
  disabled: boolean;
  isModal: boolean;
};

const iconStyle = `
  span {
    color: white;
    font-size: 16px;
    font-family: inherit;
  }
  svg {
    position: absolute;
    right: 20px;
    width: 2.2rem;
    height: 2.2rem;
    path {
      fill: #ffffff;
    }
  }
`;

export const Btn = styled.div<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #91d18b;
  border-radius: 8px;
  width: 100%;
  color: #ffffff;
  border: none;
  position: relative;
  ${({ disabled, isModal }) => {
    const opacity = disabled ? 0.5 : 1;
    const height = `${isModal ? 5 : 6.5}rem`;
    const margin = `${isModal ? 20 : 0}px 0 ${isModal ? 10 : 0}px 0`;

    return `
      height: ${height};
      opacity: ${opacity};
      margin: ${margin};
    `;
  }}
  ${iconStyle}
  span {
    color: white;
    font-family: inherit;
    font-weight: bold;
    font-size: 18px;
  }
`;
