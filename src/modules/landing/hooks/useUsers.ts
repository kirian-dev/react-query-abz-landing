import { useQuery, useMutation } from 'react-query';
import { UserService } from "../services/user.service";
import { IUser } from '@/types/user.interface';

export const useUsers = (page: string) => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery(['users', page], () => UserService.getUsers(page));

  const {
    mutate: createUser,
    isLoading: isCreating,
    error: createError,
  } = useMutation((data: IUser[]) => UserService.createUser('token', data));

  const {
    data: token,
    isLoading: isTokenLoading,
    error: tokenError,
  } = useQuery('token', UserService.getToken);

  const {
    data: positions,
    isLoading: isPositionLoading,
    error: positionError,
  } = useQuery('positions', UserService.getPositions);

  return {
    users,
    createUser,
    isLoading: isLoading || isCreating || isTokenLoading || isPositionLoading,
    error: error || createError || tokenError || positionError,
    positions,
  };
};
