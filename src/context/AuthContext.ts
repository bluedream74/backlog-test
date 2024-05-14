import { createContext, useContext } from 'react';

export interface UserType {
  id: number;
  userId: string;
  name: string;
  mailAddress: string;
  nulabAccount: {
    nulabId: string;
    name: string;
    iconUrl: string;
    uniqueId: string;
  }
}

export interface AuthContextType {
  user: UserType | null;
  accessToken: string | null;
  refreshToken: string | null;
  getTokenFromCode: (code: string) => void;
  getOwnUser: () => void;
  resetUserAndToken: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);
const useAuth = () => {
  return useContext(AuthContext);
}

export { useAuth };
export default AuthContext;
