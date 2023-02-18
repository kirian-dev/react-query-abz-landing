import { Button } from '@/components/ui/button/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { HERO_SUBHEADER, HERO_TITLE, SIGNUP_TEXT } from '@/shared/constants/constants';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: FC = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <Heading type="large">
          {HERO_TITLE}
        </Heading>
        <p className="hero__text">{HERO_SUBHEADER}</p>
        <Link to="#signup-section" className=''>
          <Button>{SIGNUP_TEXT}</Button>
        </Link>
      </div>
    </section>
  );
};
