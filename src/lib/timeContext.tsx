"use client";

import { redTime, totalTime } from "@/data";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
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
  reduce1Min: () => void;
  hint: number;
  setHint: Dispatch<SetStateAction<number>>;
  usedHints: number[];
  setUsedHints: Dispatch<SetStateAction<number[]>>;
};

const def = {
  seconds: totalTime,
  isActive: false,
  toggleTimer: () => {},
  resetTimer: () => {},
  changeTime: (n: number) => {},
  isRed: false,
  reduce1Min: () => {},
  hint: 0,
  setHint: () => {},
  usedHints: [0],
  setUsedHints: () => {},
};

const timeContext = createContext<timeContextType>(def);

export function TimeProvider({ children }: { children: ReactNode }) {
  const [seconds, setSeconds] = useState(totalTime); // 10 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [hint, setHint] = useState(0);
  const [usedHints, setUsedHints] = useState<number[]>([0]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(totalTime);
    setUsedHints([0]);
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
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  useEffect(() => {
    if (seconds < redTime) setIsRed(true);
  }, [seconds]);

  const changeTime = (sec: number) => {
    setSeconds(sec);
  };

  const reduce1Min = () => {
    setSeconds((seconds) => seconds - 60);
  };

  return (
    <timeContext.Provider
      value={{
        seconds,
        isActive,
        toggleTimer,
        resetTimer,
        changeTime,
        isRed,
        reduce1Min,
        setUsedHints,
        setHint,
        hint,
        usedHints,
      }}
    >
      {children}
    </timeContext.Provider>
  );
}

export const useTimeContext = () => useContext(timeContext);
