import { FC } from 'react';
import { HeroSection } from './components/HeroSection';
import { UsersSection } from './components/UsersSection';

export const Landing: FC = () => {
  return (
    <div>
      <HeroSection />
      <UsersSection />
    </div>
  );
};
