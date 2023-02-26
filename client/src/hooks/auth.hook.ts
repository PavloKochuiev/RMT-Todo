import { useEffect, useState, useCallback } from "react";

export const useAuth = () => {
  const [token, setToken] = useState<String | null>(null);
  const [userId, setUserId] = useState<String | null>(null);
  const [isReady, setIsReady] = useState(false);

  const login = useCallback(
    (jwtToken: string, id: string) => {
      setToken(jwtToken);
      setUserId(id);
      localStorage.setItem(
        "userData",
        JSON.stringify({ token: jwtToken, userId: id })
      );
    },
    [token, userId]
  );

  const logout = () => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem("userData");
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData") || "{}");
    if (data && data.token) {
      login(data.token, data.userId);
    }
    setIsReady(true);
  }, [login]);

  return { login, logout, token, userId, isReady };
};
