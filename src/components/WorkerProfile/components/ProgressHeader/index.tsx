import React from 'react';

// components
import Steps from './components/Steps';
import ProgressBar from './components/ProgressBar';

// interfaces
import { PHProps } from './interface';

// styles
import { Container, Column, Label, FlexRow } from './styles';

const ProgressHeader: React.FC<PHProps> = ({
  label,
  step,
  stepOf,
  stepLabel,
}) => (
  <Container>
    <FlexRow>
      <Column>
        <Label>{label}</Label>
        <ProgressBar step={step} stepOf={stepOf} />
      </Column>
      <Steps stepLabel={stepLabel} step={step} stepOf={stepOf} />
    </FlexRow>
  </Container>
);

export default ProgressHeader;
