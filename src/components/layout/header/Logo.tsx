import { FC } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '@/assets/images/logo/logo.svg';

export const Logo: FC = () => {
  return (
    <Link to="/" className="logo">
      <img src={logoImg} alt="logo" />
    </Link>
  );
};
