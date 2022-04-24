import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  content: string;
  children?: ReactNode;
}

export function ItemFeed({ content, children }: Props) {
  return (
    <Container>
      <footer>
        <p>{content}</p>
        <div>{children}</div>
      </footer>
    </Container>
  );
}
