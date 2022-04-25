import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate} from "react-router-dom";
import { Dashboard } from "../components/Dashboard";
import { Login } from "../components/Login";
import { useUseAuth } from "../hooks/useAuth";

export function AppRoutes() {

  // let navigate = useNavigate();
  const { authenticated } = useUseAuth();

  if(authenticated) {
    // return <Navigate to="/" />;
    // navigate("/");
    // return <Dashboard />;
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
