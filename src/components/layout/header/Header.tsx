import { FC } from 'react';
import { Logo } from './Logo';
import { Button } from '@/components/ui/button/Button';
import { HEADER_USERS_TEXT, SIGNUP_TEXT } from '@/shared/constants/constants';

export const Header: FC = () => {
  return (
    <header className="header">
      <div className='header__wrapper'>
        <div className="header__content">
          <Logo />
          <div className="header__buttons">
            <a href="#users-section" className="header__buttons header__buttons--padding">
              <Button>{HEADER_USERS_TEXT}</Button>
            </a>
            <a href="#signup-section">
              <Button>{SIGNUP_TEXT}</Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
