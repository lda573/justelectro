export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
}

export interface UserInfo {
  userId: string;
  username: string;
  roles: string[];
}
