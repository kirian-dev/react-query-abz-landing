import { useCallback, useMemo, useState } from 'react';
import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { UserService } from '../services/user.service';
import { ICreateUser } from '@/types/user.interface';

const initialPage = '1';

export const useUsers = () => {
  const queryData = useInfiniteQuery(
    ['users', initialPage],
    ({ pageParam = initialPage }) => UserService.getUsers(pageParam),
    {
      getNextPageParam: (lastPage) => lastPage && lastPage.links.next_url && lastPage.page + 1,
      staleTime: Infinity,
    }
  );
  const { data: users, isLoading, error, fetchNextPage, hasNextPage } = queryData;

  const handleShowMore = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  const showMoreButtonVisible = useMemo(() => {
    return !isLoading && !error && hasNextPage;
  }, [isLoading, error, hasNextPage]);

  const {
    mutate: createUser,
    isLoading: isCreating,
    error: createUserError,
    isSuccess: createUserSuccess,
  } = useMutation((data: ICreateUser) => UserService.createUser(data), {
    onSuccess() {
      queryData.refetch();
    },
  });
  const {
    data: positions,
    isLoading: isPositionLoading,
    error: positionError,
  } = useQuery('positions', UserService.getPositions);
  return useMemo(
    () => ({
      users,
      createUser,
      isLoading,
      isCreating,
      error,
      createUserError,
      positions,
      handleShowMore,
      showMoreButtonVisible,
      createUserSuccess,
    }),
    [
      users,
      createUser,
      isLoading,
      isCreating,
      isPositionLoading,
      error,
      createUserError,
      positionError,
      positions,
      showMoreButtonVisible,
      handleShowMore,
      createUserSuccess,
    ]
  );
};
