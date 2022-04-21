import { ListFeeds } from "../ListFeeds";
import { Totalizer } from "../Totalizer";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Totalizer />
      <ListFeeds />
    </Container>
  );
}
