import AuthContext, { UserType } from "../context/AuthContext";
import { useState } from "react";
import axiosApi, { axiosTokenApi } from "../utils/axios";

interface TokenResponse {
  access_token: string;
  refresh_token: string;
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserType | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('access_token'))
  const [refreshToken, setRefreshToken] = useState<string | null>(localStorage.getItem('refresh_token'))

  const getTokenFromCode = async (code: string) => {
    try {
      const response = await axiosApi.post<TokenResponse>("/api/v2/oauth2/token", {
        grant_type: "authorization_code",
        client_id: "RHrMJDSovwIrGetZfgy0KbSzpzC7jVgr",
        client_secret: "fBSACGGumP9AcsBK6cwsJRv6ecCfyOS0PFM8pSqr0UyZsSZAerU76QpZvEWNboFj",
        redirect_uri: "http://localhost:3000",
        code: code
      });
  
      localStorage.setItem('access_token', response.data.access_token);
      setAccessToken(response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);
      setRefreshToken(response.data.refresh_token);
    } catch (error) {
      console.error("Failed to retrieve tokens:", error);
    }
  }

  const resetUserAndToken = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
  };

  const getOwnUser = async () => {
    if (accessToken === null || refreshToken === null) {
      return;
    }

    try {
      const response = await axiosTokenApi.get<UserType>('/api/v2/users/myself');
      setUser(response.data);
      return;
    } catch {
      console.log('access token has timed out');

      try {
        const response = await axiosApi.post<TokenResponse>('/api/v2/oauth2/token', {
          grant_type: "refresh_token",
          client_id: "RHrMJDSovwIrGetZfgy0KbSzpzC7jVgr",
          client_secret: "fBSACGGumP9AcsBK6cwsJRv6ecCfyOS0PFM8pSqr0UyZsSZAerU76QpZvEWNboFj",
          refresh_token: refreshToken
        });

        localStorage.setItem('access_token', response.data.access_token);
        setAccessToken(response.data.access_token);
        localStorage.setItem('refresh_token', response.data.refresh_token);
        setRefreshToken(response.data.refresh_token);

        setUser((await axiosTokenApi.get<UserType>('/api/v2/users/myself')).data);

        return;
      } catch {
        resetUserAndToken();
      }
    }
  }

  const value = { user, accessToken, refreshToken, getTokenFromCode, getOwnUser, resetUserAndToken };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
