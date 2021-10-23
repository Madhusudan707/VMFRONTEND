import React from 'react';
import './screen.scss';

interface ScreenProps {
  children: React.ReactNode;
  classes?: string;
}
export const Screen: React.FC<ScreenProps> = ({
  children,
  classes,
}: ScreenProps) => {
  return <div className={`screen ${classes}`}>{children}</div>;
};
