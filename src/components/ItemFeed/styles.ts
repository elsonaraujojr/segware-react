import styled from "styled-components";

export const Container = styled.div`
  background: var(--shape);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-top: 1rem;

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      gap: 0.5rem;
    }
    
    button {
      border: 0;
      background: transparent;
      transition: filter 0.2;
      cursor: pointer;

      &.like-button {
        display: flex;
        color: var(--icon);

        &.liked {
          color: var(--blue);
        }
        &.loved {
          color: var(--red);
        }
      }

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

