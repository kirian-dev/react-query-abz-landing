import { api } from '@/lib/api';
import { getPositionUrl, getTokenUrl, getUsersUrl } from '@/configs/api.config';
import { IUser } from './../../../types/user.interface';

export const UserService = {
  async getUsers(page: string) {
    try {
      const users = await api.get(`${getUsersUrl(`?page=${page}&count=6`)}`);

      return users;
    } catch (error) {
      console.log(error);
    }
  },
  async createUser(token: string, data: IUser[]) {
    try {
      const user =
        (await api.post(`${getUsersUrl('')}`),
        {
          headers: {
            Token: token,
          },
          body: {
            data,
          },
        });

      return user;
    } catch (error) {
      console.log(error);
    }
  },
  async getToken() {
    try {
      const token = await api.get(`${getTokenUrl()}`);

      return token;
    } catch (error) {
      console.log(error);
    }
  },
  async getPositions() {
    const positions = await api.get(`${getPositionUrl()}`);

    return positions;
  },
};
