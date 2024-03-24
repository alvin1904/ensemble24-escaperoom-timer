"use client";

import { redTime, totalTime } from "@/data";
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
  changeTime: (n: number) => void;
  isRed: boolean;
};

const def = {
  seconds: totalTime,
  isActive: false,
  toggleTimer: () => {},
  resetTimer: () => {},
  changeTime: (n: number) => {},
  isRed: false,
};

const timeContext = createContext<timeContextType>(def);

export function TimeProvider({ children }: { children: ReactNode }) {
  const [seconds, setSeconds] = useState(totalTime); // 10 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(totalTime);
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

  useEffect(() => {
    if (seconds < redTime) setIsRed(true);
  }, [seconds]);

  const changeTime = (sec: number) => {
    setSeconds(sec);
  };

  return (
    <timeContext.Provider
      value={{ seconds, isActive, toggleTimer, resetTimer, changeTime, isRed }}
    >
      {children}
    </timeContext.Provider>
  );
}

export const useTimeContext = () => useContext(timeContext);
