import { IUser } from '@/types/user.interface';
import { FC } from 'react';

interface Props {
  user: IUser;
}

export const UsersSectionItem: FC<Props> = ({ user }) => {
  return (
    <div className="users-card">
      <img src={user.photo} alt={user.name} className="users-card__image" />
      <ul className="users-card__list">
        <li className="users-card__list-item">{user.name}</li>
        <li className="users-card__list-item">{user.position}</li>
        <li className="users-card__list-item">
          <a href={`mailto:${user.email}`} className="users-card__contact">
            {user.email}
          </a>
        </li>
        <li className="users-card__list-item">
          <a href={`tel:${user.phone}`} className="users-card__contact">
            {user.phone}
          </a>
        </li>
      </ul>
    </div>
  );
};
