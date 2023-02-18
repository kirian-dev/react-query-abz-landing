export const API_URL = `${process.env.API_DOMAIN}/api/v1`;
export const getUsersUrl = (string: string) => `/users/${string}`;
export const getTokenUrl = () => '/token';
export const getPositionUrl = () => '/position';
