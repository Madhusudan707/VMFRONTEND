import React from 'react';
import { HowItWorks, Screen, Button } from '../../components/BasicComponents';
import CurveRight from '../../assets/icons/curve_right.svg';
import CurveLeft from '../../assets/icons/curve_left.svg';
import { Link, useLocation } from 'react-router-dom';
import './Onboarding.scss';

export const OnBoarding: React.FC = () => {
  const location = useLocation();
  const { prevPath }: any = location.state;
  const hiw = [
    {
      id: '1',
      heading: 'you refer candidates',
      paragraph:
        'spread the new of job opening in you network and pass on the interested candidates to us',
    },
    {
      id: '2',
      heading: 'we get them job',
      paragraph:
        'we will ensure that candidates are properly placed with trusted employers of their choice',
    },
    {
      id: '3',
      heading: 'you get paid',
      paragraph:
        'this service is free for your candidates while you stand to earn handsome return for every candidates that joins',
    },
  ];

  return (
    <Screen classes="d-flex justify-content-between flex-column">
      <div className="onboarding d-flex flex-column">
        <img
          src={CurveRight}
          alt="curve right"
          className="curve-right position-absolute"
        />
        <img
          src={CurveLeft}
          alt="curve left"
          className="curve-left position-absolute"
        />
        {hiw.map(({ id, heading, paragraph }) => {
          return (
            <HowItWorks
              key={id}
              num={id}
              heading={heading}
              paragraph={paragraph}
            />
          );
        })}
      </div>
      <Link to={prevPath}>
        <Button variant="button-primary" classes="btn mt-4">
          NEXT
        </Button>
      </Link>
    </Screen>
  );
};
