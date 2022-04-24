import { UseAuthProvider } from "./hooks/useAuth";
import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";


export function App() {
  return (
    <UseAuthProvider>
      <ToastContainer autoClose={3000} />
        <AppRoutes />
        <GlobalStyle />
    </UseAuthProvider>
  );
}
