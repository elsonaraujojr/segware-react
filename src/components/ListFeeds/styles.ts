import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;

  form {
    textarea {
      width: 100%;
      border: 0;
      padding: 1rem;
      border-radius: 0.25rem;
      background: var(--shape);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
      resize: vertical;
      min-height: 9rem;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

      button {
        font-size: 1rem;
        color: var(--shape);
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }

  .item-feed-style {
    margin-top: 2rem;
  }
`;
