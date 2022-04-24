import { FormEvent, useState } from "react";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import { useFeeds } from "../../hooks/useFeeds";
import { api } from "../../services/api";
import { ItemFeed } from "../ItemFeed";
import { Container } from "./styles";

interface PropsReaction {
  feedId: number;
  love?: boolean;
  like?: boolean;
}

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

  async function handleLikeFeed(reaction: PropsReaction) {
    console.log(reaction);
    const response = await api.post('/reaction', reaction);
    if(response.status === 200) {
      window.location.reload();
    }
    
  }

  return (
    <Container>
      <form onSubmit={handleCreateNewTransaction}>
        <textarea
          placeholder="Qual comentário que envia?"
          onChange={(event) => setNewFeed(event.target.value)}
          value={newFeed}
        />

        <div>
          <button type="submit">Enviar comentário</button>
        </div>
      </form>

      <div className="item-feed-style">
        {feeds.map((feed) => {
          return (
            <ItemFeed key={feed.id} content={feed.content}>
              <button
                type="button"
                aria-label="Marcar como Like"
                className={`like-button ${feed.activeUserLikedIt && "liked"}`}
                onClick={() => {
                  handleLikeFeed({
                    feedId: feed.id,
                    like: !feed.activeUserLikedIt,
                  });
                }}
              >
                <FaThumbsUp size={20} />
              </button>

              <span>{feed.likes}</span>

              <button
                type="button"
                aria-label="Marcar como Love"
                className={`like-button ${feed.activeUserLovedIt && "loved"}`}
                onClick={() => {
                  handleLikeFeed({
                    feedId: feed.id,
                    love: !feed.activeUserLovedIt,
                  });
                }}
              >
                <FaHeart size={20} />
              </button>
              <span>{feed.loves}</span>
            </ItemFeed>
          );
        })}
      </div>
    </Container>
  );
}
