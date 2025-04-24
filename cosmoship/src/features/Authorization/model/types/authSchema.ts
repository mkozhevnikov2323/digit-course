export interface AuthData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    email: string;
  };
}

export type AuthMode = 'login' | 'register';
