import { createContext, ReactNode, useContext, useEffect, useId, useState } from "react";
import jwt from 'jwt-decode'
import { api } from "../services/api";
import { toast } from "react-toastify";

interface User {
  id: number;
  username: string;
  password?: string;
}

type UserLogin = Omit<User, "id">;

interface UseAuthProviderProps {
  children: ReactNode;
}

interface UseAuthContextData {
  userId?: number;
  logout(): void;
  login(user: UserLogin): Promise<void>;
  authenticated: boolean;
}

const UseAuthContext = createContext<UseAuthContextData>(
  {} as UseAuthContextData
);

export function UseAuthProvider({ children }: UseAuthProviderProps) {
  const [userId, setUserId] = useState<number>();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userOld: User = jwt(token);
      setUserId(userOld.id);
    }
  }, []);

  async function login(userLigon: UserLogin) {
    try {
      const token = await api
        .post("/sign-in", userLigon)
        .then((response) => response.data);

      if (token) {
        localStorage.setItem("token", token);
        setAuthenticated(true);
      }
    } catch (error) {
      toast.error("Erro ao realizar login");
      setAuthenticated(false);
    }
  }

  async function logout() {
    localStorage.removeItem("token");
    setAuthenticated(false);
    window.location.href = "/login";
  }

  return (
    <UseAuthContext.Provider value={{ login, logout, userId, authenticated }}>
      {children}
    </UseAuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UseAuthContext);

  return context;
}
