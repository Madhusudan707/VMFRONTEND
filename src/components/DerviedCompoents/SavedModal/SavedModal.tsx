import React from 'react';
import RupeeGroup from '../../../assets/icons/RupeeGroup.svg';
import { Link } from 'react-router-dom';
import './SavedModal.scss';
import { Button, TypoGraphy, Modal } from '../../BasicComponents';
const SavedModal = () => {
  return (
    <Modal>
      <div className="d-flex flex-column align-items-center saved-modal-body">
        <div className="w-100 text-center rupee-icon-container">
          <img src={RupeeGroup} alt="" />
        </div>
        <div className="saved-modal-text">
          <TypoGraphy variant="h4" classname="txt-primary fw-600">
            good work mitr 👍
          </TypoGraphy>
          <TypoGraphy variant="h6" classname="txt-fade fw-600">
            candidate detiails are saved succesfully
          </TypoGraphy>
        </div>
        <div className="d-flex justify-content-evenly w-100 align-items-center">
          <Link to="/" className="w-50">
            <Button variant="flat-button" classes="w-100">
              BACK HOME
            </Button>
          </Link>
          <Link to="/addcandidate" className="w-50">
            <Button variant="button-primary" classes=" btn w-100">
              ADD ANOTHER
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SavedModal;
