import { FC } from 'react';
import { Button } from '@/components/ui/button/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { HERO_SUBHEADER, HERO_TITLE, SIGNUP_TEXT } from '@/shared/constants/constants';

export const HeroSection: FC = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <Heading type="large" className=''>
          {HERO_TITLE}
        </Heading>
        <p className="hero__text">{HERO_SUBHEADER}</p>
        <a href="#signup-section" className=''>
          <Button>{SIGNUP_TEXT}</Button>
        </a>
      </div>
    </section>
  );
};
