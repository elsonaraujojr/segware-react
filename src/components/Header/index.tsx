import logoImg from "../../assets/images/segware-branco.webp";
import { useAuth } from "../../hooks/useAuth";
import { Container, Content } from "./styles";

export function Header() {

  const { logout } = useAuth();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Segware" />

        <button type="button" onClick={logout}>
          Sair
        </button>
      </Content>
    </Container>
  );
}