import { FaHeart, FaIcons, FaThumbsUp } from "react-icons/fa";
import { useFeeds } from "../../hooks/useFeeds";
import { Container } from "./styles";

export function Totalizer() {
  const { feeds } = useFeeds();
  console.log("Totalizer: ", feeds);

  const result = feeds.reduce(
    (accumulator, feed) => {
      if (feed.author.id === 8) {
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
          <FaHeart />
        </header>
        <strong>{result.love}</strong>
      </div>

      <div>
        <header>
          <p>Likes</p>
          <FaThumbsUp />
        </header>
        <strong>{result.like}</strong>
      </div>

      <div className="blue-light-plus">
        <header>
          <p>Total</p>
          <FaIcons />
        </header>
        <strong>{result.total}</strong>
      </div>
    </Container>
  );
}
