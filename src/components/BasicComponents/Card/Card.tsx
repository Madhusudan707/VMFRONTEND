import React from 'react';

interface CardProps {
  classes: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ classes, children }: CardProps) => {
  return (
    <div className={`card ${classes}`}>
      <div className="card-body">{children}</div>
    </div>
  );
};
