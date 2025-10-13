"use client";

import { appConfig } from "@/app.config";
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
  penaltyTheTime: () => void;
  hint: null | number;
  setHint: Dispatch<SetStateAction<number | null>>;
  usedHints: number[];
  setUsedHints: Dispatch<SetStateAction<number[]>>;
};

const def = {
  seconds: appConfig.totalTimeInSeconds,
  isActive: false,
  toggleTimer: () => {},
  resetTimer: () => {},
  changeTime: (n: number) => {},
  isRed: false,
  penaltyTheTime: () => {},
  hint: null,
  setHint: () => {},
  usedHints: [0],
  setUsedHints: () => {},
};

const timeContext = createContext<timeContextType>(def);

export function TimeProvider({ children }: { children: ReactNode }) {
  const [seconds, setSeconds] = useState(appConfig.totalTimeInSeconds); // 10 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isRed, setIsRed] = useState(false);
  const [hint, setHint] = useState<null | number>(null);
  const [usedHints, setUsedHints] = useState<number[]>([]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(appConfig.totalTimeInSeconds);
    setIsActive(false);
    setUsedHints([]);
    setHint(null);
    setIsRed(false);
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
    if (seconds < appConfig.timeAtRedColor) setIsRed(true);
  }, [seconds]);

  const changeTime = (sec: number) => {
    setSeconds(sec);
  };

  const penaltyTheTime = () => {
    const penalty = appConfig.timePenaltyForHint;
    if (seconds > penalty) setSeconds((seconds) => seconds - penalty);
    else if (appConfig.timeOutIfHintTakenCausesTimeUp) setSeconds(0);
  };

  useEffect(() => {
    if (hint !== null && !usedHints.includes(hint)) {
      penaltyTheTime();
      let temp = [...usedHints, hint];
      setUsedHints(temp);
    }
  }, [hint]);

  return (
    <timeContext.Provider
      value={{
        seconds,
        isActive,
        toggleTimer,
        resetTimer,
        changeTime,
        isRed,
        penaltyTheTime,
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
