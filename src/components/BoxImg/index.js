import styled from "styled-components";

const BoxImg = styled.div`
  width: 150px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  overflow: hidden;

  & > img {
    transition: width 1s;

    &:hover {
      width: 180px;
      transition: width 1s;
    }
  }
`;

export default BoxImg;
