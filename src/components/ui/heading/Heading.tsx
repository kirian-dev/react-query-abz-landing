import { FC, ReactNode } from 'react';

interface HeadingProps {
  type: string;
  className?: string;
  children: ReactNode;
}

export const Heading: FC<HeadingProps> = ({ type, className, children }) => {
  if (type === 'large') {
    return <h1 className={`${className}`}>{children}</h1>;
  }

  if (type === 'medium') {
    return <h2 className={className}>{children}</h2>;
  }

  return <></>;
};
