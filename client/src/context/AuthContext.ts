import { createContext } from "react";

export type AuthContextType = {
  login: (jwtToken: string, id: string) => void;
  logout: () => void;
  token: String | null;
  userId: String | null;
  isReady: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  token: "",
  userId: "",
  isReady: false,
});
