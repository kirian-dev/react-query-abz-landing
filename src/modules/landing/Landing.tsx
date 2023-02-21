import { FC } from 'react';
import { HeroSection } from './components/HeroSection';
import { UsersSection } from './components/UsersSection';
import { SignUpSection } from './components/SignUpSection';

export const Landing: FC = () => {
  return (
    <>
      <HeroSection />
      <UsersSection />
      <SignUpSection />
    </>
  );
};
