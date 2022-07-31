import styled from "styled-components";

const ButtonsContainer = styled.div`
  width: 100vw;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  padding: 0 30px;

  & > button {
    width: 90px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 15px;

    font-size: 12pt;
    font-family: Secular One;
  }

  @media (min-width: 1000px) {
    padding: 0 130px;
  }
`;

export default ButtonsContainer;
