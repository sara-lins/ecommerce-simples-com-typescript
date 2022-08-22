import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 15rem;
  height: 20rem;
  padding: 10px;

  border-radius: 8px;
  background-color: white;
  border: 1px solid rgb(220, 220, 220);

  img {
    width: 5rem;
  }

  h3 {
    font-size: 1rem;
  }

  button {
    width: 10rem;
    height: 2rem;

    border: none;
    border-radius: 5px;
    color: white;
    background-color: rgb(0, 0, 205);
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;
