import { createContext, useContext } from "react";

export const UserContext = createContext<{
  //   userToken?: any;
  //   setUserToken(val?: any): void;
  loggedInUser?: any;
  setCurrentUser(val: any): void;
}>({
  loggedInUser: null,
  setCurrentUser: () => void {},
});

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("UserContext must be used within UserProvider!");
  }
  return context;
}
