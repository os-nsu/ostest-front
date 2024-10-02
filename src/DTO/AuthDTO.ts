export interface LoginRequestData {
  [index: string]: unknown;
  username: string;
  password: string;
}

export interface LoginResponseData {
  type: string;
  accessToken: string;
  refreshToken: string;
}
