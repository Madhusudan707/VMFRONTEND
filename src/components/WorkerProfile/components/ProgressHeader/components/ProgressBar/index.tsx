import React from 'react';

// interfaces
import { PBProps } from './interface';

// styles
import { Container, Bar, Fill } from './styles';

const DEFAULT_BARS_SIZE = 10;

const ProgressBar: React.FC<PBProps> = ({ step, stepOf }) => {
  const stepInPercentage = (step / stepOf) * DEFAULT_BARS_SIZE;

  const bar = new Array(DEFAULT_BARS_SIZE).fill(null).map((_, index) => {
    const isHalfBar = Math.round(stepInPercentage) !== index + 1;
    const isComplete =
      stepInPercentage === index + 1 ||
      (isHalfBar && index < Math.round(stepInPercentage));

    return (
      <Bar key={Math.random()} isComplete={isComplete}>
        <Fill
          isHalfBar={isHalfBar}
          isComplete={stepInPercentage === index + 1}
        />
      </Bar>
    );
  });

  return <Container>{bar}</Container>;
};

export default ProgressBar;
