import React from 'react';
import './exitBetween.scss';
import { Link } from 'react-router-dom';
import { Button, TypoGraphy, Modal } from '../../BasicComponents';
const ExitInBetween = () => {
  return (
    <Modal>
      <div className="d-flex flex-column align-items-center exit-modal-body">
        <div>☹️</div>
        <div className="exit-modal-text">
          <TypoGraphy variant="h4" classname="txt-primary fw-600">
            are you sure you want to close?
          </TypoGraphy>
          <TypoGraphy variant="h6" classname="fw-700 txt-fade">
            add more details to improve chances of Conversion
          </TypoGraphy>
        </div>
        <div className="d-flex justify-content-evenly w-100 align-items-center">
          <Link to="" className="w-50">
            <Button variant="flat-button" classes="w-100">
              CLOSE
            </Button>
          </Link>
          <Link to="" className="w-50">
            <Button variant="button-primary" classes=" btn w-100">
              CONTINUE
            </Button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ExitInBetween;
