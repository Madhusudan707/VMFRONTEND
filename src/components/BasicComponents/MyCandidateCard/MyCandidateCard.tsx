import React from 'react';
import { UserImg } from '..';
import Mobile from '../../../assets/icons/call.svg';
import RightArrow from '../../../assets/icons/right_arrow.svg';
import './mycandidatecard.scss';

export const MyCandidateCard = () => {
  return (
    <div className="my-candidate-card d-flex">
      <div className="user-img">
        <UserImg icon="userimg.svg" />
      </div>
      <div className="user-info">
        <span className="user-name">nikunj ladani</span>
        <span className="user-contact">7666448566</span>
        <span className="user-gender-age">male, 18-25 years,</span>
        <span className="user-interest">interested in apparel/textile</span>
      </div>
      <div className="dialer">
        <img src={Mobile} alt="mobile" />
      </div>
      <div className="right-arrow">
        <img src={RightArrow} alt="right arrow" />
      </div>
    </div>
  );
};
