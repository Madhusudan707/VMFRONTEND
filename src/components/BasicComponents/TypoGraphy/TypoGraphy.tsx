import React from 'react';
import cn from 'classnames';
import './typoGraphy.scss';

interface TypographyProps {
  variant: string;
  children: React.ReactNode;
  classname?: string;
}
const variantsMapping: any = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading1: 'h6',
  subheading2: 'h6',
  body1: 'p',
  body2: 'p',
};

export const TypoGraphy: React.FC<TypographyProps> = ({
  variant,
  children,
  classname,
  ...props
}: TypographyProps) => {
  const Component = variant ? variantsMapping[variant] : 'p';

  return (
    <Component
      className={cn({
        [`typography--variant-${variant}`]: variant,
        [`${classname}`]: classname,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
