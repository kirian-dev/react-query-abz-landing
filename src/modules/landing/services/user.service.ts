import { api } from '@/lib/api';
import { IPositionsData } from './../../../types/position.interface';
import { getPositionUrl, getTokenUrl, getUsersUrl } from '@/configs/api.config';
import { IUsersData, IToken, ICreateUser } from './../../../types/user.interface';

export const UserService = {
  async getUsers(page: string): Promise<IUsersData | undefined> {
    try {
      const users = await api.get<IUsersData>(`${getUsersUrl(`?page=${page}&count=6`)}`);

      return users.data;
    } catch (error) {
      throw error;
    }
  },
  async createUser(data: ICreateUser) {
    const token = await this.getToken();
    if (!token) {
      return;
    }

    const user = await api.post(`${getUsersUrl('')}`, data, {
      headers: {
        token: token.token,
        'Content-Type': 'multipart/form-data',
      },
    });

    return user.data;
  },
  async getToken(): Promise<IToken | undefined> {
    try {
      const token = await api.get<IToken>(`${getTokenUrl()}`);

      return token.data;
    } catch (error) {
      console.log(error);
    }
  },
  async getPositions(): Promise<IPositionsData | undefined> {
    const positions = await api.get<IPositionsData>(`${getPositionUrl()}`);

    return positions.data;
  },
};
