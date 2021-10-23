import React from 'react';
// components
import WorkerModal from './components/WorkerModal';

// styles
import { Container } from './styles';

const WorkerProfile: React.FC<{
  onModalToggle: (val: any) => void;
}> = ({ onModalToggle }) => {
  const workerModalProps = {
    visible: true,
    onModalToggle,
  };

  return (
    <Container>
      <WorkerModal {...workerModalProps} />
    </Container>
  );
};

export default WorkerProfile;
