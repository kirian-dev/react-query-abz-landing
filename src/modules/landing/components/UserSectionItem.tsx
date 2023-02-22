import { FC, useState } from 'react';
import { IUser } from '@/types/user.interface';
import { Tooltip } from '@/components/ui/tooltip/Tooltip';
interface Props {
  user: IUser;
}

export const UsersSectionItem: FC<Props> = ({ user }) => {
  const [tooltip, setTooltip] = useState(false);

  const handleMouseEnter = () => {
    setTooltip(true);
  };

  const handleMouseLeave = () => {
    setTooltip(false);
  };
  return (
    <>
      <li className="users-card" key={user.id}>
        <img src={user.photo} alt={user.name} className="users-card__image" />
        <ul className="users-card__list">
          <li className="users-card__list-item">{user.name}</li>
          <li className="users-card__list-item">{user.position}</li>
          <li
            className="users-card__list-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
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
        {tooltip && <Tooltip content={user.email} />}
      </li>
    </>
  );
};
