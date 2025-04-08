// src/store/routeStore.ts
import { create } from 'zustand';

interface RouteStore {
    prevRoute: string | null;
    setPrevRoute: (path: string) => void;
}

export const useRouteStore = create<RouteStore>((set) => ({
    prevRoute: null,
    setPrevRoute: (path) => set({ prevRoute: path }),
}));
