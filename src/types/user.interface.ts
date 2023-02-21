export interface IUsersData {
  users: IUser[]
  count: number;
  links: {
    next_url: string;
    prev_url: string;
  }
  page: number;
  success: boolean;
  total_pages: number;
  total_users: number;
}

export interface IUser {
  id: number;
  photo: string;
  name: string;
  position: string;
  position_id: number;
  email: string;
  phone: string;
  registration_timestamp: number;
}

export interface ICreateUser {
  photo: string;
  name: string;
  position_id: string;
  email: string;
  phone: string;
}

export interface IToken {
  success: boolean;
  token: string;
}
