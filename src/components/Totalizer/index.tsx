import { Container } from "./styles";
import { FaHeart, FaThumbsUp, FaIcons } from "react-icons/fa";

export function Totalizer() {
  return (
    <Container>
      <div>
        <header>
          <p>Love</p>
          <FaHeart />
        </header>
        <strong>31</strong>
      </div>

      <div>
        <header>
          <p>Likes</p>
          <FaThumbsUp />
        </header>
        <strong>32</strong>
      </div>

      <div className="blue-light-plus">
        <header>
          <p>Total</p>
          <FaIcons />
        </header>
        <strong>33</strong>
      </div>
    </Container>
  );
}
