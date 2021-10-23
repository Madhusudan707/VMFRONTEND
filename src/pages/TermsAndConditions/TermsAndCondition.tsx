import React from 'react';
import Back from '../../assets/icons/back.svg';
import { TypoGraphy, Button } from '../../components/BasicComponents';
import './termsAndConditions.scss';
import Tabs from '../../components/BasicComponents/Tabs/Tabs';
import Terms from '../../components/BasicComponents/TermsAndConditions/Terms';
import Policy from '../../components/BasicComponents/TermsAndConditions/policy';
import { Screen } from '../../components/BasicComponents';
import { Link } from 'react-router-dom';

export const TermsAndCondition: React.FC = () => {
  const tabs = [
    {
      label: 'Terms of service',
      component: <Terms />,
    },
    {
      label: 'Privacy Policy',
      component: <Policy />,
    },
  ];

  return (
    <div>
      <div className="terms-and-conditions-header d-flex">
        <Link to="/registration/abc/abc">
          <img src={Back} alt="back" className="back-button" />
        </Link>

        <TypoGraphy
          variant="body1"
          classname="fw-600 txt-primary terms-and-conditions-heading"
        >
          Terms And Conditions
        </TypoGraphy>
      </div>
      <Tabs tabs={tabs} classes="tabs-content" />
    </div>
  );
};
