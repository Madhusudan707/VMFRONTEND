import React from 'react';
import { TypoGraphy } from '..';
import './Modal.scss';
interface ModalProps {
  closeHandler?: () => void;
  modalHeaderIcon?: string;
  modalHeader?: string;
  children: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({
  closeHandler,
  modalHeaderIcon,
  modalHeader,
  children,
}: ModalProps) => {
  return (
    <div>
      <div id="myModal" className="modal-i">
        <div className="modal-i-content">
          <div className="modal-i-header">
            <div>
              <img src={modalHeaderIcon} alt="" />
              <TypoGraphy variant="body1" classname="txt-primary mb-20">
                {modalHeader}
              </TypoGraphy>
            </div>
            <div>
              <span onClick={closeHandler} className="close">
                &times;
              </span>
            </div>
          </div>
          <div className="modal-i-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
