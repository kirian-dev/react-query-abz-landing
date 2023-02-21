import { FC, useState } from 'react';
import { UsersSectionItem } from './UserSectionItem';
import { useUsers } from '../hooks/useUsers';
import { Heading } from '@/components/ui/heading/Heading';
import { Button } from '@/components/ui/button/Button';
import { IUser } from '@/types/user.interface';
import { USERS_TITLE_GET } from '@/shared/constants/constants';
import { Loader } from '@/components/ui/loader/Loader';

export const UsersSection: FC = () => {
  const { users, handleShowMore, showMoreButtonVisible, isLoading } = useUsers();

  return (
    <section id="users-section">
      <div className="users-section">
        <Heading type="medium" className="users-section__title">
          {USERS_TITLE_GET}
        </Heading>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ul className="users-section__list" id="users">
              {users &&
                users.pages.map(
                  (page) =>
                    page &&
                    page.users.map((user: IUser) => <UsersSectionItem user={user} key={user.id} />)
                )}
            </ul>
            <div className="users-section__footer">
              {showMoreButtonVisible && (
                <Button className="users-section__button" onClick={handleShowMore}>
                  Show more
                </Button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
