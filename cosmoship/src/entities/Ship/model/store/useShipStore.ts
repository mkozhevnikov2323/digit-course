import { create } from 'zustand';
import { Ship } from '../types/shipSchema';

interface ShipStore {
  ships: Ship[];
  setShips: (ships: Ship[]) => void;
}

export const useShipStore = create<ShipStore>((set) => ({
  ships: [],
  setShips: (ships) => set({ ships }),
}));
