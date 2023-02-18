import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button/Button';
import { HEADER_USERS_TEXT, SIGNUP_TEXT } from '@/shared/constants/constants';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <div className="header__buttons">
          <Link to="#users-sections" className="header__buttons header__buttons--padding">
            <Button>{HEADER_USERS_TEXT}</Button>
          </Link>
          <Link to="#signup-section">
            <Button>{SIGNUP_TEXT}</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
