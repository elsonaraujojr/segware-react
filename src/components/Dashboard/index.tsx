import { useFeeds } from "../../hooks/useFeeds";
import { Totalizer } from "../Totalizer";
import { Container } from "./styles";

export function Dashboard() {
  const { feeds } = useFeeds();
  return (
    <Container>
      <Totalizer />
      {feeds.map((feed) => (
        <p key={feed.id}> {feed.content} </p>
      ))}
    </Container>
  );
}
