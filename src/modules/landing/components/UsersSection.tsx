import { Header } from '@/components/layout/header';
import { Heading } from '@/components/ui/heading/Heading';
import { USERS_TITLE_GET } from '@/shared/constants/constants';
import { FC } from 'react';
import { UsersSectionItem } from './UserSectionItem';

export const UsersSection: FC = () => {
  return (
    <section>
      <div className="users-section">
        <Heading type="medium" className="users-section__title">
          {USERS_TITLE_GET}
        </Heading>
        <div className="users-section__list" id="users"></div>
      {/* <UsersSectionItem  />
        <button className="users-section__button">Show more</button> */}
      </div>
    </section>
  );
};
