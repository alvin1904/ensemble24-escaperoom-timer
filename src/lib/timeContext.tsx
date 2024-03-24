"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type timeContextType = {
  seconds: number;
  isActive: boolean;
  toggleTimer: () => void;
  resetTimer: () => void;
};

const def = {
  seconds: 600,
  isActive: false,
  toggleTimer: () => {},
  resetTimer: () => {},
};

const timeContext = createContext<timeContextType>(def);

export function TimeProvider({ children }: { children: ReactNode }) {
  const [seconds, setSeconds] = useState(600); // 10 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(600);
  };

  useEffect(() => {
    let interval: any = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      setIsActive(false);
      alert("Timer is up!");
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <timeContext.Provider
      value={{ seconds, isActive, toggleTimer, resetTimer }}
    >
      {children}
    </timeContext.Provider>
  );
}

export const useTimeContext = () => useContext(timeContext);
