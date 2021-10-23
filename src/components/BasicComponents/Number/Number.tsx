import React from 'react';
import './Number.scss';

interface NumberProps {
  number: string;
}
export const Number: React.FC<NumberProps> = ({ number }: NumberProps) => {
  return (
    <div className="numCircle rounded-circle d-flex justify-content-center align-items-center text-white text-bold">
      {number}
    </div>
  );
};
