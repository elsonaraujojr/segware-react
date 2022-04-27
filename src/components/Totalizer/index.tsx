import { FaHeart, FaIcons, FaThumbsUp } from "react-icons/fa";
import { useAuth } from "../../hooks/useAuth";
import { useFeeds } from "../../hooks/useFeeds";
import { Container } from "./styles";

export function Totalizer() {
  const { feeds } = useFeeds();
  const { userId } = useAuth();
  console.log(userId)

  const result = feeds.reduce(
    (accumulator, feed) => {
      if (feed.author.id === userId) {
        accumulator.like += feed.likes;
        accumulator.love += feed.loves;
        accumulator.total += feed.likes + feed.loves;
      }

      return accumulator;
    },
    {
      like: 0,
      love: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Love</p>
          <FaHeart size={30} />
        </header>
        <strong>{result.love}</strong>
      </div>

      <div>
        <header>
          <p>Likes</p>
          <FaThumbsUp size={30} />
        </header>
        <strong>{result.like}</strong>
      </div>

      <div className="blue-light-plus">
        <header>
          <p>Total</p>
          <FaIcons size={30} />
        </header>
        <strong>{result.total}</strong>
      </div>
    </Container>
  );
}
