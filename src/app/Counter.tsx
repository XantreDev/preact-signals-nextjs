"use client";

import { useSignal } from "@preact-signals/safe-react";

export const Counter = () => {
  const count = useSignal(0);
  return (
    <div className="flex flex-col items-center mb-20">
      <h1>Signals counter</h1>
      <p>Current count: {count.value}</p>
      <button className="btn" onClick={() => count.value++}>
        Increment
      </button>
    </div>
  );
};
