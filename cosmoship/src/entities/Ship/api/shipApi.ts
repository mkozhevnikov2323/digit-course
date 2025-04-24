import { axiosInstance } from '@/shared/lib/api/axios';
import type { Ship } from '../model/types/shipSchema';

export const fetchShips = async (): Promise<Ship[]> => {
  const response = await axiosInstance.get<Ship[]>('/api/ships');
  return response.data;
};
