import styled from "styled-components";

const CardBox = styled.div`
  min-width: 200px;
  height: 300px;

  background-color: ${(props) => props.bgColor};

  border-radius: 15px;
  border: 2px solid ${(props) => props.borderColor};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 10px;

  text-align: center;
  white-space: nowrap;
`;

export default CardBox;
