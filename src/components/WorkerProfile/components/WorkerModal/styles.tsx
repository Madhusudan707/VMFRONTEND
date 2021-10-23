import styled from 'styled-components';
import WorkerModal from '../../../../components/BasicComponents/ShowHideModal/Modal';

export const ModalContainer = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px 10px 20px;
`;

export const ModalHeader = styled.div``;

export const Icon = styled.img`
  width: 40px;
  margin-left: 30px;
`;

export const Modal = styled(WorkerModal)`
  max-height: 90%;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleWithImageWrap = styled.div`
  margin: 15px 0 10px 0;
`;
