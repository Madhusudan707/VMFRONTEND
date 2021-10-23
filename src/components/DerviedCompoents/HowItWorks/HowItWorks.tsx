import React from 'react';
import { Number, TypoGraphy } from '../../BasicComponents';

interface HowItWorksProps {
  num: string;
  heading: string;
  paragraph: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  num,
  heading,
  paragraph,
}: HowItWorksProps) => {
  return (
    <div className="hiw d-flex flex-column ">
      <Number number={num} />
      <TypoGraphy variant="h4" classname="txt-primary fw-700 text-left">
        {heading}
      </TypoGraphy>
      <TypoGraphy variant="body2" classname="txt-primary fw-400 text-left">
        {paragraph}
      </TypoGraphy>
    </div>
  );
};
