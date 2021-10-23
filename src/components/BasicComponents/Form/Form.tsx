import React from 'react';

interface FormProps {
  className?: string;
  children: React.ReactNode;
  onSubmitHandler?: (e: any) => void;
}
export const Form: React.FC<FormProps> = ({
  className,
  children,
  onSubmitHandler,
}: FormProps) => {
  return (
    <form className={className} onSubmit={onSubmitHandler}>
      {children}
    </form>
  );
};
