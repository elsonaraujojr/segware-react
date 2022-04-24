import logoImg from "../../assets/images/segware-branco.webp";
import { useUseAuth } from "../../hooks/useAuth";
import { Container, Content } from "./styles";

export function Header() {

  const { logout } = useUseAuth();

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