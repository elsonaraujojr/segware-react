import logoImg from "../../assets/images/segware-branco.webp";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Logo Segware" />

        <button type="button">Novo comentário</button>
      </Content>
    </Container>
  );
}