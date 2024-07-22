import { useState, useEffect } from "react";

export const useLocalStorageToken = (key = "jwtToken") => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem(key);
    setToken(storedToken);
  }, [key]);

  const saveToken = (newToken) => {
    localStorage.setItem(key, newToken);
    setToken(newToken);
  };

  const removeToken = () => {
    localStorage.removeItem(key);
    setToken(null);
  };

  return { token, saveToken, removeToken };
};
