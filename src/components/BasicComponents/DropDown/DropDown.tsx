import React, { useState } from 'react';
import DownArrow from '../../../assets/icons/DownArrow.svg';
import { TypoGraphy } from '../index';
import ModalItems from './ModalItems';
import { useModalClose } from '../../../contexts';
import './dropdown.scss';

interface DropdownProps {
  dropdownIcon: string;
  children: React.ReactNode;
  data: Array<Record<string, unknown>>;
  invalid?: boolean;
  helpText?: string;
  modalHeader: string;
  name: string;
  handleOptionChange: any;
}
export const DropDown: React.FC<DropdownProps> = ({
  dropdownIcon,
  children,
  data,
  invalid,
  helpText,
  modalHeader,
  name,
  handleOptionChange,
}: DropdownProps) => {
  const { modalClose, setModalClose } = useModalClose();
  // state for dropdown selected.

  // const [openModal, setOpenModal] = useState(false);
  // const clickHandler = () => {
  //   setOpenModal(!openModal);
  // };
  // const closeHandler = () => {
  //   setOpenModal(!openModal);
  // };
  const clickHandler = () => {
    setModalClose(true);
  };
  const closeHandler = () => {
    setModalClose(false);
  };
  const options = Object.entries(data).map((item: any) => (
    <ModalItems
      ItemId={item[1].id}
      ItemLabel={item[1].name}
      ItemName={name}
      ItemValue={item[1].id}
      ItemIcon={item[1].icon}
      handleOptionChange={(e: any) => handleOptionChange(e)}
      // handleOptionChange={closeHandler}
    />
  ));

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center dropdown form-control"
        onClick={clickHandler}
      >
        <div>
          <div className="d-flex">
            <img src={dropdownIcon} alt="" />
            <TypoGraphy variant="body1" classname="dropdown-text">
              {children}
            </TypoGraphy>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img src={DownArrow} alt="" />
        </div>
      </div>
      {helpText && (
        <p
          className={
            'fw-600 typography--variant-body2 mb-20 ' +
            (invalid ? 'error-text' : '')
          }
        >
          {helpText}
        </p>
      )}
      {modalClose && (
        <div id="myModal" className="modal-i">
          <div className="modal-i-content">
            <div className="modal-i-header">
              <div className="d-flex w-90 align-items-center">
                <img className="modal-header-icon" src={dropdownIcon} alt="" />
                <TypoGraphy
                  variant="body1"
                  classname="txt-primary fw-500 modal-header-text"
                >
                  {modalHeader}
                </TypoGraphy>
              </div>
              <div className="w-10 d-flex justify-content-end">
                {/* eslint-disable-next-line */}
                <span onClick={closeHandler} className="close">
                  &times;
                </span>
              </div>
            </div>
            <div className="modal-i-body">{options}</div>
          </div>
        </div>
      )}
    </>
  );
};
