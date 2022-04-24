import { FormEvent, useState } from "react";
import { useUseAuth } from "../../hooks/useAuth";
import { Container } from "./styles";

export function Login() {

  const { login } = useUseAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendLogin = async (event: FormEvent) => {
    event.preventDefault();
    await login({ username, password });
    clearForm();
  };

  function clearForm() {
    setUsername("");
    setPassword("");
  }

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={sendLogin}>
        <div>
          <label htmlFor="email" className="test">Username</label>
          <input
            type="text"
            id="email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </Container>
  );
}
