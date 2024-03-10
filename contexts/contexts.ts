import { createContext } from "react";
export type CategoryContextType = {
  active: number;
  setActive: (value: number) => void;
};
export const CategoryContext = createContext<CategoryContextType | null>(null);
