import React from "react";
import { create } from "zustand";

const useCounter = create((set) => {
  return {
    count: 0,
    handleIncrementCount: () => {
      set((state) => ({
        count: state.count + 1,
      }));
    },
  };
});

export default useCounter;
