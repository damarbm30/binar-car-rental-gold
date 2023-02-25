import create from "zustand";
import { persist } from "zustand/middleware";

const useCar = create(
  persist(
    (set, get) => ({
      total: 0,
      carList: [],
      setCarList: (params) => {
        set((state) => {
          return {
            carList: params.carList,
            total: params.total,
          };
        });
      },
    }),
    { name: "car" }
  )
);
export default useCar;
