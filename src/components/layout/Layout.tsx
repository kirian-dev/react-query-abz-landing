import { FC } from 'react';
import { MetaTitle } from '../meta/Meta';
import { Header } from './header';

interface LayoutProps {
  children?: JSX.Element;
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="layout">
      <MetaTitle title={title} />
      <Header />
      <div className="layout__content">{children}</div>
    </div>
  );
};
