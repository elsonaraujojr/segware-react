import { FeedsProvider } from "../../hooks/useFeeds";
import { Header } from "../Header";
import { ListFeeds } from "../ListFeeds";
import { Totalizer } from "../Totalizer";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <FeedsProvider>
      <Header />
      <Container>
        <Totalizer />
        <ListFeeds />
      </Container>
    </FeedsProvider>
  );
}
