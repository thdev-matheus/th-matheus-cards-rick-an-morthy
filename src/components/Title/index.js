import styled from "styled-components";

const Title = styled.h1`
  width: 280px;

  font-family: ReM;
  font-size: 35pt;

  color: #00b5cc;
  -webkit-text-stroke-color: #184157;
  -webkit-text-stroke-width: 1px;
  text-shadow: -3px -3px 0px #b5e127, -3px 3px 0px #b5e127, 3px -3px 0px #b5e127,
    3px 3px 0px #b5e127;

  text-align: center;

  margin: 15px auto;

  @media (min-width: 426px) {
    width: 400px;

    margin: 20px auto;

    font-size: 50pt;
  }

  @media (min-width: 768px) {
    margin: 20px auto 15px;

    font-size: 40pt;
    text-shadow: -4px -4px 0px #b5e127, -4px 4px 0px #b5e127,
      4px -4px 0px #b5e127, 4px 4px 0px #b5e127;
  }
`;

export default Title;
