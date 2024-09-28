export interface LoginRequestData {
  [index: string]: unknown;
  email: string;
  password: string;
}

export interface LoginResponseData {
  type: string;
  accessToken: string;
  refreshToken: string;
}
