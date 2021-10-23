import React from 'react';
import { TypoGraphy, Button, Modal } from '../../BasicComponents';

interface CandidateAlreadyExistProps {
  mobile: string;
  isCandidate: boolean;
}
export const CandidateAlreadyExist = ({
  mobile = '1234567890',
  isCandidate = false,
}: CandidateAlreadyExistProps) => {
  return (
    <Modal>
      <div className="d-flex flex-column align-items-center">
        <span>😕</span>
        <TypoGraphy variant="h3" classname="txt-red fw-800">
          {mobile}
        </TypoGraphy>
        <TypoGraphy variant="h3" classname="txt-primary fw-800">
          Candidate already exist
        </TypoGraphy>
        <TypoGraphy variant="h4" classname="txt-primary fw-800">
          Candidate with this mobile number <br />
          already exists in our system
        </TypoGraphy>
        <div>
          <Button variant="button-primary">OKAY</Button>
        </div>
      </div>
    </Modal>
  );
};
