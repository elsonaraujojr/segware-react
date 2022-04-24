import { createContext, ReactNode, useContext, useState } from "react";
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
  // user: User;
  logout(): void;
  login(user: UserLogin): Promise<void>;
  authenticated: boolean;
}

const UseAuthContext = createContext<UseAuthContextData>(
  {} as UseAuthContextData
);

export function UseAuthProvider({ children }: UseAuthProviderProps) {
  // const [user, setUser] = useState<User>({} as User);
  const [authenticated, setAuthenticated] = useState(false);

  async function login(user: UserLogin) {
    try {
      const token = await api
        .post("/sign-in", user)
        .then((response) => response.data);

      if (token) {
        localStorage.setItem("token", token);
        console.log(typeof localStorage.getItem("token"));

        setAuthenticated(true);
      }
      console.log("Login realizado com sucesso!");
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
    <UseAuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </UseAuthContext.Provider>
  );
}

export function useUseAuth() {
  const context = useContext(UseAuthContext);

  return context;
}
