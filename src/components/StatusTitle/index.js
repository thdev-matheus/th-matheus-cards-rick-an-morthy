import styled from "styled-components";

const StatusTitle = styled.h3`
  font-size: 10pt;
  font-family: Secular One;

  color: #fff;

  width: 170px;

  overflow: hidden;
  text-overflow: ellipsis;

  & > span {
    font-size: 16pt;
    color: ${(props) => props.color};
  }
`;

export default StatusTitle;
