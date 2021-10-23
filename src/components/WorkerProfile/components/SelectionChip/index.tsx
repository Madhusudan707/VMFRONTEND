import React from 'react';

// components
import Spinner from '../../../BasicComponents/Spinner/Spinner';

// icons
import bluetick from '../../../../assets/icons/bluetick.svg';

// intercfaes
import { SCProps } from './interface';

// styles
import { Container, Chip, Column, Title, SubTitle, Icon, Row } from './styles';

const SelectionChip: React.FC<SCProps> = ({
  title = '',
  subTitle,
  isSelected,
  isModal,
  loading = false,
}) => {
  const spinner = loading && <Spinner variant="secondary" />;

  return (
    <Container>
      <Chip isSelected={isSelected} isModal={isModal}>
        <Row>
          <Column>
            <Title>
              <span>{title}</span>
            </Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
          </Column>
          {spinner}
        </Row>
        {isSelected && <Icon src={bluetick} alt="selected icon" />}
      </Chip>
    </Container>
  );
};

export default SelectionChip;
