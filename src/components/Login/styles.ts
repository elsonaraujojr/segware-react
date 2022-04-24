import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: o 2rem;

  form {
    border-radius: 0.25rem;
    background-color: var(--shape);
    color: var(--text-title);
    width: 100%;
    max-width: 400px;
    padding: 0.5rem;

    label {
      display: block;
    }

    input {
      border: 1px solid var(--text-body);
      border-radius: 0.25rem;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      width: 100%;
    }

    button {
      background-color: var(--blue-light);
      color: var(--shape);
      border: none;

      border-radius: 0.25rem;
      padding: 0.5rem;
      width: 50%;
      text-align: center;
      margin-top: 0.5rem;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
