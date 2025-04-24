import { axiosInstance } from '@/shared/lib/api/axios';

import { AuthData, AuthResponse } from '../model/types/authSchema';

export const authApi = {
  login: async (data: AuthData): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>('/api/login', data);
    return response.data;
  },

  register: async (data: AuthData): Promise<AuthResponse> => {
    const response = await axiosInstance.post<AuthResponse>(
      '/api/register',
      data,
    );
    return response.data;
  },
};
