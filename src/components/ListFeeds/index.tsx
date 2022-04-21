import { FormEvent, useState } from "react";
import { useFeeds } from "../../hooks/useFeeds";
import { Container } from "./styles";

export function ListFeeds() {
  const { feeds, createFeed } = useFeeds();
  const [newFeed, setNewFeed] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createFeed({
      content: newFeed,
    });

    clearForm();
  }

  function clearForm() {
    setNewFeed("");
  }

  return (
    <Container>
      <form onSubmit={handleCreateNewTransaction}>
        <textarea
          placeholder="Qual comentário que envia?"
          onChange={(event) => setNewFeed(event.target.value)}
          value={newFeed}
        />

        <div className="form-footer">
          <button type="submit">Enviar comentário</button>
        </div>
      </form>

      {feeds.map((feed) => (
        <p key={feed.id}> {feed.content} </p>
      ))}
    </Container>
  );
}
