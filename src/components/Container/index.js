import styled from "styled-components";

const Container = styled.section`
  width: 100vw;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  flex-wrap: nowrap;

  padding: 10px;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 426px) {
  }

  @media (min-width: 769px) {
    width: 80vw;
    height: 63vh;

    overflow: scroll;

    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;

    margin: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default Container;
