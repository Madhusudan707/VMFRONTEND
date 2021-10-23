import React from 'react';

// interfaces
import { SProps } from './interface';

// styles
import { Container, Label, Step } from './styles';

const Steps: React.FC<SProps> = ({ stepLabel, step, stepOf }) => {
  const percentageCompleted = Math.ceil((step / stepOf) * 100);

  return (
    <Container>
      <Step isComplete={step === stepOf}>{percentageCompleted} %</Step>
      <Label>{stepLabel}</Label>
    </Container>
  );
};

export default Steps;
