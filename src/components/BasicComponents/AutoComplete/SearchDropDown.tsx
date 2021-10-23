import React, { useState } from 'react';
import DownArrow from '../../../assets/icons/DownArrow.svg';
import BackArrow from '../../../assets/icons/back.svg';
import { TypoGraphy } from '..';
import { useModalClose } from '../../../contexts';
import { AutoComplete } from './AutoComplete';
import { Link } from 'react-router-dom';
import './searchDropdown.scss';
export const SearchDropDown: any = ({
  dropdownIcon,
  children,
  data,
  invalid,
  helpText,
  modalHeader,
  name,
  handleOptionChange,
}: any) => {
  const { searchModalClose, setSearchModalClose } = useModalClose();
  // state for dropdown selected.

  const clickHandler = () => {
    setSearchModalClose(true);
  };
  const closeHandler = () => {
    setSearchModalClose(false);
  };

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
      {searchModalClose && (
        <div id="myModal" className="modal-i">
          <div className="modal-i-content">
            <div className="modal-i-header">
              <Link to="#" onClick={closeHandler}>
                <img src={BackArrow} alt="back-arrow" />
              </Link>
            </div>
            <div
              className="autocomplete-modal-i-body"
              style={{ overflow: 'hidden' }}
            >
              <AutoComplete />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
