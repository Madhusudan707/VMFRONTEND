import React from 'react';
import { Radio } from '..';
import './dropdown.scss';

interface ModalItemsProps {
  ItemId: string;
  ItemLabel: string;
  ItemValue: string;
  ItemName: string;
  ItemIcon: string;
  handleOptionChange: any;
}
const ModalItems: React.FC<ModalItemsProps> = ({
  ItemId,
  ItemLabel,
  ItemValue,
  ItemName,
  ItemIcon,
  handleOptionChange,
}: ModalItemsProps) => {
  return (
    <li className="modal-i-items">
      <Radio
        id={ItemId}
        label={ItemLabel}
        value={ItemValue}
        name={ItemName}
        icon={ItemIcon}
        handleOptionChange={(e: any) => handleOptionChange(e)}
      />
    </li>
  );
};

export default ModalItems;
