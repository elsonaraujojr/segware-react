import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { useUseAuth } from "../hooks/useAuth";

export function AppRoutes() {
  const { authenticated } = useUseAuth();

  if(authenticated) {
    window.location.href = "/";
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
