"use client";

import { ReactNode, createContext, useContext, useState } from "react";

type userContextType = {
  token: string | null;
  userDetails: userDetailsType | null;
  signOut: () => void;
  handleAuthentication: () => void;
  fetchUserDetails: () => void;
};

const userContext = createContext<userContextType>({
  token: null,
  userDetails: null,
  signOut: () => {},
  handleAuthentication: () => {},
  fetchUserDetails: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(null);
  const fetchToken = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };
  const updateDetails = async () => {
    try {
    } catch (err: any) {}
  };
  return (
    <userContext.Provider
      value={{
        token,
        userDetails,
        signOut,
        handleAuthentication,
        fetchUserDetails,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export const useTimeContext = () => useContext(timeContext);
